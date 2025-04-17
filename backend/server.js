const path = require('path')
const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()

const {errorHandler} = require('./middleware/errorMiddleware')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/db')

const port = process.env.PORT || 5500

connectDB()

const app = express()

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
  try {
    const request = {
      httpRequest: {
        body: req.body,
        query: req.query,
        userAgent: req.headers['user-agent'],
      },
    };
    return next();
  } catch (error) {
    console.error('Middleware error:', error);
    return next(error);
  }
})
app.use('/api/notes', require('./routes/noteRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/building', require('./routes/engineerRoutes'))
app.use('/api/energy', require('./routes/energyRoutes'))
app.use('/api/createbuilding', require('./routes/buildingRoutes'))
app.use('/api/selectbuilding', require('./routes/selectorRoutes'))

//Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}


app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`))
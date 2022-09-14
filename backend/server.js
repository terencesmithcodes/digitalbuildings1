const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()

const {errorHandler} = require('./middleware/errorMiddleware')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
  const request = {
    httpRequest: {
      body: req.body,
      query: req.query,
      userAgent: req.headers['user-agent'],
    },
  };

  console.log(`Incoming ${req.method} ${req.url}\n${JSON.stringify(request)}`);
  return next();
  
})
app.use('/api/notes', require('./routes/noteRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/building', require('./routes/buildingRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`))
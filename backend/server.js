const path = require('path')
const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const { check, validationResult } = require('express-validator')
const hpp = require('hpp')

const {errorHandler} = require('./middleware/errorMiddleware')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/db')

const port = process.env.PORT || 5500

connectDB()

const app = express()

// Security middleware
// Set security headers
app.use(helmet())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
})

// Apply rate limiting to all requests
app.use(limiter)

// More strict rate limit for authentication routes
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 auth attempts per hour
  message: 'Too many login attempts, please try again after an hour'
})

// Apply stricter rate limiting to auth routes
app.use('/api/users/login', authLimiter)

// Prevent parameter pollution
app.use(hpp())

// Enable CORS with configured options
app.use(cors(corsOptions))

// Body parsing middleware
app.use(express.json({ limit: '10kb' })) // Limit body size
app.use(express.urlencoded({ extended: false, limit: '10kb' }))

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
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) =>{
  let token

  if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ){
    try{
      // get token from header
      token = req.headers.authorization.split(' ')[1]

      if (!token) {
        res.status(401)
        throw new Error('Not authorized, invalid token format')
      }

      //verify token from header
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // get user from token
      const user = await User.findById(decoded.id).select('-password')
      
      // Check if user still exists in the database
      if (!user) {
        res.status(401)
        throw new Error('User not found')
      }
      
      // Add user to request object
      req.user = user

      next()
    } catch (error){
      // Do not log the full error to prevent information disclosure
      console.log('Authentication error')
      
      if (error.name === 'TokenExpiredError') {
        res.status(401)
        throw new Error('Session expired, please login again')
      } else {
        res.status(401)
        throw new Error('Not authorized')
      }
    }
    return
  }

  res.status(401)
  throw new Error('Not authorized, no token')
})

// Role-based access control middleware
const authorize = (roles = []) => {
  // Convert single role to array if necessary
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return asyncHandler(async (req, res, next) => {
    // First run the protect middleware to ensure authentication
    if (!req.user || !req.user.role) {
      res.status(401)
      throw new Error('Not authorized')
    }

    // Check if user's role is allowed
    if (roles.length && !roles.includes(req.user.role)) {
      res.status(403)
      throw new Error('Forbidden: You do not have the required permission')
    }

    // User has the required role, proceed
    next()
  })
}

module.exports = {
  protect,
  authorize,
}
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers
const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

const timesToSaltPW = 10

// @desc Create new user
// @route POST /api/users/create
//@access Private
const createNewUser = asyncHandler(async(req, res) =>{
  const {username, email, password, role} = req.body
  console.log(`user: ${req.user}`)
  
  if(req.user.role !== 'admin'){
    res.status(401)
    throw new Error('User not authorized')
  }

  if (!username || !password || !email || !role){
    res.status(400)
    console.log('no data')
    throw new Error('Please add all fields')
  }

  const userExist = await User.findOne({username})

  if(userExist){
    console.log('I exist')
    res.status(400)
    throw new Error('User already exist')
  }



  const salt = await bcrypt.genSalt(timesToSaltPW)
  const hashedPassword = await bcrypt.hash(password, salt)
  
  
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    role
  })

  console.log(`user: ${user.username} `)

  if(user){
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    })
  }else{
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc Autenticate a user
// @route Get /api/users/login
//@access Public
const loginUser = asyncHandler(async(req, res) =>{
  const {username, password} = req.body

  const user = await User.findOne({username})

  if(user && (await bcrypt.compare(password, user.password)) && user.active){
    res.json({
      _id: user.id,
      username: user.username,
      role: user.role,
      token: generateToken(user._id)
    })
  }else{
    res.status(400)
    throw new Error('Invalid credentials')
  }

})

// @desc Update a user
// @route PUT /api/users/:id
//@access Private
const updateUser = asyncHandler(async(req, res) =>{
  res.json({message: 'Update User'})
})

// @desc Get current user data
// @route Get /api/users/me
//@access Private
const getMe = asyncHandler(async(req, res) =>{
  // we get the id from the auth middlware
  const {_id, username, email, role} = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    username,
    email,
    role
  })
})

const generateToken = (id)=>{
  // Reduce token expiration to 24 hours for better security
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '24h'})
}



module.exports ={
  createNewUser,
  loginUser,
  updateUser,
  getMe
}
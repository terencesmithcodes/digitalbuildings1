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
  const {username, password, role} = req.body

  if (!username || !password || !role){
    res.status(400)
    throw new Error('Please add all fields')
  }

  const userExist = await User.findOne({username})

  if(userExist){
    res.status(400)
    throw new Error('User already exist')
  }



  const salt = await bcrypt.genSalt(timesToSaltPW)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    username,
    password: hashedPassword,
    role
  })

  if(user){
    res.status(201).json({
      _id: user.id,
      username: user.username,
      role: user.role,
    })
  }else{
    res.status(400)
    throw new Error('Invalid user data')
  }

  res.json({message: 'Create User'})

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
  const {_id, username, role} = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    username,
    role
  })
})

const generateToken = (id)=>{
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}



module.exports ={
  createNewUser,
  loginUser,
  updateUser,
  getMe
}
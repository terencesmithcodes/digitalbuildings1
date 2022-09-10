//asyncHandler is a simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
const asyncHandler = require('express-async-handler')

const Note = require('../models/noteModel')
const User = require('../models/userModel')

// @desc Get All Notes
// @route GET /api/notes
//@access Private
const getAllNotes = asyncHandler(async(req, res) => {

  const notes = await Note.find()

  res.status(200).json(notes)
})


// @desc Create a Note
// @route Post /api/notes
//@access Private
const createNote = asyncHandler(async(req, res) => {

  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a comment')
  }

  const note = await Note.create({
    text: req.body.text,
    user: req.user.id
  })

  res.status(200).json(note)
})

// @desc Update a Note
// @route Put /api/notes/:id
//@access Private
const updateNote = asyncHandler(async(req, res) => {

  const note = await Note.findById(req.params.id)

  if(!note){
    res.status(400)
    throw new Error('Note not found')
  }
  //check for user
  if(!req.user){
    res.status(401)
    throw new Error('User not found')
  }

  //make sure the logged in user matches the goal user
  if(note.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('User not authorized')
  }

  // new option if id does not exist create new note
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedNote)
})

// @desc Delete a Note
// @route Delete /api/notes/:id
//@access Private
const deleteNote = asyncHandler(async(req, res) => {
  const note = await Note.findById(req.params.id)

  if(!note){
    res.status(400)
    throw new Error('Note not found')
  }

  //check for user
  if(!req.user){
    res.status(401)
    throw new Error('User not found')
  }

   //make sure the logged in user matches the goal user
   if(note.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('User not authorized')
  }

  await note.remove()



  res.status(200).json({id: req.params.id})
})

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote
}
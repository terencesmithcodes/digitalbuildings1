//asyncHandler allows us to just use the errorHanlder instead of try catch
const asyncHandler = require('express-async-handler')

const Note = require('../models/noteModel')

const getNotes = asyncHandler(async(req, res) => {

  const notes = await Note.find()

  res.status(200).json(notes)
})

const createNote = asyncHandler(async(req, res) => {

  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a comment')
  }

  const note = await Note.create({
    text: req.body.text
  })

  res.status(200).json(note)
})

const updateNote = asyncHandler(async(req, res) => {

  const note = await Note.findById(req.params.id)

  if(!note){
    res.status(400)
    throw new Error('Note not found')
  }

  // new option if id does not exist create new note
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedNote)
})

const deleteNote = asyncHandler(async(req, res) => {
  const note = await Note.findById(req.params.id)

  if(!note){
    res.status(400)
    throw new Error('Note not found')
  }

  await note.remove()



  res.status(200).json({id: req.params.id})
})

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote
}
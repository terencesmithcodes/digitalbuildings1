//asyncHandler allows us to just use the errorHanlder instead of try catch
const asyncHandler = require('express-async-handler')

const getNotes = asyncHandler(async(req, res) => {
  res.status(200).json({message: 'Get Notes'})
})

const createNote = asyncHandler(async(req, res) => {

  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }

  res.status(200).json({message: 'Create Note'})
})

const updateNote = asyncHandler(async(req, res) => {
  res.status(200).json({message: `Update note ${req.params.id}`})
})

const deleteNote = asyncHandler(async(req, res) => {
  res.status(200).json({message: `Delete note ${req.params.id}`})
})

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote
}
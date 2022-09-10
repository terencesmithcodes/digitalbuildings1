const express = require('express')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')

const {getAllNotes, updateNote, createNote, deleteNote} = require('../controllers/noteController')

router.route('/').get(protect, getAllNotes).post(protect, createNote)

router.route('/:id').delete(protect, deleteNote).put(protect, updateNote)


module.exports = router
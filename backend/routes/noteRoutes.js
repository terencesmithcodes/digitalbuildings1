const express = require('express')
const router = express.Router()

const {getNotes, updateNote, createNote, deleteNote} = require('../controller/noteController')

router.route('/').get(getNotes).post(createNote)

router.route('/:id').delete(deleteNote).put(updateNote)


module.exports = router
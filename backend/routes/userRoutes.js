const express = require('express')
const router = express.Router()

const {createNewUser, loginUser, updateUser, getMe } = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')


router.post('/create', protect, createNewUser)

router.post('/login', loginUser)

router.put(':id', protect, updateUser)

router.get('/me', getMe)

module.exports = router
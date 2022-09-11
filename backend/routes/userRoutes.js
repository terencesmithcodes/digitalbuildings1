const express = require('express')
const router = express.Router()

const {createNewUser, loginUser, updateUser, getMe } = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')


router.post('/create', createNewUser)

router.post('/login', loginUser)

router.put(':id', updateUser)

router.get('/me', protect, getMe)

module.exports = router
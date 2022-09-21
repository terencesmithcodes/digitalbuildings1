const express = require('express')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')

const {createBuilding} =require('../controllers/buildingController')

router.post('/', createBuilding)

module.exports = router
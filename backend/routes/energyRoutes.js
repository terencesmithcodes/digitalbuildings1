const express = require('express')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')

const {getEnergyAnaylses} =require('../controllers/energyController')

router.get('/:id', getEnergyAnaylses)


module.exports = router
const express = require('express')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')

const {getEnergyAnaylst} =require('../controllers/energyController')

router.get('/:id/:sub', getEnergyAnaylst)


module.exports = router
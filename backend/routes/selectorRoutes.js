const { request } = require('express')
const express = require('express')
const router = express.Router()


const {protect} = require('../middleware/authMiddleware')

const {getAllBuildingIds} = require('../controllers/selectorController')

router.get('/', getAllBuildingIds)

module.exports = router
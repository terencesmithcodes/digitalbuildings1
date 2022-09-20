const express = require('express')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')
const {getEngineerBuilding} = require('../controllers/engineerController')
// const {getBuilding, getBuildingPoints, getBuildingEquipment, getBuildingEquipmentClasses, getBuildingEquipmentClass, getBuildingEquipmentTypes, getBuildingEquipmentType, getBuildingEquipmentPoints, getBuildingTypes} = require('../controllers/buildingController')


router.get('/:id/:sub', getEngineerBuilding)



module.exports = router
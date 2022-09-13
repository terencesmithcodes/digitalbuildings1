const express = require('express')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')
const {getBuilding, getBuildingPoints, getBuildingEquipment, getBuildingEquipmentClasses, getBuildingEquipmentClass, getBuildingEquipmentTypes, getBuildingEquipmentType, getBuildingEquipmentPoints, getBuildingTypes} = require('../controllers/buildingController')

router.get('/:id', getBuilding)
router.get('/:id/points', getBuildingPoints)
router.get('/types', getBuildingTypes)
router.get('/:id/equipment', getBuildingEquipment)
router.get('/:id/equipment/classes', getBuildingEquipmentClasses)
router.get('/:id/equipment/classes/:classId', getBuildingEquipmentClass)
router.get('/:id/equipment/types', getBuildingEquipmentTypes)
router.get('/:id/equipment/types/:typeId', getBuildingEquipmentType)
router.get('/:id/equipment/points', getBuildingEquipmentPoints)


module.exports = router
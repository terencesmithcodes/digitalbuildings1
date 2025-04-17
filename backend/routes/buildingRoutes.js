const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

const { protect, authorize } = require('../middleware/authMiddleware')
const { createBuilding } = require('../controllers/buildingController')

// Apply validation to building creation
const createBuildingValidation = [
  body('buildingName').notEmpty().withMessage('Building name is required'),
  body('buildingAddress').notEmpty().withMessage('Building address is required'),
  body('latitude').optional().isFloat().withMessage('Latitude must be a valid number'),
  body('longitude').optional().isFloat().withMessage('Longitude must be a valid number')
]

// Protect this route and only allow admin and engineer roles
router.post('/', 
  protect, 
  authorize(['admin', 'engineer']), 
  createBuildingValidation,
  createBuilding
)

module.exports = router
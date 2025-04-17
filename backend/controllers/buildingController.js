const asyncHandler = require('express-async-handler')
const { validationResult } = require('express-validator')

const Building = require('../models/buildingModel')

const createBuilding = asyncHandler(async(req, res) =>{
  // Check for validation errors
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const {buildingId, buildingName, address, city, state, zipcode,
        phoneNumber, buildingType, area, floors, latitude,
        longitude } = req.body

  // Validate required fields
  if (!buildingId || !buildingName || !address || !city || !state || !zipcode ||
      !phoneNumber || !buildingType || !area || !floors){
        res.status(400)
        throw new Error('Please add all required fields')
      }
  
  // Sanitize and validate numerical inputs
  const sanitizedData = {
    buildingId,
    buildingName: buildingName.trim(),
    address: address.trim(),
    city: city.trim(),
    state: state.trim(),
    zipcode: zipcode.trim(),
    phoneNumber: phoneNumber.trim(),
    buildingType: buildingType.trim(),
    area: parseFloat(area),
    floors: parseInt(floors, 10),
    latitude: latitude ? parseFloat(latitude) : null,
    longitude: longitude ? parseFloat(longitude) : null
  }
  
  // Check if building already exists
  const buildingExist = await Building.findOne({
    $or: [
      { buildingName: sanitizedData.buildingName },
      { buildingId: sanitizedData.buildingId }
    ]
  })

  if(buildingExist){
    res.status(400)
    throw new Error('Building already exists')
  }

  // Create building with sanitized data
  const building = await Building.create(sanitizedData)

  if(building){
    res.status(201).json({
      _id: building.id,
      buildingId: building.buildingId,
      buildingName: building.buildingName,
      address: building.address,
      city: building.city,
      state: building.state,
      zipcode: building.zipcode,
      phoneNumber: building.phoneNumber,
      type: building.buildingType,
      area: building.area,
      floors: building.floors,
      latitude: building.latitude,
      longitude: building.longitude

    })
  }

})

module.exports ={
  createBuilding
}
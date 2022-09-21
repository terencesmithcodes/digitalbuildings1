const asyncHandler = require('express-async-handler')

const Building = require('../models/buildingModel')

const createBuilding = asyncHandler(async(req, res) =>{
  const {buildingId, buildingName, address, city, state, zipcode,
        phoneNumber, buildingType, area, floors, latitude,
        longitude } = req.body

  if (!buildingId || !buildingName || !address || !city || !state || !zipcode ||
      !phoneNumber || !buildingType || !area || !floors || 
      !latitude || !longitude){
        res.status(400)
        throw new Error('Please add all fields')
      }
  //check if user exist
  const buildingExist = await Building.findOne({buildingName})

  if(buildingExist){
    res.status(400)
    throw new Error('Building already exist')
  }

  //create building
  const building = await Building.create({
    buildingId,
    buildingName,
    address,
    city,
    state,
    zipcode,
    phoneNumber,
    buildingType,
    area,
    floors,
    latitude,
    longitude
  })

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
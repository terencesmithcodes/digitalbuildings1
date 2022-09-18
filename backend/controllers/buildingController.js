const axios = require('axios')
const asyncHandler = require('express-async-handler')


const { validate } = require('../models/userModel')
const {getBuilding, getBuildingEquipment, getBuildingEquipmentClasses} = require('../apiUtility/buildingApi')


const getEngineerBuilding = asyncHandler(async(req, res) => {
  buildingId = req.params.id
  subId = req.params.sub
  buildingData = await getBuilding(buildingId)
  equipmentClasses = await getBuildingEquipmentClasses(subId)
  allBuildingEquip = await getBuildingEquipment(subId)
  

  res.status(200).json({
    building: buildingData[0],
    equipClasses: equipmentClasses[0]["EquipmentClasses"],
    allEquip: allBuildingEquip[0]['Equipment']}, 
    
    )
})



module.exports = {
  getEngineerBuilding
}
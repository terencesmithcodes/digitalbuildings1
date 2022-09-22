const axios = require('axios')
const asyncHandler = require('express-async-handler')


const { validate } = require('../models/userModel')
const {
  getBuilding,
  getBuildingPoints, 
  getBuildingEquipment, 
  getBuildingEquipmentTypes, 
  getBuildingEquipmentClasses,
  getBuildingEquipmentPoints,
  getAnalyses
} = require('../apiUtility/buildingApi')

const {grabAnalyses, formatEquipment} = require('../funcUtility/engineerFunctions')


const getEngineerBuilding = asyncHandler(async(req, res) => {
  let buildingId = req.params.id
  let buildingData = await getBuilding(buildingId)
  let equipmentClasses = await getBuildingEquipmentClasses(buildingId)
  let equipmentTypes = await getBuildingEquipmentTypes(buildingId)
  let allBuildingEquip = await getBuildingEquipment(buildingId)
  let allAnalyses = await getAnalyses()

  const equipData = formatEquipment(equipmentClasses[0]["EquipmentClasses"], 
        equipmentTypes[0].EquipmentTypes, allBuildingEquip[0]['Equipment'])

  const shownAnalyses = grabAnalyses(allAnalyses)

  const equipClasses = equipData[0]
  const equipTypes = equipData[1]
  
  
                      
  

  res.status(200).json({
    building: buildingData[0],
    equipClasses: equipClasses,
    equipTypes: equipTypes,
    topAnalyses: shownAnalyses
  })
})



module.exports = {
  getEngineerBuilding
}
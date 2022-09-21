const axios = require('axios')
const asyncHandler = require('express-async-handler')

const {getBuilding, getBuildingTaskRecords} = require('../apiUtility/buildingApi')

const getTopTrackRecords =(trackRecords) =>{
  let fullTrackRecords = []
  trackRecords.forEach(record =>{
    const {AnnualAvoidableCost, 
      AnnualAvoidableCoolingUse, 
      AnnualAvoidableHeatingUse,
      EID, Description, TaskID} = record
      if(AnnualAvoidableCost &&
        AnnualAvoidableCoolingUse &&
        AnnualAvoidableHeatingUse
        ){
           fullTrackRecords.push({
            TaskID,
            EID, 
            Description, 
            AnnualAvoidableCost, 
            AnnualAvoidableHeatingUse, 
            AnnualAvoidableCoolingUse})
        }

  })
  return fullTrackRecords
}

const getEnergyAnaylses = asyncHandler(async(req, res) =>{
  let buildingId = req.params.id
  let buildingData = await getBuilding(buildingId)
  let buildingTrackRecords = await getBuildingTaskRecords(buildingId )

  let topTrackRecords = getTopTrackRecords(buildingTrackRecords[0].TaskRecords)

  res.status(200).json({
    building: buildingData[0],
    trackRecords: topTrackRecords
  })

})

module.exports = {
  getEnergyAnaylses
}
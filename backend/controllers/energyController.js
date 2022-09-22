const axios = require('axios')
const asyncHandler = require('express-async-handler')

const {getBuilding, getBuildingTaskRecords} = require('../apiUtility/buildingApi')
const { getTopTrackRecords } = require('../funcUtility/energyFunctions')



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
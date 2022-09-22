const asyncHandler = require('express-async-handler')

const {getAllBuildings} = require('../apiUtility/buildingApi')

const getbuildingIds = (buildings) =>{
  const buildingIds = buildings.map(building =>{
    return {buildingName: building.ClientName, buildingId: building.BID}
  })

  return buildingIds
}

const getAllBuildingIds = asyncHandler(async(req, res) =>{
  let buildingIds = await getAllBuildings()

  let buildingShortList = buildingIds.slice(100,1100)

  let shortListIds = getbuildingIds(buildingShortList)

  res.status(200).json({
    buildingIds: shortListIds
  })
})

module.exports = {
  getAllBuildingIds
}
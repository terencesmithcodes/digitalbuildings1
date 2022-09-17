const axios = require('axios')
const asyncHandler = require('express-async-handler')


const { validate } = require('../models/userModel')
const {getBuilding} = require('../apiUtility/buildingApi')


const getEngineerBuilding = asyncHandler(async(req, res) => {
  buildingData = await getBuilding(req.params.id)

  res.status(200).json(buildingData[0])
})



module.exports = {
  getEngineerBuilding
}
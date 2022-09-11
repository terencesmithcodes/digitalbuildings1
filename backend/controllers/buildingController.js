const axios = require('axios')

const asyncHandler = require('express-async-handler')
const { validate } = require('../models/userModel')


const URL = 'https://rest.buildingsapi.net/core-base/Buildings/'
const URLTYPES = 'https://rest.buildingsapi.net/core-base/buildingtypes/15'

valHeader = {
  'Content-Type' : 'application/json',
  'Ocp-Apim-Subscription-Key': process.env.OCP_KEY
}


const getBuilding = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id,{
    headers: valHeader
  })
  res.status(200).json(response.data)
})

const getBuildingPoints = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/points',{
    headers: valHeader
  })
  res.status(200).json(response.data)
})

// const getBuildingTypes = asyncHandler(async(req, res)=>{
//   const response = await axios.get(URLTYPES,{
//     headers: valHeader
//   })
//   res.status(200).json(response.data)
// })



const getBuildingEquipment = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/equipment',{
    headers: valHeader
  })
  res.status(200).json(response.data)
})

const getBuildingEquipmentClasses = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/equipmentclasses',{
    headers: valHeader
  })
  res.status(200).json(response.data)
})

const getBuildingEquipmentClass = asyncHandler(async(req, res)=>{
  console.log(req.params.classId)
  const response = await axios.get(URL + req.params.id + '/equipmentclasses?classID=' + req.params.classId,{
    headers: valHeader
  })
  res.status(200).json(response.data)
})

const getBuildingEquipmentTypes = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/equipmenttypes',{
    headers: valHeader
  })
  res.status(200).json(response.data)
})

const getBuildingEquipmentType = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/equipment?typeID=' + req.params.typeId,{
    headers: valHeader
  })
  res.status(200).json(response.data)
})

const getBuildingEquipmentPoints = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/equipmentpoints',{
    headers: valHeader
  })
  res.status(200).json(response.data)
})

module.exports = {
  getBuilding,
  getBuildingPoints,
  // getBuildingTypes,
  getBuildingEquipment,
  getBuildingEquipmentClasses,
  getBuildingEquipmentClass,
  getBuildingEquipmentTypes,
  getBuildingEquipmentType,
  getBuildingEquipmentPoints
}


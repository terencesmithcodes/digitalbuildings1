const axios = require('axios')
const asyncHandler = require('express-async-handler')


const URL = 'https://rest.buildingsapi.net/core-base/Buildings/'

valHeader = {
  'Content-Type' : 'application/json',
  'Ocp-Apim-Subscription-Key': process.env.OCP_KEY
}


const getBuilding = asyncHandler(async(buildingNum)=>{
  const response = await axios.get(URL + buildingNum,{
    headers: valHeader
  })
  return response.data
})

const getBuildingPoints = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/points',{
    headers: valHeader
  })
  return response.data
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
  return response.data
})

const getBuildingEquipmentClasses = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/equipmentclasses',{
    headers: valHeader
  })
  return response.data
})

const getBuildingEquipmentClass = asyncHandler(async(req, res)=>{
  console.log(req.params.classId)
  const response = await axios.get(URL + req.params.id + '/equipmentclasses?classID=' + req.params.classId,{
    headers: valHeader
  })
  return response.data
})

const getBuildingEquipmentTypes = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/equipmenttypes',{
    headers: valHeader
  })
  return response.data
})

const getBuildingEquipmentType = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/equipment?typeID=' + req.params.typeId,{
    headers: valHeader
  })
  return response.data
})

const getBuildingEquipmentPoints = asyncHandler(async(req, res)=>{
  const response = await axios.get(URL + req.params.id + '/equipmentpoints',{
    headers: valHeader
  })
  return response.data
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
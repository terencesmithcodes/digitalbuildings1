const asyncHandler = require('express-async-handler')

// Import mock data
const buildingsData = require('../models/data/buildingData')
const equipmentClassesData = require('../models/data/equipmentClassesData')
const equipmentTypesData = require('../models/data/equipmentTypesData')
const equipmentData = require('../models/data/equipmentData')
const analysesData = require('../models/data/analysesData')

// Cache object for simulating real API caching
const cache = {};

// Mock API functions that return the local data instead of making external API calls
const getBuilding = asyncHandler(async(buildingNum) => {
  // Find the building by ID
  const building = buildingsData.filter(b => b.BuildingID === buildingNum)
  
  if (!cache[buildingNum]) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))
    cache[buildingNum] = building
  }

  return cache[buildingNum]
})

const getAllBuildings = asyncHandler(async() => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  return buildingsData
})

const getBuildingPoints = asyncHandler(async(buildingNum) => {
  // This would typically return points data
  // For mock, we'll return an empty array or you can create mock points data
  await new Promise(resolve => setTimeout(resolve, 300))
  return [{ Points: [] }]
})

const getAnalyses = asyncHandler(async() => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  return analysesData
})

const getBuildingEquipment = asyncHandler(async(buildingNum) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  return equipmentData
})

const getBuildingEquipmentClasses = asyncHandler(async(buildingNum) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  return equipmentClassesData
})

const getBuildingEquipmentClass = asyncHandler(async(req, res) => {
  const classId = req.params.classId
  // Filter equipment by class
  const matchingEquipment = equipmentData[0].Equipment.filter(
    e => e.EquipmentType.EquipmentClassID === classId
  )
  await new Promise(resolve => setTimeout(resolve, 300))
  return [{ Equipment: matchingEquipment }]
})

const getBuildingEquipmentTypes = asyncHandler(async(buildingNum) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  return equipmentTypesData
})

const getBuildingEquipmentType = asyncHandler(async(req, res) => {
  const typeId = req.params.typeId
  // Filter equipment by type
  const matchingEquipment = equipmentData[0].Equipment.filter(
    e => e.EquipmentType.EquipmentTypeID === typeId
  )
  await new Promise(resolve => setTimeout(resolve, 300))
  return [{ Equipment: matchingEquipment }]
})

const getBuildingEquipmentPoints = asyncHandler(async(buildingNum) => {
  // This would typically return equipment points data
  // For mock, we'll return an empty array or you can create mock points data
  await new Promise(resolve => setTimeout(resolve, 300))
  return [{ EquipmentPoints: [] }]
})

const getBuildingTaskRecords = asyncHandler(async(buildingNum) => {
  // This would typically return task records
  // For mock, we'll return an empty array or you can create mock task records
  await new Promise(resolve => setTimeout(resolve, 300))
  return [{ TaskRecords: [] }]
})

module.exports = {
  getBuilding,
  getBuildingPoints,
  getAllBuildings,
  getBuildingEquipment,
  getBuildingEquipmentClasses,
  getBuildingEquipmentClass,
  getBuildingEquipmentTypes,
  getBuildingEquipmentType,
  getBuildingEquipmentPoints,
  getBuildingTaskRecords,
  getAnalyses
}
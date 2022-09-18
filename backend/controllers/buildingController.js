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
} = require('../apiUtility/buildingApi')

const NUM_OF_EQUIP_SHOWN = 10

const sortEquipment = (equipArr) =>{
    let eSort = equipArr.sort((a,b) => {
      if (a.count < b.count) {
        return 1
      }
      if (a.count > b.count){
        return -1
      }
      return 0
    })

    return eSort.slice(0,NUM_OF_EQUIP_SHOWN)
}

const formatEquipment = (equipClasses, equipTypes, allEquip) => {
  let equipmentClasses = []
  let equipmentTypes =  []
  equipClasses.forEach(eClass => {
    equipmentClasses.push({id: eClass.EquipmentClassID,
    name: eClass.EquipmentClassName, count: 0})
  });
  equipTypes.forEach(eType => {
    equipmentTypes.push({id: eType.EquipmentTypeID, 
      name: eType.EquipmentTypeName,
      count:0})
  })
 
  allEquip.forEach(equip =>{
    let eClassId = equip.EquipmentType.EquipmentClassID
    let eTypeId = equip.EquipmentType.EquipmentTypeID
    let equipClassIndex = equipmentClasses.findIndex((equipClass) => equipClass.id === eClassId)
    let equipTypeIndex = equipmentTypes.findIndex((equipType) => equipType.id === eTypeId)
    equipmentClasses[equipClassIndex].count++
    equipmentTypes[equipTypeIndex].count++
  })

  const largestClasses = sortEquipment(equipmentClasses)
  const largestTypes = sortEquipment(equipmentTypes)


  return [largestClasses, largestTypes]

}

const getEngineerBuilding = asyncHandler(async(req, res) => {
  let buildingId = req.params.id
  let subId = req.params.sub
  let buildingData = await getBuilding(buildingId)
  let equipmentClasses = await getBuildingEquipmentClasses(subId)
  let equipmentTypes = await getBuildingEquipmentTypes(subId)
  let allBuildingEquip = await getBuildingEquipment(subId)

  const equipData = formatEquipment(equipmentClasses[0]["EquipmentClasses"], 
        equipmentTypes[0].EquipmentTypes, allBuildingEquip[0]['Equipment'])
  
  const equipClasses = equipData[0]
  const equipTypes = equipData[1]
                      
  

  res.status(200).json({
    building: buildingData[0],
    equipClasses: equipClasses,
    equipTypes: equipTypes
    
  })
})



module.exports = {
  getEngineerBuilding
}
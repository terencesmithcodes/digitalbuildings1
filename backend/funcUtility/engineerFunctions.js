const NUM_OF_EQUIP_SHOWN = 10
const NUM_OF_ANAYSES_SHOWN = 3
const NUM_OF_TEASERS_SHOWN = 5

const grabAnalyses = (analyses) => {
  let allAnalyses = []
  let analysesToShow = []
  // let allAnalysesArr = analyses.map((analysis) =>{
  //    return analysis.AnalysisTeaser
  // })
  analyses.forEach(analysis =>{
    allAnalyses.push({name: analysis.AnalysisName, teaser: analysis.AnalysisTeaser})
  })
  while(analysesToShow.length < NUM_OF_ANAYSES_SHOWN){
    let randomAnalysis = allAnalyses[Math.floor(Math.random()*allAnalyses.length)]
    try {
      let analysisArr = randomAnalysis.teaser.split('\n')
      if(analysisArr.length > 2){
        analysesToShow.push({name: randomAnalysis.name, teaser: analysisArr.splice(1, NUM_OF_TEASERS_SHOWN)})
      }
    }catch(error){
      continue
    }
  }

  return analysesToShow
  

}

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

module.exports = {
  grabAnalyses,
  formatEquipment
}
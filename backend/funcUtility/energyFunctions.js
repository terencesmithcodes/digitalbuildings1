
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


module.exports ={
  getTopTrackRecords
}
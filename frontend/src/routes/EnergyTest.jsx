import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Loading from "../components/dashboards/loading/Loading";

import { getEngeryAnalyses, reset } from "../features/energy/energySlice";

const EnergyTest = () => {
  const dispatch = useDispatch()

  const {building, 
         trackRecords, 
         isError, 
         isSuccess, 
         isLoading, 
         message} =useSelector((state) => state.energy)
  
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if(building === '' && !isLoading && !isError && !isSuccess){
      dispatch(getEngeryAnalyses(18175))
    }

  }, [building, isError, isSuccess, isLoading, dispatch, message])

  if (isLoading) {
    return (
      <h1 className="flex flex-row justify-center mr-10 mt-8 w-full">
        <Loading />
      </h1>
    );
  }

  if (isSuccess){
    return (
      <>
      <div>{building.Address}</div>
      <br></br>
      <div>{trackRecords.map(record => (
        <div key={record.TaskID}>
          <h4>Task Id: {record.TaskID}</h4>
          <h4>Equipment Id: {record.EID}</h4>
          <h4>Equipment Issue: {record.Description}</h4>
          <h6>If Issue is resolved</h6>
          <h4>Annual Avoidable Cost: {record.AnnualAvoidableCost}</h4>
          <h4>Annual Avoidable HeatingUse: {record.AnnualAvoidableHeatingUse}</h4>
          <h4>AnnualAvoidableCoolingUse: {record.AnnualAvoidableCoolingUse}</h4>
          <br></br>
        </div>

      ))}</div>
      </>
    )
  }
}



export default EnergyTest
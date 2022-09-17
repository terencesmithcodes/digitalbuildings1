import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getEngBuilding, reset } from "../features/engineer/engineerSlice";


const EngineerTest = () => {
  const dispatch = useDispatch()

  const {building, equipClasses, isError, isSuccess, isLoading, message} =useSelector(
    (state) => state.engineer
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if(building === '' && !isLoading && !isError && !isSuccess){
      dispatch(getEngBuilding(18175))
    }
    

    // return () => {
    //   dispatch(reset())
    // }
  }, [building, isError, isSuccess, isLoading, dispatch, message])

  if (isLoading) {
    return <h1>Is Loading...</h1>
  }

  if (isSuccess) {
    return (
      <>
      <div>Hello</div>
      <div>{building.Address}</div>
      <div>{equipClasses.map((equipmentClass) => (
        <div key={equipmentClass.EquipmentClassID}>
          <h4>Class name: {equipmentClass.EquipmentClassName}</h4>
          <h5>Class Description: {equipmentClass.EquipmentClassDescription}</h5>
        </div>
      ))}</div>
      </>   
    )
  }
 
}
export default EngineerTest
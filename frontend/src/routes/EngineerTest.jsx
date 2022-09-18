import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getEngBuilding, reset } from "../features/engineer/engineerSlice";


const EngineerTest = () => {
  const dispatch = useDispatch()

  const {building, equipClasses, equipTypes, isError, isSuccess, isLoading, message} =useSelector(
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
      <h6>Classes</h6>
      <div>{equipClasses.map((equipmentClass) => (
        <div key={equipmentClass.id}>
          <h4>Class Id: {equipmentClass.id}</h4>
          <h4>Class name: {equipmentClass.name}</h4>
          <h5>Class Num: {equipmentClass.count}</h5>
        </div>
      ))}</div>
      <h6>Types</h6>
       <div>{equipTypes.map((equipmentTypes) => (
        <div key={equipmentTypes.id}>
          <h4>Class Id: {equipmentTypes.id}</h4>
          <h4>Class name: {equipmentTypes.name}</h4>
          <h5>Class Num: {equipmentTypes.count}</h5>
        </div>
      ))}</div>
      </>   
    )
  }
 
}
export default EngineerTest
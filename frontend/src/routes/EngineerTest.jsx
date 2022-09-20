import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getEngBuilding, reset } from "../features/engineer/engineerSlice";


const EngineerTest = () => {
  const dispatch = useDispatch()

  const {building, equipClasses, equipTypes, analyses, isError, isSuccess, isLoading, message} =useSelector(
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
          <h4>Type Id: {equipmentTypes.id}</h4>
          <h4>Type Name: {equipmentTypes.name}</h4>
          <h5>Type Num: {equipmentTypes.count}</h5>
        </div>
      ))}</div>
      <h6>Analyses</h6>
       <div>{analyses.map((analysis, aIndex) => {
        return (
          <div key={aIndex}>
          <h5>{analysis.name}</h5>
          
          <h6>Issues</h6>
          {
            analysis.teaser.map((teaser, tIndex) =>{
              return(<p key={tIndex+100}>{teaser}</p>)
            })
          }    
        </div>
      )})}</div>
      </>   
    )
  }
 
}
export default EngineerTest
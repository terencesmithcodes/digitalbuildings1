import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getEngBuilding, reset } from "../features/engineer/engineerSlice";

const EngineerTest = () => {
  const dispatch = useDispatch()

  const {building, isError, isSuccess, isLoading, message} =useSelector(
    (state) => state.engineer
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    // if (isLoading){
    //   console.log('loading')
    // }
    dispatch(getEngBuilding(18175))

    // return () => {
    //   dispatch(reset())
    // }
  }, [])

  if (isLoading) {
    return <h1>Is Loading...</h1>
  }

  if (isSuccess) {
    return (
      <>
      <div>Hello</div>
      <div>{building.Address}</div>
      </>   
    )
  }

  if(!isSuccess){
    return (
      <>
      <div>test</div>
      </>
    )
  }
 
}
export default EngineerTest
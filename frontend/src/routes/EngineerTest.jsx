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
      </>   
    )
  }
 
}
export default EngineerTest
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import LeftCol from '../components/dashboards/facilitydash/LeftCol';
import RightCol from '../components/dashboards/facilitydash/RightCol';
import Header from '../components/Navbar/Header';
import Navbar from '../components/Navbar/Navbar';

import { getEngBuilding, reset } from "../features/engineer/engineerSlice";
import { toast } from "react-toastify";
import BuildingSelector from '../components/dashboards/buildingSelector.jsx/BuildingSelector';
import Loading from "../components/dashboards/loading/Loading";

const BuildingRoute = () => {
  //  const navigate = useNavigate();
   const dispatch = useDispatch();
  // const [showBuilding, setshowBuilding] = useState(true);
    const {
      building,
      isError,
      isSuccess,
      isLoading,
      message,
    } = useSelector((state) => state.engineer);

    useEffect(() => {
      if (isError) {
        toast.error(message);
      }
      // if (building === "" && !isLoading && !isError && !isSuccess) {
      //   dispatch(getEngBuilding(1));
      // }

      // return () => {
      //   dispatch(reset())
      // }
    }, [building, isError, isSuccess, isLoading, dispatch, message]);

    if (isLoading) {
      return (
        <h1 className="flex flex-row justify-center mr-10 mt-8 w-full">
          <Loading />
        </h1>
      );
    }
  
  if(building === "" && !isLoading && !isError && !isSuccess){
    return (
      <>
        <div className=" ">
          <Header />
          <div className="w-full screen flex justify-center ">
            <Navbar />

            <div className="w-full h-screen grid grid-cols-3 mx-auto gap-4  content-center place-content-center">
               <BuildingSelector transferTo={'building'} />

            </div>
          </div>
        </div>
      </>
    );
    }


  if(isSuccess){
    return (
      <>
        <div
          className="App overflow-y-hidden "
        >
          <Header />
          <div className="w-full min-h-[90vh] grid grid-cols-12">
            <Navbar />
            <div className="grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
              <LeftCol />
              <RightCol />
            </div>
          </div>
        </div>
      </>
    );
  }

}


export default BuildingRoute
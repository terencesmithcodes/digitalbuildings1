import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import Loading from "../loading/Loading";

import { getEngeryAnalyses, reset } from "../../../features/energy/energySlice";

const LeftColEnergy = () => {
  const dispatch = useDispatch();
  const {
    building,
    trackRecords,
    equipClasses,
    isError,
    isSuccess,
    isLoading,
    message
  } = useSelector((state) => state.energy);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    // if (building === "" && !isLoading && !isError && !isSuccess) {
    //   dispatch(getEngeryAnalyses(1));
    // }
  }, [building, isError, isSuccess, isLoading, dispatch, message]);

 if (isLoading) {
   return (
     <h1 className="flex flex-row justify-center mr-10 mt-8 w-full">
       <Loading />
     </h1>
   );
 }
  if (isSuccess) {
    return (
      <div className="col-span-2 min-h-[90vh] border-r border-feay-200 items-center justify-center flex flex-col w-full">
        <div className="w-full items-center justify-center flex flex-col px-2 pt-12 pb-6">
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4">
            Building Profile
          </h1>
        <button className="flex" onClick={() => dispatch(reset())}>Get New Building</button>
          <div className="justify-between flex px-4 pt-8 pb-4 border-2 border-feay-200 rounded-xl shadow-xl  mt-2 w-full">
            <div className="flex flex-col w-full border-r border-feay-200">
              <span className=" font-bold border-b-2 p-2">Building Name</span>
              {/* <span className=" font-bold border-b-2 p-2">Address </span> */}
              <span className=" font-bold border-b-2 p-2">City </span>
              <span className=" font-bold border-b-2 p-2">State </span>
              <span className=" font-bold border-b-2 p-2">Zipcode </span>
              <span className=" font-bold border-b-2 p-2">Phone Number </span>
              <span className=" font-bold border-b-2 p-2">Type</span>
              <span className=" font-bold border-b-2 p-2">Area </span>
              <span className=" font-bold border-b-2 p-2">Floors </span>
            </div>

            <div className="justify-betweem flex flex-col -px-6  pb-4 w-full">
            <span className=" border-b-2 p-2">{building.ClientName ? building.ClientName : 'Digital Building' }</span>
              {/* <span className=" border-b-2 p-2">{building.Address ? building.Address : '5757 Oak South'}</span> */}
              <span className=" border-b-2 p-2">{building.City ? building.City: 'Atlanta'}</span>
              <span className=" border-b-2 p-2">{building.StateName ? building.StateName : 'Georgia'}</span>
              <span className=" border-b-2 p-2">{building.Zip ? building.Zip : '77577'}</span>
              <span className=" border-b-2 p-2">{building.Phone ? building.Phone : '4048675309'}</span>
              <span className=" border-b-2 p-2">{building.BuildingTypeName ? building.BuildingTypeName : 'Secret Evil Lab'}</span>
              <span className=" border-b-2 p-2"> {building.Area ? building.Area : '70,231'}</span>
              <span className=" border-b-2 p-2"> {building.Floors ? building.Floors : '57'}</span>
            </div>
          </div>
          <div className="w-full items-center justify-center flex flex-col px-2 pt-12 pb-6">
            <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4">
              Energy Cost Saving Tasks
            </h1>
            <div className=" flex items-center justify-center px-6 pt-8 pb-4 border-2 border-feay-200 rounded-xl shadow-xl mt-2 w-full">
              <div className="flex flex-col w-full border-feay-200">
                {trackRecords.map((record) => (
                  <div className="text-lg p-2" key={record.TaskID}>
                    <h4 className="border-b-2 p-2 font-bold text-xl">
                      Task Id: {record.TaskID}
                    </h4>
                    <h4>Equipment Id: {record.EID}</h4>
                    <h4>Equipment Issue: {record.Description}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default LeftColEnergy;

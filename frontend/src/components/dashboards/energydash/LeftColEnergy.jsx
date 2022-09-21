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
    if (building === "" && !isLoading && !isError && !isSuccess) {
      dispatch(getEngeryAnalyses(1));
    }
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
      <div className="col-span-2 min-h-[90vh] border-r border-feay-200 items-start justify-start flex flex-col w-full">
        <div className="w-full items-start justify-start flex flex-col px-12 pt-12 pb-6">
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4">
            Building Information
          </h1>
          <div className="justify-between flex px-6 pt-8 pb-4 border-2 border-feay-200 rounded-xl shadow-xl -ml-16 mt-2 w-full">
            <div className="flex flex-col w-full border-r border-feay-200">
              <span className=" font-bold border-b-2 p-2">Building Name</span>
              <span className=" font-bold border-b-2 p-2">Address </span>
              <span className=" font-bold border-b-2 p-2">City </span>
              <span className=" font-bold border-b-2 p-2">State </span>
              <span className=" font-bold border-b-2 p-2">Zipcode </span>
              <span className=" font-bold border-b-2 p-2">Phone Number </span>
              <span className=" font-bold border-b-2 p-2">Type</span>
              <span className=" font-bold border-b-2 p-2">Area </span>
              <span className=" font-bold border-b-2 p-2">Floors </span>
            </div>

            <div className="justify-betweem flex flex-col -px-6  pb-4 w-full">
              <span className=" border-b-2 p-2">{building.buildingName}</span>
              <span className=" border-b-2 p-2">{building.address}</span>
              <span className=" border-b-2 p-2">{building.city}</span>
              <span className=" border-b-2 p-2">{building.state}</span>
              <span className=" border-b-2 p-2">{building.zipcode}</span>
              <span className=" border-b-2 p-2">{building.phoneNumber}</span>
              <span className=" border-b-2 p-2">{building.buildingType}</span>
              <span className=" border-b-2 p-2"> {building.area}</span>
              <span className=" border-b-2 p-2"> {building.floors}</span>
            </div>
          </div>
          <div className="w-full items-start justify-start flex flex-col -ml-16 pt-12 pb-6">
            <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4">
              Top Reported Issues
            </h1>
            {/* <div className=" flex px-6 pt-8 pb-4 border-2 border-feay-200 rounded-xl shadow-xl mt-2 w-full"> */}
              <div>
                {trackRecords.map((record) => (
                  <div key={record.TaskID}>
                    <h4>Task Id: {record.TaskID}</h4>
                    <h4>Equipment Id: {record.EID}</h4>
                    <h4>Equipment Issue: {record.Description}</h4>
                    <h6>If Issue is resolved</h6>
                    <h4>Annual Avoidable Cost: {record.AnnualAvoidableCost}</h4>
                    <h4>
                      Annual Avoidable HeatingUse:
                      {record.AnnualAvoidableHeatingUse}
                    </h4>
                    <h4>
                      AnnualAvoidableCoolingUse:
                      {record.AnnualAvoidableCoolingUse}
                    </h4>
                    <br></br>
                  </div>
                ))}
              </div>
              {/* <div className="flex flex-col w-full">
                {trackRecords.map(record => (
                    <div key={record.TaskID}>
                      <h5 className="text-2xl font-bold">
                        Issue Type: {record.Description}
                      </h5>
                      <h4>Task Id: {record.TaskID}</h4>
                      <h4>Equipment Id: {record.EID}</h4>
                      <h4>Equipment Issue: {record.Description}</h4>
                      <h6>If Issue is resolved</h6>
                      <h4>
                        Annual Avoidable Cost: {record.AnnualAvoidableCost}
                      </h4>
                      <h4>
                        Annual Avoidable HeatingUse:
                        {record.AnnualAvoidableHeatingUse}
                      </h4>
                      <h4>
                        AnnualAvoidableCoolingUse:
                        {record.AnnualAvoidableCoolingUse}
                      </h4>
                    </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      
    );
  }
};
export default LeftColEnergy;

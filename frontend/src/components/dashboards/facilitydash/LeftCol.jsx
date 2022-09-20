import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../loading/Loading";
import {
  getEngBuilding,
  reset,
} from "../../../features/engineer/engineerSlice";
import LeafMap from "./LeafMap";
import EquipClassChart from "../../charts/EquipClassChart";
import EquipTypeChart from "../../charts/EquipTypeChart";

const LeftCol = () => {
  const dispatch = useDispatch();
  const {
    building,
    equipClasses,
    analyses,
    isError,
    isSuccess,
    isLoading,
    message,
  } = useSelector((state) => state.engineer);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (building === "" && !isLoading && !isError && !isSuccess) {
      dispatch(getEngBuilding(18175));
    }
  }, [building, isError, isSuccess, isLoading, dispatch, message]);

  const [open, setOpen] = useState(true);
  const Dash = [
    { title: "Home", src: "Home" },
    { title: "Log Out", src: "User" },
  ];
  if (isLoading) {
    return (
      <h1 className="flex flex-row justify-center mr-10 mt-8 w-full">
        <Loading />
      </h1>
    );
  }
  if (isSuccess) {
    return (
      <div className="col-span-3 min-h-[90vh] border-r border-feay-200 items-start justify-start flex flex-col w-full">
        <div className="w-full items-start justify-start flex flex-col px-12 pt-6 pb-6">
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl -ml-16 pb-4">
            Building Profile
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
              <span className=" border-b-2 p-2">{building.BuildingName}</span>
              <span className=" border-b-2 p-2">{building.Address}</span>
              <span className=" border-b-2 p-2">{building.City}</span>
              <span className=" border-b-2 p-2">{building.StateName}</span>
              <span className=" border-b-2 p-2">{building.Zip}</span>
              <span className=" border-b-2 p-2">{building.Phone}</span>
              <span className=" border-b-2 p-2">
                Type: {building.BuildingTypeName}
              </span>
              <span className=" border-b-2 p-2"> {building.Area}</span>
              <span className=" border-b-2 p-2"> {building.Floors}</span>
            </div>
          </div>
          <div className="w-full items-start justify-start flex flex-col -ml-16 pt-12 pb-6">
            <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4">
              Top Reported Issues
            </h1>
            <div className=" flex px-6 pt-8 pb-4 border-2 border-feay-200 rounded-xl shadow-xl mt-2 w-full">
              <div className="flex flex-col w-full">
                {analyses.map((analysis, aIndex) => {
                  return (
                    <div key={aIndex}>
                      <h5 className="text-2xl font-bold">
                        Issue Type: {analysis.name}
                      </h5>
                      {/* <h6>Issues</h6> */}
                      {analysis.teaser.map((teaser, tIndex) => {
                        return (
                          <p className="border-b-2 text-lg" key={tIndex + 100}>
                            {teaser}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* <table className="w-full">
                {analyses.map((analysis, aIndex) => {
                  return (
                <thead  
                 className="bg-gray-200 border-b-2 border-gray-400"
                 key={aIndex}
                 >
                {analysis.name}
                      {
                        analysis.teaser.map((teaser, tIndex) => {
                          return (<tr key={tIndex + 100}>{teaser}</tr>)
                        })
                      }
                    )})}  
                      
                </thead>
               
              </table> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default LeftCol;
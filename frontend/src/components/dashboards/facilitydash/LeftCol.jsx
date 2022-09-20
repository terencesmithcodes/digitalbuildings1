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
  const { building, equipClasses, analyses, isError, isSuccess, isLoading, message } =
    useSelector((state) => state.engineer);

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
    return <h1 className="flex flex-row justify-center mr-10 mt-8 w-full"><Loading /></h1>;
  }
  if (isSuccess) {
    return (
      <div className="col-span-3 min-h-[90vh] border-r border-feay-200 items-start justify-start flex flex-col w-full">
        <div className="w-full items-center justify-center flex flex-col px-12 pt-12 pb-6">
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4">
            Building Information
          </h1>
          <div className="items-start justify-start flex flex-col px-6 pt-8 pb-4 border-2 border-indigo-100 rounded-xl mt-2 w-full">
            <span className="border-b-2 p-2">
              Building Name: {building.BuildingName}
            </span>
            <span className="border-b-2 p-2">Address: {building.Address}</span>
            <span className="border-b-2 p-2">City: {building.City}</span>
            <span className="border-b-2 p-2">State: {building.StateName}</span>
            <span className="border-b-2 p-2">Zipcode: {building.Zip}</span>
            <span className="border-b-2 p-2">
              Type: {building.BuildingTypeName}
            </span>
            <span className="border-b-2 p-2">Area: {building.Area}</span>
            <span className="p-2">Floors: {building.Floors}</span>
          <div className="items-start justify-start flex flex-col px-6 pt-8 pb-4 border-2 border-indigo-100 rounded-xl mt-2 w-full">
            <span className="border-b-2 p-2">
              Building Name: {building.BuildingName}
            </span>
            <span className="border-b-2 p-2">Address: {building.Address}</span>
            <span className="border-b-2 p-2">City: {building.City}</span>
            <span className="border-b-2 p-2">State: {building.StateName}</span>
            <span className="border-b-2 p-2">Zipcode: {building.Zip}</span>
            <span className="border-b-2 p-2">
              Type: {building.BuildingTypeName}
            </span>
            <span className="border-b-2 p-2">Area: {building.Area}</span>
            <span className="p-2">Floors: {building.Floors}</span>
          </div>
          </div>
          <div className="items-start justify-start flex flex-col px-6 pt-8 pb-4 border-b-indigo-600 mt-6 w-full">
            <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4">
              Top Reported Issues
            </h1>
            <div className="items-start justify-start flex flex-col px-6 pt-8 pb-4 border-2 border-indigo-100 rounded-xl mt-2 w-full">
              <div className="w-full p-4 m-4">
                {analyses.map((analysis, aIndex) => {
                  return (
                    <div key={aIndex}>
                      <h5>{analysis.name}</h5>
                      <h6>Issues</h6>
                      {analysis.teaser.map((teaser, tIndex) => {
                        return <p key={tIndex + 100}>{teaser}</p>;
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

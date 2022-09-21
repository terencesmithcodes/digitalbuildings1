import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../loading/Loading";
import {
  getEngBuilding,
  reset,
} from "../../../features/engineer/engineerSlice";
import LeafMap from "../facilitydash/LeafMap";
import EnergyLineChart from "../../charts/EnergyLineChart";
import CoolHeatChart from "../../charts/CoolHeatChart";

const RightEnergyCol = () => {
  const dispatch = useDispatch();
  const { building, equipClasses, isError, isSuccess, isLoading, message } =
    useSelector((state) => state.engineer);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (building === "" && !isLoading && !isError && !isSuccess) {
      dispatch(getEngBuilding(18175));
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
      <div className="col-span-3 min-h-[90vh] items-start justify-start flex flex-col w-full pt-12">
        <div className="w-full items-center justify-center flex flex-col px-12 pb-6 ">
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4 ">
            Building Location
          </h1>
          <div className="items-center justify-center flex flex-col px-6 pt-8 pb-4 border-2 border-feay-200 shadow-xl rounded-xl mt-2 w-full ">
            <LeafMap />
          </div>
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl mt-4 pb-2">
            Annual Avoidable Cost
          </h1>
          <div className="items-center justify-center flex flex-col px-6 pt-8 pb-4 border-2 border-feay-200 shadow-xl rounded-xl mt-2b w-[900px] ">
            <EnergyLineChart />
          </div>
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl mt-8 pb-2">
            Annual Heating/Cool Avoidable Cost
          </h1>
          <div className="items-center justify-center flex flex-col px-6 pt-10 pb-4 border-2 border-feay-200 shadow-xl rounded-xl mt-2b w-[900px] ">
            <CoolHeatChart />
          </div>
        </div>
      </div>
    );
  }
};
export default RightEnergyCol;

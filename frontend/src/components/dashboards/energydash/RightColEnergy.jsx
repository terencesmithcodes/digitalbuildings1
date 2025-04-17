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
import MotionCard from "../../motion/MotionCard";

const RightEnergyCol = () => {
  const dispatch = useDispatch();
  const { building, equipClasses, isError, isSuccess, isLoading, message } =
    useSelector((state) => state.energy);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    // if (building === "" && !isLoading && !isError && !isSuccess) {
    //   dispatch(getEngBuilding(1));
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
      <div className="col-span-3 min-h-[90vh] items-start justify-start flex flex-col w-full pt-8">
        <div className="w-full items-center justify-center flex flex-col px-4 sm:px-8 md:px-12 pb-4">
          <h1 className="font-bold text-indigo-600 text-xl pb-4">
            Building Location
          </h1>
          
          <MotionCard 
            className="items-center justify-center flex flex-col px-4 sm:px-6 pt-8 pb-4 border-2 border-feay-200 shadow-xl rounded-xl mt-4 w-full"
            delay={0.1}
          >
            <LeafMap />
          </MotionCard>
          
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl mt-8 pb-2">
            Annual Avoidable Cost
          </h1>
          
          <MotionCard 
            className="items-center justify-center flex flex-col px-4 sm:px-6 pt-8 pb-4 border-2 border-feay-200 shadow-xl rounded-xl mt-2 w-full max-w-[900px] overflow-x-auto"
            delay={0.3}
          >
            <EnergyLineChart />
          </MotionCard>
          
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl mt-8 pb-2">
            Annual Heating/Cool Avoidable Cost
          </h1>
          
          <MotionCard 
            className="items-center justify-center flex flex-col px-4 sm:px-6 pt-8 pb-4 border-2 border-feay-200 shadow-xl rounded-xl mt-2 w-full max-w-[900px] overflow-x-auto"
            delay={0.5}
          >
            <CoolHeatChart />
          </MotionCard>
        </div>
      </div>
    );
  }
};
export default RightEnergyCol;

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

const RightCol = () => {
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
      <div className="col-span-2 min-h-[90vh] items-center justify-center flex flex-col w-full">
        <div className="w-full items-center justify-center flex flex-col px-12 pt-12 pb-6">
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4">
            Equipment by Class
          </h1>
          <div className="items-center justify-center flex flex-col px-6 pt-8 pb-4 border-2 border-indigo-100 rounded-xl mt-2 w-full">
            <EquipClassChart />
          </div>
          <h1 className="font-bold text-indigo-600 text-xl xl:text-2xl pb-4">
            Equipment by Type
          </h1>
          <div className="items-center mx-auto justify-center flex flex-col px-6 pt-8 pb-4 border-2 border-indigo-100 rounded-xl mt-2 w-full">
            <EquipTypeChart />
          </div>

          <div className="items-center justify-center flex flex-col px-6 pt-8 pb-4 border-b-indigo-600 mt-6 w-full">
            <h1></h1>
            <h1></h1>
          </div>
        </div>
      </div>
    );
  }
};
export default RightCol;

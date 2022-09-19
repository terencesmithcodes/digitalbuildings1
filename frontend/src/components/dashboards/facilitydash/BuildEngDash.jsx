import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux'
import { FaArrowLeft, FaRegUser } from "react-icons/fa";
// import { getEngBuilding, reset } from "../features/engineer/engineerSlice";
import LeafMap from "./LeafMap";
import EquipClassChart from "../../charts/EquipClassChart";
import EquipTypeChart from "../../charts/EquipTypeChart";
// import { Link as LinkDom } from "react-router-dom";
import { logout } from "../../../features/auth/authSlice";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getEngBuilding,
  reset,
} from "../../../features/engineer/engineerSlice";

const BuildEngDash = () => {
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
    return <h1>Is Loading...</h1>;
  }
    if (isSuccess) {
        return 
    }
};
export default BuildEngDash;

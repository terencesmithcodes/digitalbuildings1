import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { FaArrowLeft, FaRegUser } from "react-icons/fa";
// import { getEngBuilding, reset } from "../features/engineer/engineerSlice";
import LeafMap from './LeafMap';
import DoughnutChart from '../../charts/DoughnutChart';
// import { Link as LinkDom } from "react-router-dom";
import {  logout } from "../../../features/auth/authSlice";


import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getEngBuilding, reset } from "../../../features/engineer/engineerSlice";


const FacilityDash = () => {
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
    { title: "Log Out", src: "User", },

  ];
  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }
  if (isSuccess) {
    return (
      <div className="flex">
        <div
          className={`${open ? "w-72" : "w-20"
            } duration-300 h-screen p-5 pt-8 bg-zinc-200 relative`}
        >
          <FaArrowLeft
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-8 h-8 p-1 border-2 border-indigo-600 text-indigo-600 ${!open && "rotate-180"
              }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <FaRegUser
              className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                }`}
            />
            <h1
              className={`text-indigo-600 origin-left font-medium text-xl duration-300 ${!open && "scale-0"
                }`}
            >
              Facilty Engineer
            </h1>
          </div>
          <ul className="pt-6">
            {Dash.map((dashhMenu, index) => (
              <li
                key={index}
                className={`text-indigo-600 text-sm flex items-center 
            gap-x-4 cursor-pointer p-2 hover:bg-indigo-100 rounded-md ${dashhMenu.gap ? "mt-9" : "mt-2"
                  }`}
                onClick={() => {
                  if (dashhMenu.title === "Log Out") {
                    return dispatch(logout());
                  }
                }}
              >
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {" "}
                  {dashhMenu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* <h1 className='font-bold text-3xl'>Building Engineer Dashboard</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 mx-auto justify-center content-evenly">
          <div className="bg-slate-300 col-span-2 w-full h-[400px]">
            <LeafMap />
          </div>
          <div className="grid grid-cols-1 bg-slate-300 h-[400px] w-[400px] ">
            <h1> Building Information</h1>
            <span>Building Name</span>
            <span>Address</span>
            <span>City</span>
            <span>State</span>
            <span>Zipcode</span>
            <span>Type</span>
            <span>Area</span>
          </div>
          <div className="h-[300px] w-[400px]">
            <DoughnutChart />
          </div>
          <div className="h-[300px] w-[400px] ">
            <DoughnutChart />
          </div>
          <div className="h-[300px] w-[400px]">
            <DoughnutChart />
          </div>
        </div>
      </div>
    );
  };
}
export default FacilityDash;

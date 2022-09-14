import React, { useState } from 'react'
import { FaArrowLeft, FaRegUser } from "react-icons/fa";

const FacilityDash = () => {

const [open, setOpen] = useState(true);
  const Dash = [
    { title: "Home", src: "Home" },
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Accounts", src: "User", gap:true },
    { title: "Diagnostics", src: "Facility" },
    { title: "Energy", src: "Analyst" },
    { title: "Messages", src: "Chat" },
    { title: "Messages", src: "Chat", gap:true},
    { title: "Messages", src: "Chat" },
    
  ]
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-zinc-200 relative`}
      >
        <FaArrowLeft
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-indigo-600 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <FaRegUser
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-indigo-600 origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Admin
          </h1>
        </div>
        <ul className="pt-6">
          {Dash.map((dashhMenu, index) => (
            <li
              key={index}
              className={`text-indigo-600 text-sm flex items-center 
            gap-x-4 cursor-pointer p-2 hover:bg-indigo-100 rounded-md ${
              dashhMenu.gap ? "mt-9" : "mt-2"
            }`}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {" "}
                {dashhMenu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Facility Engineer Dashboard</h1>
        <div className="relative w-full h-screen">
          <div>Building Map</div>
          <div>
            <h1>Building Details</h1>
            <h3>Building Name:{'name' }</h3>
            <h3>Address:{'address' }</h3>
            <h3>Building Size{'size' }</h3>
            <h3>Building Type:{'Type' }</h3>
            <h3>Building Class:{'Class' }</h3>
          </div>
          <div>Equipment Count by Class: Chartjs</div>
          <div>Equipment Count by Type: Chartjs</div>
            <div>Equipment with faults: { 'fault count'}</div>
          <div>PointCount by Class: Chartjs</div>
        </div>
      </div>
    </div>
  );
}
  


export default FacilityDash
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
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-8 h-8 p-1 border-2 border-indigo-600 text-indigo-600 ${
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
      {/* <h1>Facility Engineer Dashboard</h1> */}
      <div className="w-full h-screen bg-white flex flex-col justify-between">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-[1240px] m-4">
          <div className="flex flex-col justify-start md:items-start w-full px-2 py-16 border-2 border-indigo-600 rounded-xl">
            <h1 className="py-3 text-5xl md:text-5xl font-bold">
              Building Map
            </h1>
          </div>
          <div className="flex flex-col justify-start md:items-start w-full px-2 py-8 border-2 border-indigo-600 rounded-xl">
            <h1 className="py-3 text-5xl md:text-5xl font-bold">
              Building Details
            </h1>
            <h2>Building Name</h2>
            <h2>Address</h2>
            <h2>Size</h2>
            <h2>Type</h2>
            <h2>Class</h2>
          </div>
          <div className="flex flex-col justify-start md:items-start w-full px-2 py-8 border-2 border-indigo-600 rounded-xl">
            <h1 className="py-3 text-5xl md:text-5xl font-bold">
              Building Details
            </h1>
            <h2>Building Name</h2>
            <h2>Address</h2>
            <h2>Size</h2>
            <h2>Type</h2>
            <h2>Class</h2>
          </div>
          <div className="flex flex-col justify-start md:items-start w-full px-2 py-8 border-2 border-indigo-600 rounded-xl">
            <h1 className="py-3 text-5xl md:text-5xl font-bold">
              Building Details
            </h1>
            <h2>Building Name</h2>
            <h2>Address</h2>
            <h2>Size</h2>
            <h2>Type</h2>
            <h2>Class</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
  


export default FacilityDash
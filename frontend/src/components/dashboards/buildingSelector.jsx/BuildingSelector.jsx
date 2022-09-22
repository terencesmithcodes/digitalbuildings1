import React from 'react'
import buildSelectImg from '../../../assets/buildingSelector.jpg'
import Selector from '../admindash/Selector';


import {
  OfficeBuildingIcon,
  CogIcon,
  LogoutIcon,
  TemplateIcon,
} from "@heroicons/react/outline";

const BuildingSelector = () => {
  return (
    <>
      <div className="grid col-span-3 p-4 place-items-center">
     <h2 className="text-2xl font-bold text-center mb-8 text-indigo-600">
            Select Building <OfficeBuildingIcon />
          </h2>
          <div className="">
            <Selector transfer={transferTo} />
          </div>

      </div>
    </>

    // <div className="w-full h-screen bg-red-300">
    // <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl bg-slate-300 ">
    //   {/* <div className="w-[600px] h-[600px] border-r border-feay-200 hidden md:block">
    //       <img className="w-full h-full" src={buildSelectImg} alt="buildimg" />
    //     </div> */}
    //   <div className="w-[300px] h-[300px] justify- bg-indigo-400 ">
    //     <form>
    //       <h2 className="text-2xl font-bold text-indigo-600 text-center mb-8">
    //         Select Building
    //       </h2>
    //       <div className="">
    //         <Selector />
    //       </div>
    //     </form>
    //   </div>
    // </div>
    // </div>
  );
}

export default BuildingSelector
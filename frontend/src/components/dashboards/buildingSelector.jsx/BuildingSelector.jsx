import React from 'react'
import buildSelectImg from '../../../assets/buildingSelector.jpg'
import Selector from '../admindash/Selector';

const BuildingSelector = () => {
  return (
    <div className="w-[1440px] h-screen flex mx-32 my-32 px-10 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[600px] shadow-xl mx-32 my-32  ">
        <div className="w-[600px] h-[600px] hidden md:block">
          <img className="w-full h-full" src={buildSelectImg} alt="buildimg" />
        </div>
        <div className="w-[600px] h-[600px] p-4 flex flex-col justify-center border-r border-feay-200">
          <form>
            <h2 className="text-2xl font-bold text-indigo-600 text-center mb-8">
              Select Building
            </h2>
            <div className="flex justify-center">
              <Selector />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BuildingSelector
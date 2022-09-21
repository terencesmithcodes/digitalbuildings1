import React from 'react'
import buildSelectImg from '../../../assets/buildingSelector.jpg'
import Selector from '../admindash/Selector';

const BuildingSelector = () => {
  return (
    <div className="w-[1240px] h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-18 ml-10 h-[600px] shadow-xl">
        <div className="w-full h-[600px] hidden md:block">
          <img className="w-full h-full" src={buildSelectImg} alt="buildimg" />
        </div>
        <div className="p-4 flex flex-col justify-center">
          <form>
            <h2 className="text-2xl font-bold text-indigo-600 text-center mb-8">
              Select Building
            </h2>
            <div className='bg-red-300 flex justify-center'>
              <Selector />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BuildingSelector
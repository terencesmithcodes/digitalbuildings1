import React from 'react'
import buildSelectImg from '../../../assets/buildingSelector.jpg'
import Selector from '../admindash/Selector';
import { OfficeBuildingIcon } from "@heroicons/react/outline";

const BuildingSelector = ({transferTo}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl w-full border border-gray-200">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <OfficeBuildingIcon className="h-16 w-16 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Building Selector
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Select a building to view detailed analytics, equipment information, and energy performance data.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Available Buildings</h3>
          <div className="flex justify-center">
            <Selector transfer={transferTo} />
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            After selecting a building, you'll be redirected to the dashboard
          </div>
        </div>
        
        <div className="mt-8 bg-indigo-50 rounded-lg p-4 border border-indigo-100">
          <h3 className="text-md font-medium text-indigo-700 mb-2">Digital Building Analytics</h3>
          <p className="text-sm text-indigo-600">
            View all energy consuming assets in one location. Analyze equipment performance, identify optimization opportunities, and monitor energy usage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuildingSelector
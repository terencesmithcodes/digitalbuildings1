import React from 'react'
import buildSelectImg from '../../../assets/buildingSelector.jpg'
import Selector from '../admindash/Selector';


import {
  OfficeBuildingIcon,
  CogIcon,
  LogoutIcon,
  TemplateIcon,
} from "@heroicons/react/outline";

const BuildingSelector = ({transferTo}) => {
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
  );
}

export default BuildingSelector
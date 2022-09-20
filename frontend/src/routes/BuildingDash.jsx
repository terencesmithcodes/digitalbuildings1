import React from 'react'
import LeftCol from '../components/dashboards/facilitydash/LeftCol';
import RightCol from '../components/dashboards/facilitydash/RightCol';
import Header from '../components/Navbar/Header';
import Navbar from '../components/Navbar/Navbar';



const BuildingRoute = () => {
  return (
    <div className="App overflow-y-hidden ">
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <Navbar />
        <div className="grid grid-cols-1 place-self-center xl:grid-cols-5 col-span-10 w-full">
          <LeftCol />
          <RightCol />
        </div>
      </div>
    </div>
  );
}

export default BuildingRoute
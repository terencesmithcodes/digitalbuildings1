import React from "react";
import LeftColEnergy from "../components/dashboards/energydash/LeftColEnergy";
import RightColEnergy from "../components/dashboards/energydash/RightColEnergy";
import Header from "../components/Navbar/Header";
import Navbar from "../components/Navbar/Navbar";

const EnergyRoute = () => {
  return (
    <div className="App overflow-y-hidden ">
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <Navbar />
        <div className="grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
          <LeftColEnergy />
          <RightColEnergy />
        </div>
      </div>
    </div>
  );
};

export default EnergyRoute
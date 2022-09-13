import React from 'react'

import EnergyAnalystDashboard from '../components/Energy.Analyst.dashboard';

import Sidebar from "../components/Sidebar";

const EnergyRoute = () => {
  return (
    <>
          <Sidebar />
          <EnergyAnalystDashboard/>
    </>
  );
}

export default EnergyRoute
import React from 'react'

import FacilityEngDashboard from '../components/Facility.Eng.dashboard';

import Sidebar from "../components/Sidebar";

const FacilityRoute = () => {
  return (
    <>
          <Sidebar />
          <FacilityEngDashboard />
    </>
  );
}

export default FacilityRoute
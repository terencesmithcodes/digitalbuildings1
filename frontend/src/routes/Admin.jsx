import React from 'react'

import Navbar from '../components/Navbar/Navbar';

import AdminDash from '../components/dashboards/admindash/AdminDashSidebar'
import Header from '../components/Navbar/Header';



const AdminRoute = () => {
  return (
    <div className="App overflow-y-hidden">
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <Navbar />
        <div className="grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
          <AdminDash />
        </div>
      </div>
    </div>
  );
}

export default AdminRoute
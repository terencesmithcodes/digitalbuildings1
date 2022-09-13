import React from 'react'

import Admin from '../components/Admin.dashboard';

import Sidebar from '../components/Sidebar'

const AdminRoute = () => {
  return (
    <>
          <Sidebar />
          <Admin />
    </>
  );
}

export default AdminRoute
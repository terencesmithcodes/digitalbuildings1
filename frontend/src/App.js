import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from "./routes/Home";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import Energy from "./routes/Energy";
import Facility from "./routes/Facility";
import RegisterTest from "./routes/RegisterTest";
import EngineerTest from "./routes/EngineerTest";
import BuildingDash from "./routes/BuildingDash";
import EnergyTest from "./routes/EnergyTest";

// Components
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
      <Routes>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes - Only for authenticated users */}
        <Route element={<ProtectedRoute />}>
          {/* Admin routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<RegisterTest />} />
          
          {/* Engineer routes */}
          <Route path="/building" element={<BuildingDash />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/engineer" element={<EngineerTest />} />
          
          {/* Energy routes */}
          <Route path="/energy" element={<Energy />} />
          <Route path="/testen" element={<EnergyTest />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

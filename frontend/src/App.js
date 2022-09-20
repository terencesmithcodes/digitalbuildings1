// import Navbar from "./components/landingPage/Navbar";
import Footer from "./components/landingPage/Footer";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import Energy from "./routes/Energy";
import Facility from "./routes/Facility";
import RegisterTest from "./routes/RegisterTest";
import EngineerTest from "./routes/EngineerTest";
import BuildingDash from "./routes/BuildingDash";
import EnergyTest from "./routes/EnergyTest";



import { Routes, Route } from "react-router-dom";

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Energy" element={<Energy />} />
        <Route path="/Facility" element={<Facility />} />
        <Route path="/Register" element={<RegisterTest />} />
        <Route path="/Engineer" element={<EngineerTest />}/>
        <Route path="/Building" element={<BuildingDash />}/>
        <Route path="/testen" element={<EnergyTest />}/>
       
       
      </Routes>
      

    </>
  );
}

export default App;

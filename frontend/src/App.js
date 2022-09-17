import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Admin from "./routes/Admin";
import Energy from "./routes/Energy";
import Facility from "./routes/Facility";
import RegisterTest from "./routes/RegisterTest";
import EngineerTest from "./routes/EngineerTest";


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
      </Routes>
      

    </>
  );
}

export default App;

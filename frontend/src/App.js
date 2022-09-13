import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Login from "./routes/Login";


import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      

    </>
  );
}

export default App;

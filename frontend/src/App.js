import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Footer />
    </>
  );
}

export default App;

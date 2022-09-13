import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Support from "../components/Support";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Footer />
    </>
  );
};

export default Home;

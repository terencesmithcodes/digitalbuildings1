import React from "react";
import Hero from "../components/landingPage/Hero";
import About from "../components/landingPage/About";
import Support from "../components/landingPage/Support";
import Navbar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";

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

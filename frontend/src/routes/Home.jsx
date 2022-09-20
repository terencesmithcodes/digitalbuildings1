import React from "react";
import Hero from "../components/landingPage/Hero";
import About from "../components/landingPage/About";
import Support from "../components/landingPage/Support";
import HeroNavbar from "../components/landingPage/HeroNavbar";
import Footer from "../components/landingPage/Footer";

const Home = () => {
  return (
    <>
      <HeroNavbar />
      <Hero />
      <About />
      <Support />
      <Footer />
    </>
  );
};

export default Home;

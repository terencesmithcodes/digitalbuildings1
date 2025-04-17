import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import hero from '../../assets/data-analysis.png'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-100 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col justify-center md:items-start w-full py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="py-3 heading-xl text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            One Simple Ecosystem for Smart Building Solutions
          </motion.h1>
          <motion.p 
            className="body-lg text-gray-600 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Digital Data Analytics and Diagnostics
          </motion.p>
          <motion.p 
            className="body-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Integrate our Solutions and Start Saving
          </motion.p>
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4"
          >
            <Link
              to="support"
              smooth={true}
              offset={-80}
              duration={500}
            >
              <button className="text-lg">Get Started</button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <img className="w-full max-w-md mx-auto" src={hero} alt="Hero" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero
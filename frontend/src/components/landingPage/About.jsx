import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name='about' className="w-full my-16 sm:my-32">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="text-center">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-indigo-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Digital Building Analytics
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl py-6 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technology and Services as Extraordinary as the People Behind Them.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14 p-2 md:p-4 text-center">
          <motion.div 
            className="border p-6 sm:p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600">Data Model</h2>
            <p className="text-gray-400 mt-2">
              The Digital Buildings data model combines BMS data points, control
              sequences, and mechanical schedules to create a digital model of
              every piece of equipment.
            </p>
          </motion.div>

          <motion.div 
            className="border p-6 sm:p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600">
              Global Analytics Engine
            </h2>
            <p className="text-gray-400 mt-2">
              Digital Buildings analyzes over 400 million square feet of
              buildings everyday using a global set of engineering algorithms.
              All diagnostic findings are bundled to present the highest
              priorities of the day, week, and month across all equipment.
            </p>
          </motion.div>

          <motion.div 
            className="border p-6 sm:p-8 rounded-xl shadow-xl sm:col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600">
              Automated Energy Modeling
            </h2>
            <p className="text-gray-400 mt-2">
              Digital Buildings automatically models energy impacts using
              advanced regression modeling techniques. The energy model
              normalizes for weather, equipment runtime, and even seasonal
              schedules of heating/cooling systems so you can confidently track
              all energy cost savings.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

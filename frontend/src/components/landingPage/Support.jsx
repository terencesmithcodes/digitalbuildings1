import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import supportHero from "../../assets/support.jpg";
import { motion } from "framer-motion";

const Support = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div name="support" className="w-full min-h-screen mt-24">
      <div className="w-full h-full bg-gray-900/70 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportHero}
          alt="support"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative px-4">
        <div className="py-12">
          <motion.h2 
            className="heading-lg uppercase text-center pt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Support
          </motion.h2>
          
          <motion.h3 
            className="py-4 heading-md text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Team for Data Analytics and Diagnostics Knowledge and Support
          </motion.h3>
          
          <motion.p 
            className="body-lg py-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Digital Buildings has deep experience leveraging the unique
            strengths of Data Analytics and Diagnostics to unlock disparate
            edge data. This opens infinite opportunities to architect IoT
            solutions that deliver operational efficiencies and tangible ROI's
            for buildings and beyond.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 pb-24 sm:pt-20 text-black max-w-[1240px] mx-auto">
        <motion.div 
          className="bg-white rounded-xl shadow-xl"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
        >
          <div className="p-6 md:p-8">
            <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md" />
            <h3 className="font-bold text-xl md:text-2xl my-6">Sales</h3>
            <p className="text-gray-600 text-base md:text-lg">
              Our sales team can help you find the right solution for your building's needs. We offer customized packages that fit your budget and requirements.
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4 rounded-b-xl">
            <p className="flex items-center text-indigo-600 font-medium">
              Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-xl"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
        >
          <div className="p-6 md:p-8">
            <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md" />
            <h3 className="font-bold text-xl md:text-2xl my-6">Technical Support</h3>
            <p className="text-gray-600 text-base md:text-lg">
              Our technical team is available 24/7 to help you with any issues. We can help with installation, troubleshooting, and maintenance of your systems.
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4 rounded-b-xl">
            <p className="flex items-center text-indigo-600 font-medium">
              Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-xl md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-md lg:max-w-none"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
        >
          <div className="p-6 md:p-8">
            <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-md" />
            <h3 className="font-bold text-xl md:text-2xl my-6">Energy Modeling</h3>
            <p className="text-gray-600 text-base md:text-lg">
              Our energy modeling experts can help you understand your building's energy usage and identify opportunities for savings and efficiency improvements.
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4 rounded-b-xl">
            <p className="flex items-center text-indigo-600 font-medium">
              Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
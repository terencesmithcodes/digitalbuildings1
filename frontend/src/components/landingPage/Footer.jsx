import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-gray-300 py-8 px-4 md:px-8">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b border-gray-700 py-8 gap-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h6 className="font-bold text-sm uppercase mb-4 text-gray-200">Solutions</h6>
          <ul className="space-y-2">
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Analytics</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Data</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Energy Savings</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Tools and Diagnostics</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Cloud</li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h6 className="font-bold text-sm uppercase mb-4 text-gray-200">Support</h6>
          <ul className="space-y-2">
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Documentation</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Data</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Digital Building Guides</li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h6 className="font-bold text-sm uppercase mb-4 text-gray-200">Company</h6>
          <ul className="space-y-2">
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">About</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Careers</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Testimonials</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Partners</li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h6 className="font-bold text-sm uppercase mb-4 text-gray-200">Legal</h6>
          <ul className="space-y-2">
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Privacy Policy</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Terms and Conditions</li>
            <li className="py-1 text-sm hover:text-indigo-400 transition-colors cursor-pointer">Copyrights</li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="col-span-2 pt-4 md:pt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h6 className="font-bold text-sm uppercase mb-4 text-gray-200">
            Subscribe to Monthly Tips
          </h6>
          <p className="text-sm mb-4 text-gray-400">
            Get monthly information on new resources and application notes sent
            to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
              type="email" 
              placeholder='Your email address' 
            />
            <button className="py-3 px-6">Subscribe</button>
          </form>
        </motion.div>
      </div>
      
      <div className="flex flex-col md:flex-row max-w-[1240px] py-8 mx-auto justify-between items-center text-center text-gray-500">
        <p className="text-sm">© {new Date().getFullYear()} Digital Building Analytics. All rights reserved</p>
        <div className="flex justify-center gap-6 pt-4 md:pt-0 text-xl">
          <FaFacebook className="hover:text-indigo-400 cursor-pointer transition-colors" />
          <FaInstagram className="hover:text-indigo-400 cursor-pointer transition-colors" />
          <FaTwitter className="hover:text-indigo-400 cursor-pointer transition-colors" />
          <FaGithub className="hover:text-indigo-400 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
}

export default Footer
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { logout } from '../../features/auth/authSlice'

import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

import { Link as LinkDom } from 'react-router-dom'

const HeroNavbar = () => {
  const dispatch = useDispatch()
  const [nav, setNav] = useState(false);
  const { user} = useSelector(
    (state) => state.auth
  )
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav)

  const navLinkClass = "border-none bg-transparent text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200";
  const mobileNavLinkClass = "bg-transparent text-indigo-600 px-8 py-3 mb-4 shadow-none hover:shadow-none";

  return (
    <motion.div 
      className="w-screen h-[80px] z-10 bg-white/90 backdrop-blur-sm fixed drop-shadow-sm"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 md:px-8 flex justify-between items-center w-full h-full max-w-[1400px] mx-auto">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold mr-4 text-indigo-600">
            Digital Building Analytics
          </h1>
          <ul className="hidden lg:flex">
            <li className="p-2 md:p-4">
              <Link to="home" smooth={true} duration={500}>
                <button className={navLinkClass}>
                  Home
                </button>
              </Link>
            </li>
            <li className="p-2 md:p-4">
              <Link to="about" smooth={true} offset={-200} duration={500}>
                <button className={navLinkClass}>
                  About
                </button>
              </Link>
            </li>
            <li className="p-2 md:p-4">
              <Link to="support" smooth={true} offset={-80} duration={500}>
                <button className={navLinkClass}>
                  Support
                </button>
              </Link>
            </li>
            <li className="p-2 md:p-4">
              <LinkDom to="/building">
                <button className={navLinkClass}>
                  Building
                </button>
              </LinkDom>
            </li>
            <li className="p-2 md:p-4">
              <LinkDom to="/energy">
                <button className={navLinkClass}>
                  Energy
                </button>
              </LinkDom>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex pr-4">
          {user ? (
            <button
              onClick={() => dispatch(logout())}
              className="px-6 py-2 text-sm"
            >
              Sign Out
            </button>
          ) : (
            <LinkDom to="login">
              <button className="px-6 py-2 text-sm">
                Sign In
              </button>
            </LinkDom>
          )}
        </div>
        <div className="lg:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-6 h-6 text-indigo-600" /> : <XIcon className="w-6 h-6 text-indigo-600" />}
        </div>
      </div>
      
      <motion.ul 
        className={!nav ? "hidden" : "absolute bg-white/95 backdrop-blur-sm w-full px-8 shadow-md"}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: nav ? 1 : 0, height: nav ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <li className="border-b border-zinc-200 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            <button className={mobileNavLinkClass}>
              Home
            </button>
          </Link>
        </li>
        <li className="border-b border-zinc-200 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            <button className={mobileNavLinkClass}>
              About
            </button>
          </Link>
        </li>
        <li className="border-b border-zinc-200 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button className={mobileNavLinkClass}>
              Support
            </button>
          </Link>
        </li>
        <li className="border-b border-zinc-200 w-full">
          <LinkDom onClick={handleClose} to="/building">
            <button className={mobileNavLinkClass}>
              Building
            </button>
          </LinkDom>
        </li>
        <li className="border-b border-zinc-200 w-full">
          <LinkDom onClick={handleClose} to="/energy">
            <button className={mobileNavLinkClass}>
              Energy
            </button>
          </LinkDom>
        </li>
        <div className="flex flex-col my-4">
          {user ? (
            <button
              onClick={() => dispatch(logout())}
              className={mobileNavLinkClass}
            >
              Sign Out
            </button>
          ) : (
            <LinkDom to="/login">
              <button className={mobileNavLinkClass}>
                Sign In
              </button>
            </LinkDom>
          )}
        </div>
      </motion.ul>
    </motion.div>
  );
};

export default HeroNavbar;

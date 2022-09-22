import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { MenuIcon, XIcon } from "@heroicons/react/outline";

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

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm-:text-4xl">
            Digital Building Analytics
          </h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                <button className="border-none bg-transparent text-black mr-4">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                <button className="border-none bg-transparent text-black mr-4">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-80} duration={500}>
                <button className="border-none bg-transparent text-black mr-4">
                  Support
                </button>
              </Link>
            </li>
            <li>
              <LinkDom to="/building">
                <button className="border-none bg-transparent text-black mr-4">
                  Building
                </button>
              </LinkDom>
            </li>
            <li>
              <LinkDom to="/energy">
                <button className="border-none bg-transparent text-black mr-4">
                  Energy
                </button>
              </LinkDom>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          {user ? (
            <button
              onClick={() => dispatch(logout())}
              className="border-none bg-transparent text-black mr-4"
            >
              Sign Out
            </button>
          ) : (
            <LinkDom to="login">
              <button className="border-none bg-transparent text-black mr-4">
                Sign In
              </button>
            </LinkDom>
          )}

          {/* <button className="px-8 py-3">Sign Up</button> */}
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Home
            </button>
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              About
            </button>
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Support
            </button>
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <LinkDom onClick={handleClose} to="/building">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Building
            </button>
          </LinkDom>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <LinkDom onClick={handleClose} to="/building">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              Energy
            </button>
          </LinkDom>
        </li>
        <div className="flex flex-col my-4">
          {user ? (
            <button
              onClick={() => dispatch(logout())}
              className="bg-transparent text-indigo-600 px-8 py-3 mb-4"
            >
              Sign Out
            </button>
          ) : (
            <LinkDom to="/login">
              <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
                Sign In
              </button>
            </LinkDom>
          )}

          {/* <button className="px-8 py-3">Sign Up</button> */}
        </div>
      </ul>
    </div>
  );
};

export default HeroNavbar;

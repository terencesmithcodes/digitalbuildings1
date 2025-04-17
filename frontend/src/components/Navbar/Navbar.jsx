import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { navLinks } from "./NavIcons";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { ActiveTabState } from "../../atoms/ActiveTabState";
import { logout } from '../../features/auth/authSlice';

function NavBar() {
  const [activeNavItem, setActiveNavItem] = useRecoilState(ActiveTabState);
  const location = useLocation();
  
  // Set active nav item based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    const matchingLink = navLinks.find(link => link.path === currentPath);
    if (matchingLink) {
      setActiveNavItem(matchingLink.id);
    }
  }, [location, setActiveNavItem]);
  
  return (
    <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between bg-white shadow-sm">
      <div className="space-y-2 w-full">
        <div className="px-4 py-2 mb-6">
          <h2 className="text-xl font-bold text-indigo-600 hidden xl:block">Digital Buildings</h2>
          <p className="text-xs text-gray-500 hidden xl:block">Building Analytics Dashboard</p>
        </div>
        
        {/* Main navigation links */}
        <div className="space-y-1 w-full">
          {navLinks.slice(0, 4).map((link) => (
            <NavItem link={link} key={link.id} />
          ))}
        </div>
        
        {/* Bottom section with logout */}
        <div className="absolute bottom-8 w-full px-1">
          <div className="w-full border-t border-gray-200 mb-4" />
          <NavItem link={navLinks[4]} key={navLinks[4].id} />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ link }) {
  const dispatch = useDispatch();
  const [activeNavItem, setActiveNavItem] = useRecoilState(ActiveTabState);
  const isLogout = link.title === 'Logout';
  
  const handleClick = () => {
    setActiveNavItem(link.id);
    if (isLogout) {
      dispatch(logout());
    }
  };
  
  return (
    <div
      onClick={handleClick}
      className={`w-full flex items-center justify-start px-4 py-3 cursor-pointer group hover:bg-indigo-50 rounded-lg transition-all duration-200 ${
        activeNavItem === link.id ? "bg-indigo-50 border-l-4 border-indigo-600" : "border-l-4 border-transparent"
      }`}
    >
      <Link 
        to={link.path}
        className="flex items-center w-full space-x-3"
      >
        <div className={`${activeNavItem === link.id ? "text-indigo-600" : "text-gray-600"} group-hover:text-indigo-600`}>
          {React.cloneElement(link.icon, { 
            className: `w-6 h-6 ${activeNavItem === link.id ? "text-indigo-600" : "text-gray-600"} group-hover:text-indigo-600`
          })}
        </div>
        <span className={`${activeNavItem === link.id ? "text-indigo-600 font-medium" : "text-gray-700"} group-hover:text-indigo-600 xl:flex hidden`}>
          {link.title}
        </span>
        
        {isLogout && (
          <span className="ml-auto bg-red-50 text-red-600 text-xs rounded-full px-2 py-1 hidden xl:block">
            Exit
          </span>
        )}
      </Link>
    </div>
  );
}

export default NavBar;

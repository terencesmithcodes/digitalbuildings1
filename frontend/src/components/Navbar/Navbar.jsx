import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { navLinks } from "./NavIcons";
import { Link } from "react-router-dom";
import {useRecoilState} from 'recoil'
import { ActiveTabState } from "../../atoms/ActiveTabState";
import { logout } from '../../features/auth/authSlice'

function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState();
  return (
    <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full ">
        {navLinks.slice(0, 4).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
        <div className="w-full border-t border-gray-200" />
        {navLinks.slice(4, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
          </div>

    </nav>
  );
}

function NavItem({ link }) {
  const dispatch = useDispatch()
    const [activeNavItem, setActiveNavItem] = useRecoilState(ActiveTabState)
    return (
      <div
        onClick={() => setActiveNavItem(link.id)}
        className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-1-4 border-transparent ${
        activeNavItem === link.id && "border-gray-900"
      
        } `}
      >
      <Link onClick={link.title === 'LogOut' ? () => dispatch(logout()) : undefined} to='/'>
        <span >{link.icon}</span>
        <button
          className={`text-gray-600 group-hover:text-black xl:flex hidden ${
            activeNavItem === link.id && "text-black" 
          }`}
        >
            

          </button>
          {link.title}
      </Link>


      </div>
     
    );
}

export default NavBar;

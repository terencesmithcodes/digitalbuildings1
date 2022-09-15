import React, { useState, useEffect } from 'react'
import Selector from './Selector';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset, logout } from "../features/auth/authSlice";

import { FaArrowLeft, FaRegUser} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

 const [formData, setFormData] = useState({
   username: "",
   email: "",
   role: "",
   password: "",
   password2: "",
 });
  
    const { username, email, role, password, password2 } = formData;

    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    );

    useEffect(() => {
      if (isError) {
        toast.error(message);
      }

      dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    const onSubmit = (e) => {
      e.preventDefault();

      if (password !== password2) {
        toast.error("Passwords do not match");
      } else {
        const userData = {
          username,
          email,
          role,
          password,
        };

        dispatch(register(userData));
      }
    };

    if (isLoading) {
      return <h1>Loading...</h1>;
    }

  const Dash = [
    { title: "Home", src: "Home" },
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Accounts", src: "User", gap:true },
    { title: "Diagnostics", src: "Facility" },
    { title: "Energy", src: "Analyst" },
    { title: "Messages", src: "Chat" },
    { title: "Messages", src: "Chat", gap:true},
    { title: "Messages", src: "Chat" },
    
  ]

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-zinc-200 relative`}
      >
        <FaArrowLeft
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-8 h-8 p-1 border-2 border-indigo-600  text-indigo-600 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <FaRegUser
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-indigo-600 origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Admin
          </h1>
        </div>
        <ul className="pt-6">
          {Dash.map((dashhMenu, index) => (
            <li
              key={index}
              className={`text-indigo-600 text-sm flex items-center 
            gap-x-4 cursor-pointer p-2 hover:bg-indigo-100 rounded-md ${
              dashhMenu.gap ? "mt-9" : "mt-2"
            }`}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {" "}
                {dashhMenu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Admin Dashboard</h1>
        <div className="relative w-full h-screen">
          <form
            onSubmit={onSubmit}
            className="max-w-[800px] w-full mx-auto bg-zinc-200 p-8 rounded-xl drop-shadow-xl"
          >
            <h2 className="text=4xl font-bold text-center py-2">
              User Account
            </h2>
            <div className="flex flex-col mb-4">
              <label>Username</label>
              <input
                className="border relative bg-gray-100 py-2"
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Password</label>
              <input
                className="border relative bg-gray-100 py-2"
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Confirm Password</label>
              <input
                className="border relative bg-gray-100 py-2"
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="border relative bg-gray-100 py-2"
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>

            <div className="flex flex-col">
              <label>Roles</label>
              {/* <Selector /> */}
              <input
                className="border relative bg-gray-100 py-2"
                type="text"
                id="role"
                name="role"
                value={role}
                placeholder="Enter role"
                onChange={onChange}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-16 bg-indigo-600 hover:bg-indigo-500 relative text-white"
            >
              Submit
            </button>
          </form>
          <button
            onClick={() => dispatch(logout())}
            type="submit"
            className="w-full py-3 mt-16 bg-indigo-600 hover:bg-indigo-500 relative text-white"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
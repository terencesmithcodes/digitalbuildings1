import React, { useState, useEffect } from 'react'
import Selector from './Selector';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset, logout } from "../../../features/auth/authSlice";

import { FaArrowLeft, FaRegUser } from "react-icons/fa";
import CreateUser from './CreateUserForm';
import UpdateUserForm from './UpdateUserForm';

const AdminDash = () => {
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
    { title: "Create User", src: "User" },
    { title: "Update User", src: "User-update" },
    { title: "Log Out", src: "User-logout", gap: true },
    // { title: "Energy", src: "Analyst" },
    // { title: "Messages", src: "Chat" },
    // { title: "Messages", src: "Chat", gap:true},
    // { title: "Messages", src: "Chat" },
  ];

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
            gap-x-4 cursor-pointer p-2 hover:bg-indigo-100 rounded-md 
            ${dashhMenu.gap ? "mt-9" : "mt-2"}`}
            onClick={() => {
              if (dashhMenu.title === "Log Out") {
                return dispatch(logout())
                } 
              }
            } 
            >
             
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {" "}
                {dashhMenu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <CreateUser />
      <UpdateUserForm />
    </div>
  );
}

export default AdminDash
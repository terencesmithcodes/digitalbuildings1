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
  const [showRegister, setshowRegister] = useState(true);



//  const [formData, setFormData] = useState({
//    username: "",
//    email: "",
//    role: "",
//    password: "",
//    password2: "",
//  });
  
    // const { username, email, role, password, password2 } = formData;

    const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    );

    useEffect(() => {
      if (isError) {
        toast.error(message);
      }

      dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

if(showRegister){
  return (
    <>
    <div className="flex">
      <button onClick={() => setshowRegister(false)}>Get Update User Form</button>
      <CreateUser />
    </div>
    </>
  );

}

if(!showRegister){
  return (
    <>
    <div className="flex">
    <button onClick={() => setshowRegister(true)}>Get Register Form</button>
    <UpdateUserForm />
    </div>
    </>
  );
}

}

export default AdminDash
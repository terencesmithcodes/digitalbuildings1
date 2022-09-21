import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { register, reset, logout } from "../../../features/auth/authSlice";

// import { FaArrowLeft, FaRegUser} from "react-icons/fa";

const UpdateUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    active: "",
  });

  const { username, email, role, active} = formData;

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

   
      const userData = {
        username,
        email,
        role,
        active
      };

      dispatch(register(userData));
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-7 text-2xl font-semibold flex flex-col w-[1240px]">
      <h1 className="flex flex-col w-full mb-5 font-bold text-2xl text-center">
        Admin Dashboard
      </h1>
      <div className="">
        <form
          onSubmit={onSubmit}
          className="max-w-[800px] w-full mx-auto bg-zinc-200 p-8 rounded-xl drop-shadow-xl"
        >
          <h2 className="text-xl font-bold text-center py-2">
            Update User Account
          </h2>
          <div className="flex flex-col mb-4">
            <input
              className="border rounded-lg relative bg-gray-100 mb-2 mt-4 p-2 text-lg"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col mb-4">
            {/* <Selector /> */}
            <input
              className="border rounded-lg relative bg-gray-100 mb-2 mt-4 p-2 text-lg"
              type="text"
              id="role"
              name="role"
              value={role}
              placeholder="Enter role"
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            {/* <Selector /> */}
            <input
              className="border rounded-lg relative bg-gray-100 mb-2 mt-4 p-2 text-lg"
              type="text"
              id="active"
              name="active"
              value={active}
              placeholder="Enable/Disable"
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
        {/* <div className="max-w-[600px] w-full mx-auto">
          <button
            onClick={() => dispatch(logout())}
            type="submit"
            className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
          >
            Log Out
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default UpdateUserForm;

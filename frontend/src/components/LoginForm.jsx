import React from 'react'

import loginHero from '../assets/login.jpg'

const LoginForm = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/100">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginHero}
        alt="login"
      />

      <div className="flex h-full justify-center items-center ">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded-xl">
          <h2 className="text=4xl font-bold text-center py-2">
            Digital Building Analytics
          </h2>
          <div className="flex flex-col mb-4">
            <label>Username</label>
            <input className="border relative bg-gray-100 py-2" type="text" />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              className="border relative bg-gray-100 py-2"
              type="password"
            />
          </div>
          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
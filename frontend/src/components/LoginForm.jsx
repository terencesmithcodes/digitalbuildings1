import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'

import loginHero from '../assets/login.jpg'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const {username, password} = formData

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // if (isSuccess || user) {
    //   navigate('/')
    // }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      username,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return (
    <h1>Loading</h1>
    )
  }



  return (
    <div className="relative w-full h-screen bg-zinc-900/100">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginHero}
        alt="login"
      />

      <div className="flex h-full justify-center items-center form">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 rounded-xl" onSubmit={handleSubmit}>
          <h2 className="text=4xl font-bold text-center py-2">
            Digital Building Analytics
          </h2>
          <div className="flex flex-col mb-4 form-group">
            <label>Username</label>
            <input className="border relative bg-gray-100 py-2 form-control" 
            type="text"
            id='username'
            name='username'
            value={username}
            placeholder='Enter your username'
            onChange={onChange}
            />
          </div>
          <div className="flex flex-col form-group">
            <label>Password</label>
            <input
              className="border relative bg-gray-100 py-2 form-control"
              type="password"
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
                  type='submit'
          >
            Sign In
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
import { useState, useEffect } from "react"

import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

import { register, reset, logout } from "../features/auth/authSlice"


const RegisterTest = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: '',
    password: '',
    password2: ''
  })

  const {username, email, role, password, password2} = formData

  
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      // navigate('/')
      // console.log(user)
      // console.log(isSuccess)
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        username,
        email,
        role,
        password
      }

      dispatch(register(userData))
    }
  }

  if(isLoading){
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <>
      <section className='heading'>
        <h1>
           Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              value={username}
              placeholder='Enter your username'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='role'
              name='role'
              value={role}
              placeholder='Enter role'
              onChange={onChange}
            />
          </div>
          
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
        <div>
          <button onClick={() => dispatch(logout())}>
            Log Out
          </button>
        </div>
      </section>
    </>
  )
}
export default RegisterTest
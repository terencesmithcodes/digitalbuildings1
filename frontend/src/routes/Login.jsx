import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginForm from '../components/landingPage/LoginForm'



const Login = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)
  
  useEffect(() =>{
    if(user){
      if(user.role === 'admin'){
        navigate('/Admin')
      }
      else if(user.role === 'engineer'){
        navigate('/Building')
      }
      else if(user.role === 'energy'){
        navigate('/Energy')
      }else{
        navigate('/')
      }
    }
  }, [user, navigate])


  return (
      <>
          <LoginForm />
      </>
  )
}

export default Login
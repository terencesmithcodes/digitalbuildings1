import axios from "axios";

const API_URL = 'http://localhost:5500/api/users/'

const register = async (userData) => {
  console.log(userData)
  console.log(API_URL)
  const response = await axios.post(API_URL + 'create', userData)

  return response.data
}


const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data){
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  login,
  logout
}

export default authService
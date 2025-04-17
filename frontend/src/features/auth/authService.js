import axios from "axios";

// Determine API URL based on environment
const isGitHubPages = window.location.hostname.includes('github.io');
const API_BASE = isGitHubPages ? 'https://mock-digital-buildings-api.glitch.me' : '';
const API_URL = `${API_BASE}/api/users/`;

// Simulate user authentication for GitHub Pages
const mockUser = {
  _id: "mock123456",
  name: "Demo User",
  email: "demo@example.com",
  token: "mock-jwt-token-for-demo-purposes",
  isAdmin: true
};

const register = async (userData, token) => {
  if (isGitHubPages) {
    // Mock registration for GitHub Pages
    return { ...mockUser };
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + 'create', userData, config)
  return response.data
}

const login = async (userData) => {
  if (isGitHubPages) {
    // Mock login for GitHub Pages
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  }

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
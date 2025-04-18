import axios from "axios";
import { toast } from 'react-toastify';

// Determine API URL based on environment
const isGitHubPages = window.location.hostname.includes('github.io');
const API_BASE = isGitHubPages ? 'https://mock-digital-buildings-api.glitch.me' : '';
const API_URL = `${API_BASE}/api/users/`;

// Demo accounts for GitHub Pages or development testing
const mockUsers = {
  'admin': {
    _id: "admin123456",
    name: "Admin User",
    email: "admin@example.com",
    token: "mock-jwt-token-for-admin-demo",
    role: "admin",
    isAdmin: true
  },
  'demo': {
    _id: "demo123456",
    name: "Engineer User",
    email: "engineer@example.com",
    token: "mock-jwt-token-for-engineer-demo",
    role: "engineer",
    isAdmin: false
  },
  'energy': {
    _id: "energy123456",
    name: "Energy User",
    email: "energy@example.com",
    token: "mock-jwt-token-for-energy-demo",
    role: "energy",
    isAdmin: false
  }
};

// Password validation rules
const validatePassword = (password) => {
  // Check minimum length
  if (password.length < 8) return false;
  
  // Must contain at least one number
  if (!/\d/.test(password)) return false;
  
  // Must contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) return false;
  
  // Must contain at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
  
  return true;
};

const register = async (userData, token) => {
  if (isGitHubPages) {
    // Mock registration for GitHub Pages
    const newUser = {
      _id: Math.random().toString(36).substring(2, 15),
      name: userData.name,
      email: userData.email,
      token: "mock-jwt-token-" + Date.now(),
      role: "engineer", // Default role for new users
      isAdmin: false
    };
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return newUser;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + 'create', userData, config);
  return response.data;
};

const login = async (userData) => {
  try {
    // For GitHub Pages or if using demo accounts for development
    if (isGitHubPages || process.env.REACT_APP_USE_MOCK_AUTH === 'true') {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const { username, password } = userData;
      
      // Check if username exists in mock users or use demo as fallback
      const mockUser = mockUsers[username.toLowerCase()];
      
      if (!mockUser) {
        throw new Error('Invalid credentials');
      }
      
      // For GitHub Pages demo, we use hardcoded credentials
      // In production, this would be a bcrypt compare or similar
      const isValidCredential = (
        (username === 'admin' && password === 'DBAdmin_2025!') ||
        (username === 'demo' && password === 'EngineerUser_2025!') ||
        (username === 'energy' && password === 'EnergyUser_2025!')
      );
      
      if (isValidCredential) {
        // Clone the user object to avoid reference issues
        const user = { ...mockUser };
        
        // Store in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        
        return user;
      } else {
        // Simulate authentication failure
        throw new Error('Invalid credentials');
      }
    }

    // Real API authentication
    const response = await axios.post(API_URL + 'login', userData);

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    // Enhanced error handling
    const errorMessage = 
      error.response?.data?.message || 
      error.message || 
      'Authentication failed';
    
    throw new Error(errorMessage);
  }
};

const logout = () => {
  // Clear user from localStorage
  localStorage.removeItem('user');
  
  // You might also want to clear other application state
  // e.g., localStorage.removeItem('building');
  
  // For a more secure logout, you could also invalidate the token on the server
  // but this requires server-side implementation
};

// Check if user is authenticated
const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return !!user;
};

const authService = {
  register,
  login,
  logout,
  isAuthenticated
}

export default authService
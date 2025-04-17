import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';
import loginHero from '../../assets/login.jpg';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Form state
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Demo credentials for GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  const { username, password } = formData;
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message || 'Invalid login credentials');
    }

    if (isSuccess && user) {
      toast.success('Login successful!');
      
      // Redirect based on user role
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'engineer') {
        navigate('/building');
      } else if (user.role === 'energy') {
        navigate('/energy');
      } else {
        navigate('/');
      }
    }

    return () => {
      dispatch(reset());
    };
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Mark function as called to prevent double execution
    handleSubmit.called = true;
    setTimeout(() => { handleSubmit.called = false; }, 1000);
    
    console.log('Form submitted', { username, password });
    
    // Validate form
    if (!username || !password) {
      toast.error('Please fill in all fields');
      console.log('Validation failed: Empty fields');
      return;
    }
    
    // Password strength check
    if (password.length < 6 && !isGitHubPages) {
      toast.warning('Password should be at least 6 characters long');
      console.log('Validation failed: Password too short');
      return;
    }

    const userData = {
      username,
      password,
    };

    console.log('Dispatching login action', userData);
    try {
      dispatch(login(userData));
      console.log('Login action dispatched');
    } catch (error) {
      console.error('Login dispatch error:', error);
    }
  };
  
  // Initialize the called property
  handleSubmit.called = false;
  
  const handleDemoLogin = (role) => {
    console.log('Demo login clicked for role:', role);
    
    // Demo credentials for different roles
    let credentials = { username: 'demo', password: 'demo123' };
    
    if (role === 'admin') {
      credentials = { username: 'admin', password: 'Admin_Secure_P@ss2025!' };
    } else if (role === 'energy') {
      credentials = { username: 'energy', password: 'energy123' };
    }
    
    console.log('Using credentials:', credentials);
    
    // Populate form with demo credentials
    setFormData(credentials);
    
    // Create synthetic submit event
    const syntheticEvent = {
      preventDefault: () => console.log('Preventing default for synthetic event')
    };
    
    // Auto-submit after a short delay
    setTimeout(() => {
      console.log('Auto-submitting demo login');
      try {
        // Use handleSubmit for consistency and to trigger form validation
        setFormData(credentials); // Ensure form data is set
        handleSubmit(syntheticEvent);
        console.log('Demo login dispatched through handleSubmit');
      } catch (error) {
        console.error('Demo login error:', error);
        // Fallback method if handleSubmit fails
        try {
          dispatch(login(credentials));
          console.log('Demo login dispatched directly');
        } catch (innerError) {
          console.error('Fallback demo login error:', innerError);
        }
      }
    }, 300);
  };

  return (
    <div className="relative w-full h-screen bg-zinc-900/100">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay pointer-events-none"
        src={loginHero}
        alt="login"
      />

      <div className="flex h-full justify-center items-center relative z-10">
        <div className="max-w-md w-full mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-600 p-3 rounded-full">
              <FaLock className="text-white text-2xl" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Digital Building Analytics
          </h2>
          
          <p className="text-center text-gray-600 mb-8">
            Secure access to building management and energy data
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
                Username
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <FaUser />
                </div>
                <input 
                  className={`w-full px-10 py-3 border ${formSubmitted && !username ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={onChange}
                />
              </div>
              {formSubmitted && !username && (
                <p className="text-red-500 text-xs mt-1">Username is required</p>
              )}
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <FaLock />
                </div>
                <input
                  className={`w-full px-10 py-3 border ${formSubmitted && !password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={onChange}
                />
                <button 
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {formSubmitted && !password && (
                <p className="text-red-500 text-xs mt-1">Password is required</p>
              )}
            </div>
            
            <button 
              className={`w-full py-3 rounded-lg text-white font-medium transition-colors relative z-20 ${isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
              type="submit"
              disabled={isLoading}
              onClick={(e) => {
                console.log('Sign In button clicked');
                if (!handleSubmit.called) {
                  handleSubmit(e);
                }
              }}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          
          {isGitHubPages && (
            <div className="mt-8 border-t pt-6">
              <p className="text-center text-sm text-gray-600 mb-4">Demo Accounts</p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDemoLogin('admin');
                  }}
                  type="button" 
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 relative z-20"
                >
                  Admin Demo
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDemoLogin('engineer');
                  }}
                  type="button"
                  className="px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 relative z-20"
                >
                  Engineer Demo
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDemoLogin('energy');
                  }}
                  type="button"
                  className="px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 relative z-20"
                >
                  Energy Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
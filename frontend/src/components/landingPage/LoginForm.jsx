import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../features/auth/authSlice';
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

  // Manually trigger form submission
  const manualSubmit = () => {
    // Validate form
    if (!username || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    const userData = {
      username,
      password,
    };

    dispatch(login(userData));
  };
  
  const handleDemoLogin = (role) => {
    // Demo credentials with usernames only - passwords removed for security
    let credentials = { username: 'demo', password: '' };
    
    if (role === 'admin') {
      credentials = { username: 'admin', password: '' };
    } else if (role === 'energy') {
      credentials = { username: 'energy', password: '' };
    }
    
    // Inform user to enter their password
    toast.info(`Please enter your password for ${role} login`);
    
    // Set form data only - don't dispatch login since we need password
    setFormData(credentials);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 mb-4">
            <FaLock className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Digital Building Analytics</h2>
          <p className="mt-2 text-gray-600">Secure access to building management</p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={onChange}
                required
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={onChange}
                required
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={manualSubmit}
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </div>

        {isGitHubPages && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm font-medium text-gray-700 mb-4">Demo Accounts</p>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleDemoLogin('admin')}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Admin
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('engineer')}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
              >
                Engineer
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('energy')}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none"
              >
                Energy
              </button>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500 space-y-1">
              <p><strong>Admin:</strong> admin</p>
              <p><strong>Engineer:</strong> demo</p>
              <p><strong>Energy:</strong> energy</p>
              <p className="mt-2 italic">Contact administrator for passwords</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
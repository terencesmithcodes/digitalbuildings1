import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';
import { FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const LogoutButton = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <button
      onClick={handleLogout}
      className={`flex items-center space-x-2 text-white bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-md ${className || ''}`}
      aria-label="Logout"
    >
      <FaSignOutAlt />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
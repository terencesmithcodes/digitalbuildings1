import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';

// Protected route component for authenticated routes
const ProtectedRoute = ({ allowedRoles = null }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // If no user is logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If specific roles are required and user doesn't have the required role
  if (allowedRoles && !allowedRoles.includes(user.role) && 
      // For GitHub Pages mock demo, allow admin to see all pages
      !(window.location.hostname.includes('github.io') && user.isAdmin)) {
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
    return null;
  }

  // If authenticated and authorized, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
import React from 'react';
import { useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateOutlet = () => {
  const { user } = useAuth();
  const location=useLocation()
  return (
    user.email
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace/>
  );
};

export default PrivateOutlet;
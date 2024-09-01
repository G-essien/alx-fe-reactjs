// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

// Simulated authentication check
const isAuthenticated = false; // Set to true to allow access

const ProtectedRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;

import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Ensure you have this hook implemented

const ProtectedRoute = () => {
  const isAuthenticated = useAuth(); // Use the custom hook to check auth status

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Render the child routes if authenticated
};

export default ProtectedRoute;

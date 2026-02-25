import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useSelector(
    state => state.auth
  );

  // ✅ Show spinner while auth is loading
  if (loading) {
    return <Spinner />;
  }

  // ❌ Not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Authenticated
  return <Outlet />;
};

export default PrivateRoute;

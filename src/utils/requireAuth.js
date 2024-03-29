import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import { LOGIN } from '../Routes/routes';

function RequireAuth() {
  const authContext = useContext(AuthContext);
  let location = useLocation();

  const { isAuthenticated, loading } = authContext;

  if (!isAuthenticated && !loading) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={LOGIN} state={{ from: location }} />;
  }

  return <Outlet />;
}

export default RequireAuth;

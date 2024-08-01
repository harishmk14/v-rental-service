import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './Slice/loginSlice';
import { CircleUserRound } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    if (!user) {
      // Ensure UI updates when user logs out
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success('Logout successful!');
  };

  return (
    <>
      <ToastContainer />
      <div className="navbar">
        <div className="logo">V-RENTAL</div>
        <nav>
          <ul>
            <li>
              <span
                className={path === '/' ? 'active' : ''}
                onClick={() => navigate('/')}
              >
                Home
              </span>
            </li>
            <li>
              <span
                className={path === '/vehicles' ? 'active' : ''}
                onClick={() => navigate('/vehicles')}
              >
                Vehicles
              </span>
            </li>
            <li>
              <span
                className={path === '/booking' ? 'active' : ''}
                onClick={() => navigate('/booking')}
              >
                Booking
              </span>
            </li>
            <li>
              <span
                className={path === '/journey' ? 'active' : ''}
                onClick={() => navigate('/journey')}
              >
                Your Journey
              </span>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          {user ? (
            <div className="profile-dropdown">
              <CircleUserRound style={{ color: "white" }} />
              <div className="dropdown-content">
                <span onClick={() => navigate('/profile')}>Profile</span>
                <span onClick={handleLogout}>Logout</span>
              </div>
            </div>
          ) : (
            <>
              <button className="signin-btn" onClick={() => navigate('/signin')}>
                Sign In
              </button>
              <button className="signup-btn" onClick={() => navigate('/signup')}>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;

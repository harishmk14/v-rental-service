import React, { useState, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './Slice/loginSlice';
import { CircleUserRound } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthModal from './Authmodal'; // Import the AuthModal component

const Layout = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [menuOpen, setMenuOpen] = useState(false); // State to manage hamburger menu visibility
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the logout action
    toast.success('Logout successful!');
    navigate('/'); // Navigate to home page on logout
  };

  const handleNavigation = useCallback((path) => {
    if (user) {
      navigate(path);
    } else {
      if (path === '/booking' || path === '/journey') {
        setShowModal(true); // Show the modal for specific pages if the user is not logged in
      } else {
        navigate(path); // Navigate to other paths directly
      }
    }
  }, [navigate, user]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the hamburger menu visibility
  };

  return (
    <>
      <ToastContainer />
      <div className={`navbar ${menuOpen ? 'active' : ''}`}>
        <div className="logo">V-RENTAL</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav style={{display:"contents"}}>
          <ul>
            <li>
              <span
                className={path === '/' ? 'active' : ''}
                onClick={() => handleNavigation('/')}
              >
                Home
              </span>
            </li>
            <li>
              <span
                className={path === '/vehicles' ? 'active' : ''}
                onClick={() => handleNavigation('/vehicles')}
              >
                Vehicles
              </span>
            </li>
            <li>
              <span
                className={path === '/booking' ? 'active' : ''}
                onClick={() => handleNavigation('/booking')}
              >
                Booking
              </span>
            </li>
            <li>
              <span
                className={path === '/journey' ? 'active' : ''}
                onClick={() => handleNavigation('/journey')}
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
                <span onClick={() => navigate('/userprofile')}>Profile</span>
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
      {showModal && <AuthModal onClose={handleCloseModal} />}
    </>
  );
};

export default Layout;

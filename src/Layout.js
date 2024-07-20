import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
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
          <button className="signin-btn" onClick={() => navigate('/signin')}>
            Sign In
          </button>
          <button className="signup-btn" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;

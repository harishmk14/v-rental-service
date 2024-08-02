import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './Slice/loginSlice';
import { LogOut } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
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
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <>
      <ToastContainer />
      <div className="navbar">
        <div className="logo">V-RENTAL</div>
        <nav style={{ marginLeft: "23rem" }}>
          <ul>
            <li>
              <span
                className={path === '/admin' ? 'active' : ''}
                onClick={() => navigate('/admin')}
              >
                Profile
              </span>
            </li>
            <li>
              <span
                className={path === '/admin/managevehicle' ? 'active' : ''}
                onClick={() => navigate('/admin/managevehicle')}
              >
                Add Vehicle
              </span>
            </li>
            <li>
              <span
                className={path === '/admin/vehiclestatus' ? 'active' : ''}
                onClick={() => navigate('/admin/vehiclestatus')}
              >
                Vehicle Status
              </span>
            </li>
            <li>
              <span
                className={path === '/admin/customers' ? 'active' : ''}
                onClick={() => navigate('/admin/customers')}
              >
                Customer
              </span>
            </li>
          </ul>
        </nav>
        <LogOut
          style={{ cursor: "pointer", margin: "0px 0px 0px 400px" }}
          color='white'
          size={25}
          onClick={handleLogout}
        />
      </div>
      <Outlet />
    </>
  );
};

export default Admin;

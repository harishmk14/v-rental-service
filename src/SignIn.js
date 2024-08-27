import React, { useState, useEffect } from 'react';
import './styles.css';
import img1 from '../src/img/img1.png';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './Slice/loginSlice';
import { adminLogin } from './Slice/adminSlice'; // Import adminLogin action
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserCog } from 'lucide-react';
import AdminModal from './AdminModal';

function SignIn() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.login);
  const { admin, error: adminError } = useSelector((state) => state.admin);

  useEffect(() => {
    if (user) {
      toast.success('Login successful!', {
        onClose: () => navigate('/'),
      });
    }
    if (error) {
      toast.error(error === 'Invalid credentials' ? 'Invalid credentials' : `Error: ${error}`);
    }
  }, [user, error, navigate]);

  useEffect(() => {
    if (admin) {
      toast.success('Admin login successful!', {
        onClose: () => setIsAdminModalOpen(false),
      });
    }
    if (adminError) {
      toast.error(adminError === 'Invalid admin credentials' ? 'Invalid admin credentials' : `Error: ${adminError}`);
    }
  }, [admin, adminError]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!mobile || !password) {
      toast.error('Please fill in all fields.');
    } else {
      dispatch(loginUser({ mobile, password }));
    }
  };

  const handleAdminLogin = ({ adminId, adminPassword }) => {
    // Dispatch the login action
    dispatch(adminLogin({ adminId, adminPassword }));
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <UserCog size={30} className='abc7' onClick={() => setIsAdminModalOpen(true)} />
      </div>
      <AdminModal isOpen={isAdminModalOpen} onClose={() => setIsAdminModalOpen(false)} onLogin={handleAdminLogin} />
      <ToastContainer />
      <div className="login-img-container">
        <img src={img1} alt="Logo" className="login-logo" />
      </div>
      <div className="login-box">
        <h1>LOGIN TO V-RENTAL</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Mobile</label>
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="horizontal-group">
            <div className="input-group remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Remember Me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
          {loading && <p>Loading...</p>}
          <div className="horizontal-group buttons-group">
            <button type="submit" className="login-button">Login</button>
            <button type="button" className="create-account-button" onClick={handleSignUp}>Create Account</button>
          </div>
        </form>
        <div className="or-divider">or</div>
        <div className="social-login">
          <FaGoogle className="social-icon" />
          <FaFacebookF className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;

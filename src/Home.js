// src/Home.js
import { useNavigate } from 'react-router-dom';
import './styles.css';
import car from './img/car.png';

function Home() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };


  return (
    <div className="home">
      <header className="navbar">
        <div className="logo">V-RENTAL</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/vehicles">Vehicles</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="#payment">Payment</a></li>
            <li><a href="#journy">Your Journy</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="signin-btn" onClick={handleSignIn}>Sign In</button>
          <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
        </div>
      </header>
      <main className="main-content">
        <div className="content">
          <h1>Quick and simple vehicle rental service.</h1>
          <p>
            V-Rental is the leading bike, car, van, and bus rental service in Pondicherry, based on ratings and reviews from real users. Renowned for its reliability and top-notch service, V-Rental is the top-ranked rental company. If you're planning to rent a vehicle, you can trust V-Rental for a seamless and satisfying experience.
          </p>
        </div>
        <div className="image-container">
          <img src={car} alt="Car" />
        </div>
      </main>
    </div>
  );
}

export default Home;

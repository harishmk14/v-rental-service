import './styles.css';
import car from './img/car.png';
import { Link } from 'react-router-dom';
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Home() {
  return (
    <div className="home">
      <div className="main-content">
        <div className="content">
          <h1>Quick and simple vehicle rental service.</h1>
          <p>
            V-Rental is the leading bike, car, van, and bus rental service in Pondicherry, based on ratings and reviews from real users. Renowned for its reliability and top-notch service, V-Rental is the top-ranked rental company. If you're planning to rent a vehicle, you can trust V-Rental for a seamless and satisfying experience.
          </p>
        </div>
        <div className="image-container">
          <img src={car} alt="Car" />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-section">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/media">Media Coverage</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/refunds">Refunds</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>SERVICES</h2>
          <ul>
            <li><Link to="/local-vehicle-rental">Local Vehicle Rental</Link></li>
            <li><Link to="/outstation-vehicle-rental">Outstation Vehicle Rental</Link></li>
            <li><Link to="/corporate-vehicle-rental">Corporate Vehicle Rental</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
            <li><Link to="/xml-sitemap">XML Sitemap</Link></li>
          </ul>
          <div className="homeicon">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-copy">
          <p>© Copyright V-Rental.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

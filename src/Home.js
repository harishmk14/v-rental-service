// src/Home.js
import './styles.css';
import car from './img/car.png';

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
    </div>
  );
}

export default Home;

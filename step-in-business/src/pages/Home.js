import React from 'react';
import './Home.css';
import restaurantImage from './images/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
export const Home = () => {
  return (
    <div className="Home-right-container">
      <h1 className="Click-an-industry"> Click an industry!</h1>
        
    <div className="Restaurant-card">
        <h4 className="Restaurant-title">Restaurant</h4>
          <img className="Restaurant-Image"
            src={restaurantImage}
            alt="Restaurant"
          />      
        </div>
    </div>
  );
}
export default Home;
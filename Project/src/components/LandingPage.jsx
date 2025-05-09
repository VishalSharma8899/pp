import React from 'react';
import './LandingPage.css';
import image  from '../assets/image.png'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome!</h1>
        <h2>Manage your <span className="highlight">Deals</span></h2>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="image">
        <img src={image} alt="Illustration" />
      </div>
    </div>
  );
}

export default LandingPage;

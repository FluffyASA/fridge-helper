import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PantryCard.css';

const PantryCard = () => {
  const navigate = useNavigate();

  const handleFindNow = () => {
    navigate('/second-page');
  };

  return (
    <div className="pantry-card">
      <div className="pantry-card-left">
        <h2>Let Me Cook, Walmart!</h2>
        <p>Find missing ingredients right now.</p>
        <button onClick={handleFindNow}>Find now</button>
      </div>

     <div className="pantry-card-right">
        <div className="image-row">
          <img
            src="https://www.bhg.com/thmb/nzk5EucPZBWBCTVSXJdXLd18tkQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/food-pantry-shelves-8e01c831-2b2be0d3eade4b9e9ec3c7e7deb27027.jpg"
            alt="Pantry"
            className="main-image"
          />
          <img
            src="https://www.thespruce.com/thmb/zgTSP9ZCvVRPZXhnH8UxeZH7zBE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/273115531_154120213637951_8782114204119205462_n-9b8064d700cb4c26b48720526ee174aa.jpg"
            alt="Pantry small"
            className="side-image"
          />
        </div>
     </div>

    </div>
  );
};

export default PantryCard;

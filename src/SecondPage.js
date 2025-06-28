import React from 'react';
import Navbar from './Navbar';
import './SecondPage.css';

const SecondPage = () => {
  return (
    <div className="second-page">
      <Navbar />
      <div className="main-content">
        <div className="center-card">
          <h2>Second Page</h2>
          <p>2nd page.</p>
          <p>work on it gois.</p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage; 
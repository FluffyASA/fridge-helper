import React from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const WalmartSpark = () => (
  <svg className="walmart-spark" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="transparent" />
    <g fill="#FFD600">
      <circle cx="20" cy="8" r="2" />
      <circle cx="20" cy="32" r="2" />
      <circle cx="8" cy="20" r="2" />
      <circle cx="32" cy="20" r="2" />
      <circle cx="11.8" cy="11.8" r="2" />
      <circle cx="28.2" cy="28.2" r="2" />
      <circle cx="11.8" cy="28.2" r="2" />
      <circle cx="28.2" cy="11.8" r="2" />
    </g>
  </svg>
);

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <WalmartSpark />
      </div>

      <div className="navbar-center">
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Search everything at Walmart and in store"
            className="search-input"
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <div className="account-section">
          <FaUser className="user-icon" />
          <div className="account-text">
            <span className="sign-in">Sign In</span>
            <span className="account-bold">Account</span>
          </div>
        </div>
        <div className="cart">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-badge">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

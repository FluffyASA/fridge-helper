import React from 'react';
import './SubNavbar.css';

const menuItems = [
  'Get it fast',
  'New Arrivals',
  'Pharmacy Delivery',
  'Dinner Solutions',
  'Grocery',
  'Trending',
  'Back To School',
  'My Items',
  'Auto Service',
  'Only At Walmart+',
];

const SubNavbar = () => (
  <div className="subnavbar">
    {menuItems.map((item, idx) => (
      <span className="subnavbar-item" key={idx}>{item}</span>
    ))}
  </div>
);

export default SubNavbar;

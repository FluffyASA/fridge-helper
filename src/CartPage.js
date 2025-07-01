import React from 'react';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import './CartPage.css';

function CartItem({ name, price, image }) {
  return (
    
    <div className="cart-item">
        
      <img src={image} alt="product" className="cart-img" />
      <div className="cart-info">
        <p className="cart-title">{name}</p>
        <p className="cart-price">${price.toFixed(2)}</p>
        <div className="cart-actions">
          <label>
            Qty
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <div className="cart-links">
            <a href="#">Save for later</a> | <a href="#">Remove</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  const items = [
    {
      name: 'Tillamook Whole Extra Sharp Cheddar Cheese Block, 2 lb (Aged 15 Months)',
      price: 13,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Tillamook Medium Cheddar Cheese Block, 2 lb',
      price: 13,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <>
      <Navbar />
      <SubNavbar />
      <div className="cart-wrapper">
        <h2>Cart ({items.length} items)</h2>
        <div className="cart-list">
          {items.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        <div className="cart-buttons">
          <button className="btn-secondary">Add more items</button>
          <button className="btn-primary">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
}
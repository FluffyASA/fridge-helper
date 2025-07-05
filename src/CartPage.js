import React from 'react';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import './CartPage.css';

function CartItem({ item, removeFromCart, updateQuantity }) {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt="product" className="cart-img" />
      <div className="cart-info">
        <p className="cart-title">{item.name}</p>
        <p className="cart-price">${(item.price * item.quantity).toFixed(2)}</p>
        <div className="cart-actions">
          <label>
            Qty
            <select value={item.quantity} onChange={handleQuantityChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <div className="cart-links">
            <a href="#">Save for later</a> | <a href="#" onClick={handleRemove}>Remove</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CartPage({ cartItems, removeFromCart, updateQuantity }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <Navbar cartCount={totalItems} />
      <SubNavbar />
      <div className="cart-wrapper">
        <h2>Cart ({totalItems} items)</h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <p>Add some items from the ingredients page!</p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
            <div className="cart-summary">
              <div className="total">
                <strong>Total: ${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <div className="cart-buttons">
              <button className="btn-secondary">Add more items</button>
              <button className="btn-primary">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
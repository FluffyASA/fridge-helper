import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import PantryCard from './PantryCard';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import CartPage from './CartPage';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === product.id
      );
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar cartCount={cartItems.length} />
              <SubNavbar />
              <div className="main-content">
                <div className='center-card'>
                  <PantryCard />
                </div>
              </div>
            </>
          } />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/third" element={
            <ThirdPage 
              addToCart={addToCart}
              cartCount={cartItems.length}
            />
          } />
          <Route path="/cart" element={
            <CartPage 
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

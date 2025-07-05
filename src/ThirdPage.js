import React from 'react';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import { ingredientBrands } from './data/ingredientBrands';
import './ThirdPage.css';
import { useLocation } from 'react-router-dom';

function ThirdPage({ addToCart, cartCount }) {
  
const location = useLocation();
const missingIngredients = location.state?.missingIngredients || [];
const selectedDish = location.state?.selectedDish || '';

  const handleAddToCart = (product, ingredient) => {
    // Create a unique ID for the product
    const productId = `${ingredient}-${product.brand}`;
    
    // Convert price string to number (remove $ and convert to float)
    const price = parseFloat(product.price.replace('$', ''));
    
    const productData = {
      id: productId,
      name: product.title,
      price: price,
      image: product.image,
      brand: product.brand,
      rating: product.rating
    };
    
    addToCart(productData);
  };

  return (
    <div className="third-page">
      <Navbar cartCount={cartCount} />
      <SubNavbar />
       <div className="main-content">
        <h2>
          Missing ingredients for{' '}
          <span className="highlight">{selectedDish}</span>
        </h2>
        <div className="ingredients-scroll">
          {missingIngredients.map((ingredient) => (
            <div className="ingredient-row-card" key={ingredient}>
              <a
                className="find-more-btn"
                href={ingredientBrands[ingredient].findMoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Find More
              </a>
              <div className="product-row">
                {ingredientBrands[ingredient].products.map((brand, idx) => (
                  <div className="product-card" key={idx}>
                    <img src={brand.image} alt={brand.brand} className="product-img" />
                    <button
                      className="add-btn"
                      onClick={() => handleAddToCart(brand, ingredient)}
                    >
                      + Add
                    </button>
                    <div className="product-price">{brand.price}</div>
                    <div className="product-title">{brand.title}</div>
                    <div className="product-rating">{brand.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;

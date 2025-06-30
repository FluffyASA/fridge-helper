import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import './SecondPage.css';

function SecondPage() {
  const [dish, setDish] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  /*const handleSubmit = () => {
    if (dish && image) {
      navigate('/third');
    } else {
      alert('Please select a dish and upload a fridge image.');
    }
  };*/

  //const navigate = useNavigate();

const handleSubmit = async () => {
  if (dish && image) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('dish', dish);

    try {
      const response = await fetch('http://localhost:3000/detect', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      // Pass missing ingredients to ThirdPage using navigate state
      navigate('/third', { state: { missingIngredients: data.missing, selectedDish: dish } });

    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    alert('Please select a dish and upload a fridge image.');
  }
};

  return (
    <div className="second-page">
      <Navbar />
      <SubNavbar />
      <div className="main-content">
        <div className="card-container">
          {/* Dish selection card */}
          <div className="card dish-card">
            <div className="card-content">
              <div>
                <h2>What are you cooking today?</h2>
                <select
                  className="dropdown"
                  value={dish}
                  onChange={(e) => setDish(e.target.value)}
                >
                  <option value="">Select a dish</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Omelette">Omelette</option>
                  <option value="Avocado Toast">Avocado Toast</option>
                  <option value="PBJ sandwich">PBJ sandwich</option>
                  <option value="Tomato soup">Tomato soup</option>
                  <option value="Fruit Salad">Fruit Salad</option>

                </select>
              </div>
              <div className="icon-container">
                {/* Pot SVG icon */}
                <img src="/pot.png" alt="Pot" className="icon-img" />
              </div>
            </div>
          </div>

          {/* Image upload card */}
          <div className="card upload-card">
            <div className="card-content">
              <div>
                <h2>Upload a picture of your fridge</h2>
                <label htmlFor="file-upload" className="upload-label">
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    className="file-upload"
                    style={{ display: 'none' }}
                  />
                  <span className="upload-btn">Upload Image</span>
                </label>
                {image && <img src={image} alt="Preview" className="preview-img" />}
              </div>
              <div className="icon-container">
                {/* Camera SVG icon */}
                <img src="/camera.png" alt="Camera" className="icon-img" />
              </div>
            </div>
          </div>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Find now
        </button>
      </div>
    </div>
  );
}

export default SecondPage; 
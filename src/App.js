import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import PantryCard from './PantryCard';
import SecondPage from './SecondPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <SubNavbar />
              <div className="main-content">
                <div className='center-card'>
                  <PantryCard />
                </div>
              </div>
            </>
          } />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Slider from "./components/Layouts/Slider";
import './styling.css'; // Assuming you have a separate CSS file for specific styles
import './components/Styles/style.css';
import './components/Styles/style_cities.css';
import './components/Styles/style_destination.css';
import './components/Styles/style_form.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./AboutUs";

const App = () => {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
      <Slider />
      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <input type="text" placeholder="Location" className="search-input" />
          <input type="date" placeholder="Check-in" className="search-input" />
          <input type="date" placeholder="Check-out" className="search-input" />
          <input type="number" placeholder="Guests" className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </section>

      {/* Destination Highlights */}
      <section className="highlights">
        <h2>A Signature of Excellence</h2>
        <div className="highlight-cards">
          <div className="card">
            <img src="/site images/new york.jpg" alt="New York" className="card-image" />
            <h3>New York</h3>
            <p>Experience the charm of the city of love.</p>
          </div>
          <div className="card">
            <img src="/site images/maldives.jpg"alt="Maldives" className="card-image" />
            <h3>Maldives</h3>
            <p>Relax in paradise with clear waters and white sands.</p>
          </div>
          <div className="card">
            <img src="/site images/norway.jpg"alt="Norway" className="card-image" />
            <h3>Norway</h3>
            <p>Venture into the Arctic wilds for an off-the-beaten-path journey.</p>
          </div>
          <div className="card">
            <img src="/site images/greece.jpg" alt="Greece" className="card-image" />
            <h3>Greece</h3>
            <p>Santorini is the supermodel of the Greek islands.</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Find New Possibilities</h2>
        <div className="category-cards">
          <div className="category-card">Adventure</div>
          <div className="category-card">Unique Destinations</div>
          <div className="category-card">Entire Home</div>
          <div className="category-card">Pet Allowed</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;

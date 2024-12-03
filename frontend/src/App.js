import React from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Slider from "./components/Layouts/Slider";
import './styling.css'; // Assuming you have a separate CSS file for specific styles
import './components/Styles/style.css';
import './components/Styles/style_cities.css';
import './components/Styles/style_destination.css';
import './components/Styles/style_form.css';

const App = () => {
  return (
    <div>
      <Header />
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

      {/* Featured Image Carousel Section */}
      <section className="featured-section">
        <div className="carousel">
          <div className="carousel-images">
            <img src="C:\Users\Siddhant\OneDrive\Desktop\homework\gdemo\Final Project\travel_agency_react\frontend\site images\new york.jpg" alt="New York" />
            <img src="C:\Users\Siddhant\OneDrive\Desktop\homework\gdemo\Final Project\travel_agency_react\frontend\site images\norway.jpg" alt="Norway" />
            <img src="C:\Users\Siddhant\OneDrive\Desktop\homework\gdemo\Final Project\travel_agency_react\frontend\site images\maldives.jpg" alt="Maldives" />
            <img src="C:\Users\Siddhant\OneDrive\Desktop\homework\gdemo\Final Project\travel_agency_react\frontend\site images\greece.jpg" alt="Greece" />
          </div>
          <button className="carousel-button prev">&#10094;</button>
          <button className="carousel-button next">&#10095;</button>
        </div>
      </section>

      {/* Destination Highlights */}
      <section className="highlights">
        <h2>A Signature of Excellence</h2>
        <div className="highlight-cards">
          <div className="card">
            <img src="C:\Users\Siddhant\OneDrive\Desktop\homework\gdemo\Final Project\travel_agency_react\frontend\site images\new york.jpg" alt="New York" className="card-image" />
            <h3>New York</h3>
            <p>Experience the charm of the city of love.</p>
          </div>
          <div className="card">
            <img src="C:\Users\Siddhant\OneDrive\Desktop\homework\gdemo\Final Project\travel_agency_react\frontend\site images\maldives.jpg"alt="Maldives" className="card-image" />
            <h3>Maldives</h3>
            <p>Relax in paradise with clear waters and white sands.</p>
          </div>
          <div className="card">
            <img src="C:\Users\Siddhant\OneDrive\Desktop\homework\gdemo\Final Project\travel_agency_react\frontend\site images\norway.jpg"alt="Norway" className="card-image" />
            <h3>Norway</h3>
            <p>Venture into the Arctic wilds for an off-the-beaten-path journey.</p>
          </div>
          <div className="card">
            <img src="C:\Users\Siddhant\OneDrive\Desktop\homework\gdemo\Final Project\travel_agency_react\frontend\site images\greece.jpg" alt="Greece" className="card-image" />
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

import React from 'react';

import './styling.css'; // Assuming you have a separate CSS file for specific styles

const App = () => {
  return (
    <div>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex flex-1">
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="landing.html" className="-m-1.5 p-1.5">
                <span className="sr-only">Travello</span>
                <img
                  className="h-20 w-auto"
                  src="C:\Users\Siddhant\OneDrive\Desktop\homework\gdemo\Final Project\travel_agency_react\frontend\logo\travello-logo-zip-file\png\logo-no-background.png"
                  alt="Travello"
                />
              </a>
              <a href="landing.html" className="text-sm font-semibold text-gray-900 active">Home</a>
              <a href="places.html" className="text-sm font-semibold text-gray-900">Places to stay</a>
              <a href="experience.html" className="text-sm font-semibold text-gray-900">Experiences</a>
              <a href="discover.html" className="text-sm font-semibold text-gray-900">Discover</a>
              <a href="student-offer.html" className="text-sm font-semibold text-gray-900">Student Offers</a>
              <a href="seasonal-offers.html" className="text-sm font-semibold text-gray-900">Seasonal Offers</a>
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ml-6">
            <span className="text-sm font-semibold text-gray-900">USD</span>
          </div>
          <div className="flex justify-end">
            <a href="login.html" className="text-sm font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

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

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Support</h3>
            <p>Help Center</p>
            <p>Contact Us</p>
          </div>
          <div className="footer-section">
            <h3>Community</h3>
            <p>Events</p>
            <p>Forums</p>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <p>Company Info</p>
            <p>Privacy</p>
          </div>
          <div className="newsletter">
            <h3>Subscribe to our newsletter</h3>
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

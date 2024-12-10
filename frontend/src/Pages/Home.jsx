import React from "react";
import Slider from "../components/Layouts/Slider"; // Assuming you have a separate CSS file for specific styles
import '../components/Styles/style.css';
import destinations from '../components/Functions/destinationData';
import DestinationsList from "../components/Functions/DestinationList";
const Home = () => {
  
  
  return (
    <div>
      <Slider />
     

      {/* Most Popular Destinations Section */}
      <section className="popular-destinations">
        <h2>Most Popular Destinations</h2>
        <div className="highlight-cards">
        <DestinationsList destinations={destinations} />
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p className="testimonial-text">"Our trip to New York was amazing! The team at Contour Travel helped us plan the perfect itinerary, and everything went smoothly."</p>
            <p className="testimonial-author">- Sarah J.</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The Maldives was a dream! The best vacation I've ever had, thanks to the fantastic recommendations from the team."</p>
            <p className="testimonial-author">- Mark D.</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"Norway’s northern lights tour was unforgettable! I would highly recommend this agency to anyone looking for an adventure."</p>
            <p className="testimonial-author">- Emily T.</p>
          </div>
        </div>
      </section>

      {/* Travel Gallery Section */}
      <section className="travel-gallery">
        <h2>Travel Gallery</h2>
        <div className="gallery-images">
          <img src="/site images/national park.jpg" alt="New York" className="gallery-image" />
          <img src="/site images/resort.jpg" alt="Maldives" className="gallery-image" />
          <img src="/site images/historic city.jpg" alt="Norway" className="gallery-image" />
          <img src="/site images/greece.jpg" alt="Greece" className="gallery-image" />
          <img src="/site images/hiking.jpg" alt="Hiking" className="gallery-image" />
        </div>
      </section>
    </div>
  );
};

export default Home;

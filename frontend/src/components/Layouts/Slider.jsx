import React, { useState, useEffect } from 'react';
import '../Styles/style.css';// Assuming the styles are in Slider.css

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/site images/Slider1.jpg', alt: 'Banner 1' },
    { src: '/site images/Slider2.jpg', alt: 'Banner 2' },
    { src: '/site images/Slider3.jpg', alt: 'Banner 3' }
  ];

  const totalSlides = slides.length;

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  // Set interval for auto slide change
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Show the current slide
  const showSlide = (index) => {
    return index === currentSlide ? 'block' : 'none';
  };

  return (
    <section className="banner slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ display: showSlide(index) }}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="slider-button next" onClick={nextSlide}>
        &#10095;
      </div>
      <div className="banner-overlay fade-in">
        <div>
          <h1>Explore the World with Us</h1>
          <p>Book your next adventure at unbeatable prices</p>
          <a href="Destination.html">Start Your Journey</a>
        </div>
      </div>
    </section>
  );
};

export default Slider;

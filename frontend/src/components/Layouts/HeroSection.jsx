import React from 'react';
import '../Styles/style.css';

function HeroSection({ imageUrl, title }) {
  return (
    <section className="hero-section">
      <img 
        src={imageUrl} 
        alt="Hero Section"  
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </section>
  );
}

export default HeroSection;

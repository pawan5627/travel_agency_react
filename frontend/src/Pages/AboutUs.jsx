import React from 'react';
import HeroSection from "../components/Layouts/HeroSection";
import '../components/Styles/style.css';


function AboutUs() {
  return (
    <div className="bg-gray-50">
        <HeroSection 
        imageUrl="/site images/about-us.jpg"  // Pass the image URL
        title="About Contour Travel Agency"  // Pass the title
      />
      {/* About Us Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="text-lg text-gray-700 content-center ml-6">
            <h2 className="text-4xl font-bold">At Contour Travel Agency,</h2>
            <br />
            <p className="mb-4">we specialize in creating unforgettable travel experiences. From cultural explorations to relaxing getaways, our mission is to help you discover the world. With years of experience in the travel industry, we’ve built a reputation for providing personalized, high-quality travel services that cater to your specific needs.</p>
            <p className="mb-4">Whether you are traveling solo, with family, or as part of a group, we provide you with the best itineraries, exclusive offers, and expert guidance to ensure that your journey is nothing short of extraordinary.</p>
            <p className="mb-4">Our team of passionate travel experts are committed to bringing your travel dreams to life, curating every detail of your trip to ensure maximum enjoyment and peace of mind.</p>
          </div>

          <div className="flex justify-center items-center">
            <img src="/site images/group-photo.jpg" alt="About Contour Travel Agency" className="rounded-lg shadow-lg w-full md:w-3/4" />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-blue-600">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">🌍</div>
              <h3 className="font-semibold text-xl mb-2">Global Exploration</h3>
              <p className="text-gray-600">We believe travel is one of the best ways to experience different cultures, people, and landscapes.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">✨</div>
              <h3 className="font-semibold text-xl mb-2">Personalized Service</h3>
              <p className="text-gray-600">We tailor every trip to meet your specific needs and preferences to create a perfect travel experience.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-4">🤝</div>
              <h3 className="font-semibold text-xl mb-2">Trust and Integrity</h3>
              <p className="text-gray-600">We prioritize building trust with our clients and provide transparent and honest services at all times.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

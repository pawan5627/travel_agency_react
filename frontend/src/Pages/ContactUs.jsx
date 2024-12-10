import React, { useState } from 'react';
import '../components/Styles/fontawesome/css/all.min.css';
import '../components/Styles/style.css';
import HeroSection from '../components/Layouts/HeroSection';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ success: false, error: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus({ success: true, error: false });
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setFormStatus({ success: false, error: true });
    }
  };

  return (
    <div className="bg-gray-50">
              <HeroSection 
        imageUrl="/site images/contact-us.jpg"  // Pass the image URL
        title="Contact Us"  // Pass the title
      />

      {/* Contact Us Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full border-2 border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>

            {/* Success/Error Message */}
            {formStatus.success && (
              <p className="text-green-600 text-center mt-4">Your message has been sent successfully!</p>
            )}
            {formStatus.error && (
              <p className="text-red-600 text-center mt-4">Please fill out all fields correctly.</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Location</h2>
            <p className="text-lg text-gray-700 mb-6">
              You can also reach us by visiting our office or sending us a mail.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-blue-600">Address:</h3>
              <p className="text-gray-700">800 Arlington Blvd, Arlington, VA 22201</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-blue-600">Phone:</h3>
              <p className="text-gray-700">+1 234 567 890</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-blue-600">Email:</h3>
              <p className="text-gray-700">info@travello.com</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-blue-600">Social Media:</h3>
              <div className="space-x-4 flex">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

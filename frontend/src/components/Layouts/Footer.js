// Footer.js
import React from "react";
import '../Styles/style.css';

import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <>
      <footer className="secondary-footer">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <img src="/site images/Logo.png" alt="Logo" className="footer-logo" />
            <div className="footer-menu">
              <ul>
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                <li><Link to="/destination" className="hover:text-gray-300">Destinations</Link></li>
                <li><Link to="/aboutus" className="hover:text-gray-300">About Us</Link></li>
                <li><Link to="/contactus" className="hover:text-gray-300">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-menu">
              <ul>
                <li><a href="Cities.html?destination=Lahore">Lahore</a></li>
                <li><a href="Cities.html?destination=Islamabad">Islamabad</a></li>
                <li><a href="Cities.html?destination=Gilgit">Gilgit</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <p>Contact Us: <strong>info@travelagency.com</strong></p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="newsletter">
            <h3>Subscribe to our newsletter</h3>
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
          </div>
        </div>
      </footer>

      <footer className="footer text-center text-white py-6">
        <p>&copy; Contour Travel Agency 2024</p>
        <p>Follow Us:
          <a href="#" className="hover:text-blue-400 text-xl p-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400 text-xl p-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-400 text-xl p-2">
            <i className="fab fa-twitter"></i>
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;

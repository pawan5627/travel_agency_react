// Footer.js
import React from "react";
import '../Styles/style.css';
import '../Styles/style_cities.css';
import '../Styles/style_destination.css';
import '../Styles/style_form.css';
const Footer = () => {
  return (
    <>
      <footer className="secondary-footer">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <img src="/Logo.png" alt="Logo" className="footer-logo" />
            <div className="footer-menu">
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="Destination.html">Destination</a></li>
                <li><a href="AboutUs.html">About Us</a></li>
                <li><a href="Contact-Us.html">Contact Us</a></li>
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
          <a href="#" className="hover:text-blue-400 text-xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-400 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;

// Header.js
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll for sticky navbar
  const handleScroll = () => {
    const navbar = document.querySelector('.sticky-navbar');
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Listen for scroll events
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky-navbar bg-gray-800 text-white py-4 px-8 shadow-lg">
      <div className="flex justify-between items-center">
        <img src="assets/Logo.png" alt="Logo" className="w-auto h-20 cursor-pointer" id="logo" />
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" id="search-input" placeholder="Search destination..." className="focus:outline-none" />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 16h6M10 12h6M10 8h6M3 20h18"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navbar */}
        <ul className="flex space-x-4 hidden md:flex">
          <li><a href="index.html" className="hover:text-gray-300">Home</a></li>
          <li className="relative">
            <a href="Destination.html" className="hover:text-gray-300">Destination</a>
            <ul id="destination-dropdown">
              <li><a href="Cities.html?destination=Lahore" className="block py-2 px-4">Lahore</a></li>
              <li><a href="Cities.html?destination=Islamabad" className="block py-2 px-4">Islamabad</a></li>
              <li><a href="Cities.html?destination=Gilgit" className="block py-2 px-4">Gilgit</a></li>
            </ul>
          </li>
          <li><a href="AboutUs.html" className="hover:text-gray-300">About Us</a></li>
          <li><a href="Contact-Us.html" className="hover:text-gray-300">Contact Us</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button id="menu-button" className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-800 text-white p-4">
          <ul>
            <li><a href="index.html" className="block py-2">Home</a></li>
            <li><a href="Destination.html" className="block py-2">Destination</a></li>
            <li><a href="AboutUs.html" className="block py-2">About Us</a></li>
            <li><a href="Contact-Us.html" className="block py-2">Contact Us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

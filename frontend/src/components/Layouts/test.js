import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import destinations from '../Functions/destinationData'; // Import the destinations data
import useSearch from '../Functions/Search'; // Import the custom search hook
import '../Styles/style.css';
import '../Styles/style_cities.css';
import '../Styles/style_destination.css';
import '../Styles/style_form.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");  // State for the search input
  const [user, setUser] = useState(null); // State to track if a user is logged in
  const { searchResults, isDropdownVisible, handleSearchInput } = useSearch(destinations);

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

  // Handle logout
  const handleLogout = () => {
    setUser(null); // Clear user data on logout
  };

  // Simulate fetching user data from an API
  useEffect(() => {
    // Simulating user data for logged-in customer or admin
    const mockUser = {
      name: "John Doe",
      avatar: "/path/to/avatar.jpg",
      type: "customer", // or "admin"
    };
    setUser(mockUser);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky-navbar bg-gray-800 text-white py-4 px-8 shadow-lg">
      <div className="flex justify-between items-center">
        <img
          src="/site images/Logo.png"
          alt="Logo"
          className="w-auto h-20 cursor-pointer"
          id="logo"
        />
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            id="search-input"
            placeholder="Search destination..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value); // Update the search term state
              handleSearchInput(e.target.value); // Handle the search input
            }}
            className="focus:outline-none"
          />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 16h6M10 12h6M10 8h6M3 20h18"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navbar */}
        <ul className="flex space-x-4 hidden md:flex">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li className="relative">
            <Link to="/destination" className="hover:text-gray-300">Destinations</Link>
            <ul id="destination-dropdown">
              {destinations.map(destination => (
                <li key={destination.name}>
                  <a href={destination.link} className="block py-2 px-4">{destination.name}</a>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/aboutus" className="hover:text-gray-300">About Us</Link></li>
          <li><a href="Contact-Us.html" className="hover:text-gray-300">Contact Us</a></li>
        </ul>

        {/* User Avatar and Login Button */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <Link to="/login" className="text-white">Login</Link>
          ) : (
            <div className="relative">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-40">
                  <ul>
                    <li><Link to="/profile" className="block py-2">Profile</Link></li>
                    <li><Link to="/bookings" className="block py-2">Bookings</Link></li>
                    {user.type === "admin" && (
                      <li><Link to="/admin-panel" className="block py-2">Admin Panel</Link></li>
                    )}
                    <li>
                      <button onClick={handleLogout} className="block py-2 w-full text-left">Logout</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button id="menu-button" className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Search Results Dropdown */}
      {isDropdownVisible && searchTerm && (
        <div className="relative" id="search-results">
          <ul>
            {searchResults.map((destination) => (
              <li key={destination.name} className="block p-2 cursor-pointer hover:bg-gray-200">
                <a href={destination.link}>{destination.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-800 text-white p-4">
          <ul>
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/destination" className="hover:text-gray-300">Destinations</Link></li>
            <li><Link to="/aboutus" className="hover:text-gray-300">About Us</Link></li>
            <li><a href="Contact-Us.html" className="block py-2">Contact Us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

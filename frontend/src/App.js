import React, { useState, useEffect } from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Destination from "./Pages/Destination";
import ForgotPassword from "./Pages/ForgotPassword";
const App = () => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage if available
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  // Handle login (called when user logs in)
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
  };

  // Handle logout (called when user logs out)
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user data from localStorage
  };

  
  return (
      <Router>
      <Header user={user} handleLogout={handleLogout} />
      <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass login function */}
          <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Forgot Password Route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

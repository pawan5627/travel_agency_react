import React from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Slider from "./components/Layouts/Slider";
import './styling.css'; // Assuming you have a separate CSS file for specific styles
import './components/Styles/style.css';
import './components/Styles/style_cities.css';
import './components/Styles/style_destination.css';
import './components/Styles/style_form.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
const App = () => {
  return (

      <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
     

  );
};

export default App;

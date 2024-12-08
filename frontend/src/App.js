import React from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
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

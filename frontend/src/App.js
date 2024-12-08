import React from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Destination from "./Pages/Destination";
const App = () => {
  return (
      <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

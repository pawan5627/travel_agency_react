import React from 'react';
import '../Styles/style_login.css'; // Make sure to import necessary styles

const SuccessPopup = ({ isVisible, message }) => (
  isVisible ? (
    <div className="popup-overlay">
      <div className="popup">
        <span className="popup-icon">&#10004;</span>
        <p>{message}</p>
      </div>
    </div>
  ) : null
);

export default SuccessPopup;

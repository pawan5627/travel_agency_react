import React, { useState } from 'react';
import '../Styles/style_signup.css';
import SuccessPopup from "./SuccessPopup";
import { useNavigate } from "react-router-dom";
const SignUpSection2 = ({ onPrev, onSkip, onSubmit }) => {
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);
  const [address, setAddress] = useState({
    address1: '',
    address2: '',
    state: '',
    country: '',
    zip: ''
  });
  const [paymentMethod, setPaymentMethod] = useState({
    cardNumber: '',
    cardHolderName: '',
    expDate: '',
    cvc: ''
  });


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Save avatar preview URL
    }
  };

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod({
      ...paymentMethod,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Check required fields and then submit
    if (profilePic && address.address1 && address.state && address.country && paymentMethod.cardNumber) {
      // Submit data
      onSubmit({
        profilePic,
        address,
        paymentMethod
      });
      // Show success popup
      setIsSuccessPopupVisible(true);
      setTimeout(() => {
        setIsSuccessPopupVisible(false);
        navigate("/"); // Redirect to the homepage after 3 seconds
      }, 3000);
    } else {
      // Handle validation or show error messages
      alert('Please fill in all the required fields.');
    }
  };


  return (
    <div className="signup-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="step completed">Step 1</div>
        <div className="step active">Step 2</div>
        <div className="step">Step 3</div>
      </div>

      <div className="input-group-signup">
        {/* Avatar Upload */}
        <div className="input-field">
          <label htmlFor="avatar">Profile Picture</label>
          <input
            type="file"
            id="avatar"
            name="profilePic"
            accept="image/*"
            onChange={handleFileChange}
          />
          {profilePic ? (
            <img src={profilePic} alt="Avatar Preview" className="avatar-preview" />
          ) : (
            <div className="avatar-placeholder">No Avatar</div>
          )}
        </div>

        {/* Address Section */}
        <div className="input-field">
          <label htmlFor="address1">Address 1</label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={address.address1}
            onChange={handleAddressChange}
            placeholder="Enter address"
          />
        </div>

        <div className="input-field">
          <label htmlFor="address2">Address 2 (Optional)</label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={address.address2}
            onChange={handleAddressChange}
            placeholder="Apartment number, etc."
          />
        </div>

        <div className="input-field">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={address.state}
            onChange={handleAddressChange}
            placeholder="Enter state"
          />
        </div>

        <div className="input-field">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={address.country}
            onChange={handleAddressChange}
            placeholder="Enter country"
          />
        </div>

        <div className="input-field">
          <label htmlFor="zip">Zip Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={address.zip}
            onChange={handleAddressChange}
            placeholder="Enter zip code"
          />
        </div>

        {/* Payment Section */}
        <div className="input-field">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentMethod.cardNumber}
            onChange={handlePaymentChange}
            placeholder="Enter card number"
          />
        </div>

        <div className="input-field">
          <label htmlFor="cardHolderName">Card Holder Name</label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={paymentMethod.cardHolderName}
            onChange={handlePaymentChange}
            placeholder="Enter card holder name"
          />
        </div>

        <div className="input-field">
          <label htmlFor="expDate">Expiration Date (MM/YY)</label>
          <input
            type="text"
            id="expDate"
            name="expDate"
            value={paymentMethod.expDate}
            onChange={handlePaymentChange}
            placeholder="MM/YY"
          />
        </div>

        <div className="input-field">
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            value={paymentMethod.cvc}
            onChange={handlePaymentChange}
            placeholder="CVC"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="previous-btn" onClick={onPrev}>Previous</button>
        <button className="signup-btn" onClick={handleSubmit}>Signup</button>
        <button className="skip-btn" onClick={onSkip}>Skip</button>
      </div>
        <SuccessPopup isVisible={isSuccessPopupVisible} message={"You have signed Up Successfully"} />
    
    </div>
  );
};

export default SignUpSection2;

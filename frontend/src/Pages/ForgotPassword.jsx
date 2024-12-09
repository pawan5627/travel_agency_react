import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordStrengthBar from 'react-password-strength-bar'; // Password strength library
import '../components/Styles/style_login.css';
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Simulate password change
      setIsSuccessPopupVisible(true);
      
      // Show popup for 3 seconds, then redirect to the home page
      setTimeout(() => {
        setIsSuccessPopupVisible(false);
        navigate("/"); // Redirect to the homepage after 3 seconds
      }, 3000);
    } else {
      alert("Passwords do not match!");
    }
  };

  // Handle password strength
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  // Password validation
  const checkPasswordStrength = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    setPasswordValid(passwordRegex.test(password));
  };

  return (
    <div className="forgot-password-page">
      <div className="form-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="input-group">
            <label>New Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
              required
            />
            <PasswordStrengthBar password={password} />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
            />
          </div>

          <button type="submit" disabled={!passwordValid}>
            Change Password
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {isSuccessPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="popup-icon">&#10004;</span>
            <p>Password changed successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;

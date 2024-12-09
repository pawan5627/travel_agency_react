import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordStrengthBar from 'react-password-strength-bar'; // Password strength library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../components/Styles/style_login.css';
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);

  // States for password visibility toggle
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

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

  // Validate if all conditions are met for enabling the submit button
  const isFormValid = () => {
    // Check if email is valid
    const isEmailValid = email && /\S+@\S+\.\S+/.test(email);
    // Check if password is valid, confirm password matches, and email is valid
    return (
      isEmailValid &&
      passwordValid &&
      confirmPassword === password &&
      password.trim() !== "" &&
      confirmPassword.trim() !== ""
    );
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
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
            <div className="password-input-container">
              <input
                type={isPasswordVisible ? "text" : "password"} // Toggle password visibility
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
                required
              />
              <FontAwesomeIcon
                icon={isPasswordVisible ? faEyeSlash : faEye} // Toggle eye icon based on visibility state
                className="eye-icon"
                onClick={togglePasswordVisibility} // Toggle visibility on click
              />
            </div>
            <PasswordStrengthBar password={password} />
            <div className="password-requirements">{/* Password Requirements Text */}
             <p> Password should meet the below requirements:</p>
              <ul>
                <li>It should contain at least 6 Letters</li>
                <li>It should contain at least one Uppercase letter</li>
                <li>It should contain at least one Lowercase letter</li>
                <li>It should contain at least one Symbol (e.g., @, #, $, etc.)</li>
              </ul>
            </div>
            
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <div className="password-input-container">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"} // Toggle confirm password visibility
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
              />
              <FontAwesomeIcon
                icon={isConfirmPasswordVisible ? faEyeSlash : faEye} // Toggle eye icon based on visibility state
                className="eye-icon"
                onClick={toggleConfirmPasswordVisibility} // Toggle visibility on click
              />
            </div>
          </div>

          <button className="highlight-button" type="submit" disabled={!isFormValid()}>
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

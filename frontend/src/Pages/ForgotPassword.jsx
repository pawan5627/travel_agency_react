import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/Styles/style_login.css';
import PasswordField from "../components/Layouts/PasswordField";
import ConfirmPasswordField from "../components/Layouts/ConfirmPasswordField";
import SuccessPopup from "../components/Layouts/SuccessPopup";
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
          <div className="input-group-login">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
         
          <PasswordField 
            password={password} 
            onPasswordChange={handlePasswordChange} 
            isPasswordVisible={isPasswordVisible} 
            togglePasswordVisibility={togglePasswordVisibility}
          />

<ConfirmPasswordField 
            confirmPassword={confirmPassword} 
            onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)} 
            isConfirmPasswordVisible={isConfirmPasswordVisible} 
            toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
          />

          <button className="highlight-button" type="submit" disabled={!isFormValid()}>
            Change Password
          </button>
        </form>
      </div>

      {/* Success Popup */}
      <SuccessPopup isVisible={isSuccessPopupVisible} message={"Password was changed successfully"} />
    </div>
  );
};

export default ForgotPassword;

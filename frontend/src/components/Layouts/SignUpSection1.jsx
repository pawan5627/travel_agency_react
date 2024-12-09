import React, { useState } from 'react';
import '../Styles/style_signup.css';
import '../Styles/style_login.css';
import PasswordField from '../Layouts/PasswordField'; // Reusing PasswordField
import ConfirmPasswordField from '../Layouts/ConfirmPasswordField'; // Reusing ConfirmPasswordField
import SuccessPopup from '../Layouts/SuccessPopup'; // Reusing SuccessPopup component

const SignUpSection1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false); // Success popup visibility

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle password change and validate password strength
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      password: value,
    });
    // Validate password
    setIsPasswordValid(
      value.length >= 6 &&
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(value)
    );
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setFormData({
      ...formData,
      confirmPassword: e.target.value,
    });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  // Validate form data before submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validation checks
    if (!formData.firstName) validationErrors.firstName = 'First Name is required';
    if (!formData.lastName) validationErrors.lastName = 'Last Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.dob) validationErrors.dob = 'Date of Birth is required';
    if (!formData.password) validationErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(validationErrors).length === 0) {
      onNext(); // Move to the next section
      setIsSuccessPopupVisible(true); // Show success popup
    } else {
      setErrors(validationErrors); // Set validation errors
    }
  };

  return (
    <div className="signup-section">
      <h2>Section 1: Personal Information</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name and Last Name Fields (Side by Side) */}
        <div className="input-group-signup">
          <div className="input-field flex-1">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <div className="error-text">{errors.firstName}</div>}
          </div>
          <div className="input-field flex-1">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div className="error-text">{errors.lastName}</div>}
          </div>
        </div>

        {/* Email and Date of Birth Fields (Side by Side) */}
        <div className="input-group-signup">
          <div className="input-field flex-1">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error-text">{errors.email}</div>}
          </div>
          <div className="input-field flex-1">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <div className="error-text">{errors.dob}</div>}
          </div>
        </div>

        {/* Password and Confirm Password Fields (Reusing Components) */}
        <div className="input-group-login">
          <PasswordField
            password={formData.password}
            onPasswordChange={handlePasswordChange}
            isPasswordValid={isPasswordValid}
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
          />
          <ConfirmPasswordField
            confirmPassword={formData.confirmPassword}
            onConfirmPasswordChange={handleConfirmPasswordChange}
            password={formData.password}
            isConfirmPasswordVisible={isConfirmPasswordVisible}
            toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
            isPasswordsMatching={formData.password === formData.confirmPassword}
          />
        </div>

        {/* Submit Button */}
        <button
        className="highlight-button"
          type="submit"
          disabled={
            !isPasswordValid ||
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.dob ||
            formData.password !== formData.confirmPassword
          }
        >
          Next
        </button>
      </form>

      {/* Success Popup */}
      <SuccessPopup isVisible={isSuccessPopupVisible} message={"You have signed Up successfully"} />
    </div>
  );
};

export default SignUpSection1;

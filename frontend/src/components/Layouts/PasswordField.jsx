import React from 'react';
import PasswordStrengthBar from 'react-password-strength-bar'; // Password strength library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../Styles/style_login.css'; // Import the styles

const PasswordField = ({ password, onPasswordChange, isPasswordVisible, togglePasswordVisibility }) => (
  <div className="input-group-login">
    <label>New Password</label>
    <div className="password-input-container">
      <input
        type={isPasswordVisible ? "text" : "password"} // Toggle password visibility
        value={password} // Controlled input
        onChange={onPasswordChange}
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
      <p>Password should meet the below requirements:</p>
      <ul>
        <li>It should contain at least 6 Letters</li>
        <li>It should contain at least one Uppercase letter</li>
        <li>It should contain at least one Lowercase letter</li>
        <li>It should contain at least one Symbol (e.g., @, #, $, etc.)</li>
      </ul>
    </div>
  </div>
);

export default PasswordField;

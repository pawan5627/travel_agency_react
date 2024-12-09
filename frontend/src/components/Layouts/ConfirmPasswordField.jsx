import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../Styles/style_login.css'; // Import the styles
const ConfirmPasswordField = ({ confirmPassword, onConfirmPasswordChange, isConfirmPasswordVisible, toggleConfirmPasswordVisibility }) => (
  <div className="input-group-login">
            <label>Confirm Password</label>
            <div className="password-input-container">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"} // Toggle confirm password visibility
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
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
);

export default ConfirmPasswordField;

import React, { useState } from 'react';
import PasswordField from './PasswordField'; // Import PasswordField component
import ConfirmPasswordField from './ConfirmPasswordField'; // Import ConfirmPasswordField component

const ForgotPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(e.target.value.length >= 6 && /[A-Z]/.test(e.target.value) && /[a-z]/.test(e.target.value) && /[!@#$%^&*(),.?":{}|<>]/.test(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (password !== confirmPassword) validationErrors.confirmPassword = "Passwords do not match";
    if (!password) validationErrors.password = "Password is required";
    
    if (Object.keys(validationErrors).length === 0) {
      // Handle success (e.g., navigate to a success page)
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        {/* Using the PasswordField component */}
        <PasswordField 
          password={password} 
          onPasswordChange={handlePasswordChange} 
          error={errors.password} 
        />
        
        {/* Using the ConfirmPasswordField component */}
        <ConfirmPasswordField 
          confirmPassword={confirmPassword} 
          onConfirmPasswordChange={handleConfirmPasswordChange} 
          error={errors.confirmPassword} 
        />
        
        <button type="submit" disabled={!isPasswordValid}>Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

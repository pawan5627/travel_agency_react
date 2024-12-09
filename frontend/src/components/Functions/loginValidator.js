// loginValidator.js

// This function checks if the email is valid and the password meets certain criteria
export const validateLogin = (email, password) => {
    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return { isValid: false, message: "Please enter a valid email address." };
    }
  
    // Check if password is provided and meets length requirements (you can customize this)
    if (!password || password.length < 6) {
      return { isValid: false, message: "Password must be at least 6 characters long." };
    }
  
    // If all validations pass
    return { isValid: true, message: "" };
  };
  
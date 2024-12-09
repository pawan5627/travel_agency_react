// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../components/Functions/loginValidator"; // Import the login validation logic
import '../components/Styles/style_login.css'; // Add your form styling
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store validation errors
  const navigate = useNavigate();
  //const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the email and password
    const validationResult = validateLogin(email, password);

    if (validationResult.isValid) {
      // If validation is successful, you can connect it to the API here
      console.log("Logging in with:", { email, password });
        // Example of a successful login (you can replace this with API call)
        const userData = { email }; // Replace with actual user data from your login API
        onLogin(userData); // Update user state in App component

        // Redirect to home page after login
        //history.push("/");
      // Navigate to the homepage after successful login
      navigate("/");
    } else {
      // If validation fails, show the error message
      setError(validationResult.message);
    }

  };

  return (
    <div className="pt-32 md:pt-36"> 
    <div className="login-container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="links">
        <Link to="/forgot-password">Forgot Password?</Link>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
    </div>
  );
};

export default Login;

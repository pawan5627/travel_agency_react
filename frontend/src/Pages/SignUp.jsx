import React, { useState } from 'react';
import SignUpSection1 from '../components/Layouts/SignUpSection1';
import SignUpSection2 from '../components/Layouts/SignUpSection2';
import ProgressBar from '../components/Layouts/ProgressBar';
import SuccessPopup from '../components/Layouts/SuccessPopup';
import '../components/Styles/style_signup.css';

const SignUp = () => {
  const [section, setSection] = useState(1); // Track current section
  const [userData, setUserData] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleNextSection = (data) => {
    setUserData({ ...userData, ...data }); // Save data to state
    setSection(2); // Go to section 2
  };

  const handleFinalSubmit = (data) => {
    setUserData({ ...userData, ...data }); // Save data
    setShowSuccessPopup(true); // Show success popup
    setTimeout(() => {
      setShowSuccessPopup(false);
      window.location.href = '/'; // Redirect to homepage or login
    }, 3000);
  };

  const handleSkipSection = () => {
    setSection(2); // Skip to section 2
  };

  return (
    <div className="signup-container">
      <ProgressBar currentSection={section} />

      {section === 1 && (
        <SignUpSection1 onNext={handleNextSection} />
      )}

      {section === 2 && (
        <SignUpSection2 onSubmit={handleFinalSubmit} onSkip={handleSkipSection} />
      )}

      {showSuccessPopup && <SuccessPopup />}
    </div>
  );
};

export default SignUp;

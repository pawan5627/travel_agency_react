import React from 'react';
import '../Styles/style_signup.css';
const ProgressBar = ({ currentSection }) => {
  return (
    <div className="progress-bar">
      <div className={`step ${currentSection >= 1 ? 'completed' : ''}`}>
        Step 1: Basic Info
      </div>
      <div className={`step ${currentSection >= 2 ? 'completed' : ''}`}>
        Step 2: Profile & Payment
      </div>
    </div>
  );
};

export default ProgressBar;

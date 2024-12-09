const PasswordRequirements = () => (
    <div className="password-requirements">
      <p>Password should meet the below requirements:</p>
      <ul>
        <li>It should contain at least 6 letters</li>
        <li>It should contain at least one uppercase letter</li>
        <li>It should contain at least one lowercase letter</li>
        <li>It should contain at least one symbol (e.g., @, #, $, etc.)</li>
      </ul>
    </div>
  );
  
  export default PasswordRequirements;
  
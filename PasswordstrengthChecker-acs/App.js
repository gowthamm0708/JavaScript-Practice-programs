import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pwd) => {
    if (pwd.length > 15) return;
    setPassword(pwd);
    
      // If no input, reset strength
      if (pwd === "") {
        setStrength("");
        return;
      }

    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*]/.test(pwd);
    const hasMinLength = pwd.length >= 8;
    
    if (hasLower && hasUpper && hasNumber && hasSpecial && hasMinLength ) {
      setStrength("strong");
    } else {
      setStrength("weak");
    }

  };

  return (
    <div className="password-container">
      <label>Password<span>*</span></label>
      <input
        type="password"
        value={password}
        onChange={(e) => checkStrength(e.target.value)}
        className="password-input"
      />
       <div className="strength-wrapper">
        <div className="strength-indicator">
          <div className={box ${strength === "" ? "white" : strength === "strong" ? "green" : "red"}}></div>
          <div className={box ${strength === "" ? "white" : strength === "strong" ? "green" : "red"}}></div>
          <div className={box ${strength === "" ? "white" : strength === "strong" ? "green" : "red"}}></div>
        </div>
        <span className={strength-text ${strength}}>
          {strength ? (strength === "strong" ? "Strong" : "Weak") : ""}
        </span>
      </div>
    </div>
  );
};

export default App;

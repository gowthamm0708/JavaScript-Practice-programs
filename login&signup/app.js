import { useState } from "react";
import "./App.css"; 

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isSignup ? "shift-left" : ""}`}>{isSignup ? "Sign Up" : "Login"}</div>
      </div>
      <div className="slide-controls">
        <input type="radio" name="slide" id="login" checked={!isSignup} readOnly />
        <input type="radio" name="slide" id="signup" checked={isSignup} readOnly />
        <label className="slide login" onClick={() => setIsSignup(false)}>Login</label>
        <label className="slide signup" onClick={() => setIsSignup(true)}>Sign Up</label>
        <div className="slider-tab" style={{ left: isSignup ? "50%" : "0%" }}></div>
      </div>
      <div className="form-container">
        <div className="form-inner" style={{ transform: isSignup ? "translateX(-50%)" : "translateX(0)" }}>
          <form className="login">
            <div className="field">
              <input type="text" placeholder="Email" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
            <div className="btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="#" onClick={(e) => { e.preventDefault(); setIsSignup(true); }}>Sign up now</a>
            </div>
          </form>

          <form className="signup">
            <div className="field">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="field">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

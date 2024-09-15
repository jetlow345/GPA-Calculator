// import React from "react";
// import './login.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

// Login.js:
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faGithub,
  faWeixin,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css";
import './login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login attempted with:", { email, password });
    // Here you would typically send a request to your server
  };

  const [activeForm, setActiveForm] = useState('sign-in'); // Initial state is 'sign-in'

  const handleSignUpClick = () => {
    setActiveForm('sign-up');
  };

  const handleSignInClick = () => {
    setActiveForm('sign-in');
  };

  return (
    <>
      {/* <div className="login-container" id="login-cotainer">
        <div className="form-container sign-up"> */}
      <div className={`login-container ${activeForm === 'sign-up' ? 'active' : ''}`}>
        <div className="form-container sign-up" style={{ display: activeForm === 'sign-up' ? 'block' : 'none' }}>
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faWeixin} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="passord" placeholder="password" />
            <button>Sign up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faWeixin} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="passord" placeholder="password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back</h1>
              <p>Login and Check your GPA</p>
              <button
                className={activeForm === 'sign-in' ? 'hidden' : ''}
                id="login"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hi, Welcome!</h1>
              <p>
                Please register your own account to see your GPA
              </p>
              <button
                className={activeForm === 'sign-up' ? 'hidden' : ''}
                id="register"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

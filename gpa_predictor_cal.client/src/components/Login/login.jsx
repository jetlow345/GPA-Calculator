
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGooglePlusG,
//   faGithub,
//   faWeixin,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// import './login.css'

// function Login() {
//   const [activeForm, setActiveForm] = useState('sign-in'); // Initial state is 'sign-in'

//   const handleSignUpClick = () => {
//     setActiveForm('sign-up');
//   };

//   const handleSignInClick = () => {
//     setActiveForm('sign-in');
//   };

//   return (
//     <>
//       {/* <div className="login-container" id="login-cotainer">
//         <div className="form-container sign-up"> */}
//       <div className={`login-container ${activeForm === 'sign-up' ? 'active' : ''}`}>
//         <div className="form-container sign-up" style={{ display: activeForm === 'sign-up' ? 'block' : 'none' }}>
//           <form>
//             <h1>Create Account</h1>
//             <div className="social-icons">
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faGooglePlusG} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faGithub} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faWeixin} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faLinkedin} />
//               </a>
//             </div>
//             <span>or use your email for registeration</span>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email" />
//             <input type="passord" placeholder="password" />
//             <button>Sign up</button>
//           </form>
//         </div>
//         {/* <div className="form-container sign-in"> */}
//         <div className="form-container sign-in" style={{ display: activeForm === 'sign-in' ? 'block' : 'none' }}>
//           <form>
//             <h1>Sign In</h1>
//             <div className="social-icons">
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faGooglePlusG} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faGithub} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faWeixin} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faLinkedin} />
//               </a>
//             </div>
//             <span>or use your email password</span>
//             <input type="email" placeholder="Email" />
//             <input type="passord" placeholder="password" />
//             <a href="#">Forget Your Password?</a>
//             <button>Sign In</button>
//           </form>
//         </div>
//         <div className="toggle-container">
//           <div className="toggle">
//             <div className="toggle-panel toggle-left">
//               <h1>Welcome Back</h1>
//               <p>Login and Check your GPA</p>
//               <button
//                 className={activeForm === 'sign-in' ? 'hidden' : ''}
//                 id="login"
//                 onClick={handleSignInClick}
//               >
//                 Sign In
//               </button>
//             </div>
//             <div className="toggle-panel toggle-right">
//               <h1>Hi, Welcome!</h1>
//               <p>
//                 Please register your own account to see your GPA
//               </p>
//               <button
//                 className={activeForm === 'sign-up' ? 'hidden' : ''}
//                 id="register"
//                 onClick={handleSignUpClick}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

// Login.js
import React, { useState } from "react";
import LoginForm from "./loginForm.jsx";
import RegisterForm from "./registerForm.jsx";
import './login.css';

function Login() {
  const [activeForm, setActiveForm] = useState('sign-in');

  const handleSignUpClick = () => {
    setActiveForm('sign-up');
  };

  const handleSignInClick = () => {
    setActiveForm('sign-in');
  };

  return (
    <div className={`login-container ${activeForm === 'sign-up' ? 'active' : ''}`}>
      {activeForm === 'sign-in' ? <LoginForm /> : <RegisterForm />}
      
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back</h1>
            <p>Login and Check your GPA</p>
            <button
              className={activeForm === 'sign-in' ? 'hidden' : ''}
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hi, Welcome!</h1>
            <p>Please register your own account to see your GPA</p>
            <button
              className={activeForm === 'sign-up' ? 'hidden' : ''}
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import LoginImg from "./assets/login.jpg";
import { useState } from "react";
// import { isSignedIn } from "../App";
// import { handleLoginErrorClick, handleLoginSuccessClick } from "../Popup_alerts/PopupComp";

export default function Login() {
  // useState function
  const [userFieldState, setUserField] = useState("");
  const [passFieldState, setPassField] = useState("");

  // function to update text state based on user's input
  const UserFieldChanges = (e) => {
    setUserField(e.target.value);
  };

  const PassFieldChanges = (e) => {
    setPassField(e.target.value);
  };

  const clearAllFields = () => {
    setUserField("");
    setPassField("");
  };

  const handleLogin = (event) => {
    if (userFieldState !== "useradmin" && passFieldState !== "adminpass") {
      alert("Login unsuccessful");
      // handleLoginErrorClick();
    } else {
      alert("Login successful");
      // handleLoginSuccessClick();
      // isSignedIn = true;
      // goToHome();
    }
  };

  return (
    <>
      {/* container */}
      <div className="login-container">
        {/* login card */}
        <div className="login-card">
          {/* login form container */}
          <div className="login-form-container">
            {/* h1 and p */}
            <div className="login-text-container">
              <h1>Log in</h1>
              <p>Welcome back! Please enter your username and password.</p>
            </div>
            <form action="" className="login-form">
              <div className="form-group-login">
                <input name="username" type="text" placeholder="Username" onChange={UserFieldChanges} required />
                <input name="password" type="password" placeholder="Password" onChange={PassFieldChanges} required />
              </div>

              <br />

              <div className="form-group-login">
                {/* clear text fields button */}
                <button className="clear-fields-button" type="reset" onClick={clearAllFields}>
                  Clear
                </button>
                {/* login button */}
                <button onClick={handleLogin} className="login-button" type="submit">
                  Log in
                </button>
              </div>
            </form>

            {/* signup option */}
            <div className="signup-option">
              <p>
                Don't have an account? Click here to{" "}
                <Link to="/signup" className="signup-text">
                  create an account
                </Link>
              </p>
            </div>
          </div>
          {/* login image container */}
          <div className="login-image-container">
            <img className="login-image" src={LoginImg} alt="login-image" />
          </div>
        </div>
      </div>
    </>
  );
}

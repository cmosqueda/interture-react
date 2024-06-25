import { Link } from "react-router-dom";
import "./Signup.css";
import SignupImg from "./assets/signup.jpg";
import { useState } from "react";

export default function Signup() {
  // useState function
  const [textFieldState, setTextField] = useState("");

  // function to update text state based on user's input
  const fieldChanges = (e) => {
    setTextField(e.target.value);
  };

  const clearAllFields = () => {
    setTextField("");
  };

  return (
    <>
      {/* container */}
      <div className="signup-container">
        {/* signup card */}
        <div className="signup-card">
          {/* sign up form container*/}
          <div className="signup-form-container">
            {/* h1 and p */}
            <div className="signup-text-container">
              <h1>Sign-up</h1>
              <p>Welcome, new User! Please fill in to create your account.</p>
            </div>
            <form className="signup-form" action="">
              {/* name */}
              <div className="form-group-signup">
                <input name="first-name" type="text" placeholder="First Name" onChange={fieldChanges} required />
                <input name="last-name" type="text" placeholder="Last Name" onChange={fieldChanges} required />
              </div>

              {/* email and contact number */}
              <div className="form-group-signup">
                <input name="email" type="text" placeholder="Email" onChange={fieldChanges} required />
                <input name="contact-no" type="text" placeholder="Contact Number" onChange={fieldChanges} required />
              </div>

              <br />

              {/* address */}
              <div className="form-group-signup">
                <input name="street" type="text" placeholder="Street" onChange={fieldChanges} required />
              </div>

              <div className="form-group-signup">
                <input name="barangay" type="text" placeholder="Barangay" onChange={fieldChanges} required />
                <input name="city" type="text" placeholder="City" onChange={fieldChanges} required />
              </div>

              <div className="form-group-signup">
                <input name="procince" type="text" placeholder="Province" onChange={fieldChanges} required />
                <input name="zipcode" type="number" placeholder="Zip Code" onChange={fieldChanges} required />
              </div>

              <br />

              {/* user account credentials */}
              <div className="form-group-signup">
                <input name="username" type="text" placeholder="Username" onChange={fieldChanges} />
                <input name="password" type="password" placeholder="Password" onChange={fieldChanges} />
              </div>

              <br />

              <div className="form-group-signup">
                {/* clear fields button */}
                <button className="clear-fields-button" type="reset" onClick={clearAllFields}>
                  Clear
                </button>
                {/* signup button */}
                <button className="signup-button" type="submit">
                  Sign-up
                </button>
              </div>
            </form>

            {/* login option */}
            <div className="login-option">
              <p>
                Have an account? Click here to{" "}
                <Link to="/login" className="login-text">
                  Login
                </Link>
              </p>
            </div>
          </div>

          {/* signup image container */}
          <div className="signup-image-container">
            <img src={SignupImg} alt="signup-image" className="signup-image" />
          </div>
        </div>
      </div>
    </>
  );
}

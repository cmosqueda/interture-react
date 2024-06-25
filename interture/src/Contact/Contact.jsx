// import contactpic from "./assets/contactpic.png";
import "./Contact.css";
// import callicon from "./assets/call.svg";
// import emailicon from "./assets/mail.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Contact() {
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
      <section className="Contact">
        <div className="contact-image">
          <div className="form-wrapper">
            {/* title and info */}
            <div className="title-and-info">
              <h1>Stay in touch!</h1>
              <div className="contact-and-email">
                {/* contact */}
                <a href="#">
                  <span>
                    <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                  </span>
                  0999-999-9999
                </a>
                {/* email */}
                <a href="#">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
                  </span>
                  interture@gmail.com
                </a>
              </div>
            </div>

            {/* contact form */}
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <div className="form-group-contact">
                <input
                  type="hidden"
                  name="access_key"
                  value="a4c735d9-e42e-4a60-ad3f-001b49adeb7a"
                  onChange={fieldChanges}
                />
                <input
                  className="name-field"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  onChange={fieldChanges}
                />
                <input
                  className="email-field"
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  required
                  onChange={fieldChanges}
                />
                <textarea
                  className="message-field"
                  name="message"
                  placeholder="Your message here"
                  required
                  onChange={fieldChanges}
                />
              </div>
              <div className="buttons-wrapper">
                {/* clear button */}
                <button className="clear-fields-button" type="reset" onClick={clearAllFields}>
                  Clear
                </button>
                {/* submit button */}
                <button className="submit-message-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

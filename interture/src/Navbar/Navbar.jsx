import React, { useRef, useState } from "react";
import UserProfile from "./userprofile.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import ProductsCatalog from "../Homepage/Homepage_components/Products_catalog";

export default function Navbar() {
  //DropdownMenu Profile
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const [isLogoNavVisible, setLogoNavVisible] = useState(false);
  const toggleLogoNav = () => {
    setLogoNavVisible(!isLogoNavVisible);
  };

  // for cart navigation
  const navigateToCart = useNavigate();

  const goToCart = () => {
    navigateToCart("/cart");
  };

  return (
    <>
      <header>
        <div className="logo_wrapper" onClick={toggleLogoNav}>
          <h1>
            inter<span>ture</span>
          </h1>
          {isLogoNavVisible && (
            <div className="logoNav_slide">
              <h1>
                inter<span>ture</span>
              </h1>
              <li>
                <Link to="/">
                  <i class="bx bx-home-alt-2 bx-sm"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/productsCatalog">
                  <i class="bx bx-chair bx-sm"></i>Products
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i class="bx bx-phone-call bx-sm"></i>Contacts
                </Link>
              </li>
            </div>
          )}
        </div>

        {/*NAV BAR SA DESKTOP DESIGN*/}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/productsCatalog">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className="profleAndCart">
          {/* <img src={myCart} className="cartIcon" alt="myCart" /> */}
          <FontAwesomeIcon icon={faCartShopping} className="cartIcon" onClick={goToCart} />
          <img src={UserProfile} className="userIcon" alt="user " onClick={toggleDropdown} />
          {isDropdownVisible && (
            <div className="dropdown_menu">
              <li>
                <Link to="/profile">
                  <i class="bx bx-user-circle bx-sm"></i>My Profile
                </Link>
              </li>
              {/* <li className="dark_mode">
                <Link to="">
                  <i class="bx bx-moon bx-sm"></i>Dark Mode
                </Link>
              </li>
              <li className="light_mode">
                <Link to="">
                  <i class="bx bx-moon bx-sm"></i>Light Mode
                </Link>
              </li> */}
              <li>
                <Link to="">
                  <i class="bx bx-help-circle bx-sm"></i>Help
                </Link>
              </li>
              <li>
                <Link to="">
                  <i class="bx bx-log-out bx-sm"></i>Log Out
                </Link>
              </li>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

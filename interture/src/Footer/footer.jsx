import React from "react";
import "./Footer.css";
import "boxicons";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { goToCateg } from "../Homepage/Homepage_components/Category";

export default function Footer() {
  return (
    <div className="footer">
      <div className="above-footer">
        <div className="logoNslogan">
          <h1 className="logo">
            inter<span>ture</span>
          </h1>
          <p>we ensure comfort.</p>
        </div>
        <div className="footer-maintxt">
          <div className="footer-txt">
            <h2>Products</h2>
            <ul>
              <li>
                <Link to={"productsCatalogLiving"}>Living</Link>
              </li>
              <li>
                <Link to={"productsCatalogDining"}>Dining</Link>
              </li>
              <li>
                <Link to={"productsCatalogBed"}>Bedding</Link>
              </li>
            </ul>
          </div>
          <div className="footer-txt">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Promotion</a>
              </li>
            </ul>
          </div>
          <div className="footer-txt">
            <h2>Reach Us</h2>
            <ul>
              <li>
                <box-icon type="solid" name="phone"></box-icon>
                <a href="#">0999-999-9999</a>
              </li>
              <li>
                <box-icon name="envelope" type="solid"></box-icon>
                <a href="#">interture@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="below-footer">
        <div className="media-icons">
          <box-icon type="logo" name="facebook-circle"></box-icon>
          <box-icon name="instagram-alt" type="logo"></box-icon>
          <box-icon name="github" type="logo"></box-icon>
          <box-icon name="tiktok" type="logo"></box-icon>
        </div>
        <div className="all-rights">
          &copy; <span id="current-year">2024</span> interture. All rights reserved.
        </div>
      </div>
    </div>
  );
}

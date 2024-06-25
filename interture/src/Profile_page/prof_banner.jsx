import React from "react";
import UserIcon from "../Navbar/userprofile.png";
import "./prof_banner.css";
import Proptypes from "prop-types";

function prof_banner(props) {
  return (
    <div className="banner-wrapper">
      <div className="banner-left">
        <img src={props.userIcon} alt="usericon" />
      </div>
      <div className="banner-right">
        <h1>{props.name}</h1>
        <p>{props.username}</p>
      </div>
    </div>
  );
}

prof_banner.propTypes = {
  name: Proptypes.string,
  username: Proptypes.string,
};

prof_banner.defaultProps = {
  userIcon: UserIcon,
  name: "User",
  username: "empty",
};

export default prof_banner;

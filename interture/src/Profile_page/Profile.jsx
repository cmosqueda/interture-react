import React from "react";
// import UserProfile from "../assets/userprofile.png";
import ProfileBanner from "./prof_banner";
import HistoryPurch from "./History_purch";
import "./Profile.css";

export const historyPurchases = [
  { purchId: 1, name: "Product 1", price: 459.0 },
  { purchId: 2, name: "Product 2", price: 659.0 },
  { purchId: 3, name: "Product 3", price: 359.0 },
];

export const mapHistoryPurchases = historyPurchases.map((item) => {
  const mgaNapalit = <HistoryPurch key={item.purchId} name={item.name} price={item.price}></HistoryPurch>;

  return mgaNapalit;
});

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_cont">
        <ProfileBanner name="Paul Salaan" username="@patikangenggeng" />
      </div>

      <div className="history-wrapper">
        <div className="purch_history">
          <h1>Purchase History</h1>
          <div className="line"></div>
          <div className="purch_box">{mapHistoryPurchases}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

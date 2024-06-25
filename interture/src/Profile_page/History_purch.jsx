import React from "react";
import PropTypes from "prop-types";
import "./History_purch.css";

function History_purch(props) {
  return (
    <div className="history-wrapper">
      <div className="history_box">
        <div className="box-wrapper">
          <div className="purchHis-left"></div>
          <div className="purchHis-right">
            <h1>{props.name}</h1>
            <p>₱ {props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

History_purch.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

History_purch.defaultProps = {
  name: "Product Name",
  price: 1000.0,
};

export default History_purch;

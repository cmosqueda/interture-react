import PropTypes from "prop-types";
import "./Cart_added_item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BangkoSvg from "../Homepage/Homepage_components/assets/bangko.svg";
import { useRef, useState } from "react";
// import { mapCartProducts, produkto } from "./Cart";

export default function Cart_added_item({ itemId, imageUrl, name, price, aveRating, deleteAction }) {
  // display dynamic rating based on passed props rating

  // for rating to be able to traverse through the number of ratings and the icons pushed inside
  const ratingArray = [];

  const displayRating = (numberOfRating) => {
    // inner array to display rating dynamically
    for (let i = 1; i <= numberOfRating; i++) {
      const icon = <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />;
      ratingArray.push(icon);
    }

    return <>{ratingArray}</>;
  };

  // useState hooks
  const [quantityNumber, setQuantityNumber] = useState(1);

  const increaseQty = () => {
    setQuantityNumber(quantityNumber + 1);

    // magbutangdayun ug function diri para mo query nga nag add ka ug qty
  };

  const decreaseQty = () => {
    setQuantityNumber(quantityNumber - 1);

    // same ras increaseQty
  };

  if (quantityNumber < 1) {
    setQuantityNumber(1);

    // diri kay dapat ma remove ang product
  }

  return (
    <>
      {/* Component here, ibalhin rani nako dayun */}

      {/* akong gi comment */}

      <div key={itemId} className="Added-product">
        <div className="image-name-rating">
          <div className="product-image">
            {/* diri ang image */}
            <img src={imageUrl} alt="product-image" className="actual-image" />
          </div>

          {/* name and rating */}
          <div className="name-and-rating">
            <p className="product-name">{name}</p>
            <div className="product-ave-rating">
              {/* mao ni ang stars */}
              {displayRating(aveRating)}
            </div>
          </div>
        </div>

        {/* para pag wrap ni sa price, qty, ug remove sa component */}
        <div className="price-qty-remove">
          {/* unit price */}
          <div className="unit-price">
            <p>P {price}</p>
          </div>

          {/* quantity */}
          <div className="quantity-selection">
            <button onClick={decreaseQty} className="decrement-quantity">
              -
            </button>
            <span className="quantity-holder">{quantityNumber}</span>
            <button onClick={increaseQty} className="increment-quantity">
              +
            </button>
          </div>

          {/* remove an item */}
          <button onClick={deleteAction} className="remove-button">
            {/* diri ang remove icon */}
            <FontAwesomeIcon icon={faTrash} className="trash-icon" />
          </button>
        </div>
      </div>
    </>
  );
}

Cart_added_item.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  aveRating: PropTypes.number,
};

Cart_added_item.defaultProps = {
  // imageUrl: BangkoSvg,
  // name: "Item Name",
  // price: 199.0,
  // aveRating: 5, //average rating sa product per customer's review
};

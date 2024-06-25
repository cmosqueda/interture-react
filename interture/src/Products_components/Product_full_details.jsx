import "./Product_full_details.css";
import { products } from "./Products_list";
import PropTypes from "prop-types";
import BangkoNasad from "../Homepage/Homepage_components/assets/bangko.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { handleAddToCart, handleBuyNow } from "../Popup_alerts/PopupComp";

export default function ProductFullDetails({
  productId,
  name,
  imageUrl,
  price,
  color,
  size,
  rating,
  product, //para sa product component
  closeModal,
}) {
  if (!product) return null;

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

  return (
    <>
      <div key={productId} onClick={closeModal} className="Product-full-details">
        {/* container */}
        <div className="Full-details-container">
          <div className="image-and-details">
            {/* diri ang pic */}
            <div className="product-full-image">
              <img src={imageUrl} alt="alt text" />
            </div>

            {/* diri ang details */}
            <div className="details-container">
              <div className="name-rating-price">
                {/* name */}
                <h1>{name}</h1>
                <div className="stars-aveRating-price">
                  {/* for price */}
                  <div className="price-value-holder">
                    <h2>P {price}</h2>
                  </div>

                  <div className="ratings-only-container">
                    <p className="ratings-label">Ratings:</p>
                    <div className="star-icons-wrapper">{displayRating(rating)}</div>
                  </div>
                </div>
              </div>

              {/* description container */}
              <div className="description-container">
                {/* Color holder */}
                <div className="color-value-holder">
                  <p>Color:</p>
                  <p>{color}</p>
                </div>

                {/* size holder */}
                <div className="size-value-holder">
                  <p>Size:</p>
                  <p>{size}</p>
                </div>
              </div>

              {/* buttons holder */}
              <div className="addCart-buyNow-button-holder">
                <button onClick={handleAddToCart} className="add-to-cart-button">
                  Add to Cart
                </button>
                <button onClick={handleBuyNow} className="buy-now-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ProductFullDetails.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  stockQty: PropTypes.number,
};

ProductFullDetails.defaultProps = {
  // imageUrl: BangkoNasad,
  name: "Sofa great",
  price: "97.0",
  rating: 3,
  color: "pink",
  size: "H 35, W 30 in.",
  stockQty: 100,
};

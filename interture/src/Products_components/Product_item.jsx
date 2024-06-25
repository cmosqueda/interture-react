import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Product_item.css";

// sample product image
// import Bangko from "./assets/bangko.svg";    //kani ang sakto na directory para sa sample product image sa imong end
import Bangko from "../Homepage/Homepage_components/assets/bangko.svg";
import { useEffect, useState } from "react";
import ProductFullDetails from "./Product_full_details";
import { handleAddToCart, popUpDescription } from "../Popup_alerts/PopupComp";
// import { icon } from "@fortawesome/fontawesome-svg-core";

export default function ProductItem({
  productId,
  name,
  imageUrl,
  price,
  color,
  size,
  // category,
  // isTrending,
  // isOnSale,
  // stockQty,
  rating,
  // onClick = () => {},
}) {
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

  // para sa pag display sa popup modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div key={productId} className="item">
        {/* dapat mo click sa image */}
        <div onClick={handleProductClick} className="item-image">
          <img src={imageUrl} className="actual-image"></img>
        </div>
        <div className="item-label">
          <div className="item-name-and-price">
            <p className="item-name">{name}</p>
            <div className="star-icon">{displayRating(rating)}</div> {/*pang display sa stars rating*/}
            <p className="item-price">P {price}</p>
          </div>
          <button onClick={handleAddToCart} className="add-to-cart">
            <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
          </button>
        </div>
      </div>

      {/* mag gamit useState */}
      {/* <ProductFullDetails></ProductFullDetails> */}
      {isModalOpen && (
        <ProductFullDetails
          productId={productId}
          name={name}
          price={price}
          size={size}
          imageUrl={imageUrl}
          color={color}
          rating={rating}
          product={ProductItem}
          closeModal={closeModal}
        ></ProductFullDetails>
      )}
    </>
  );
}

ProductItem.propTypes = {
  productId: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  rating: PropTypes.number,
  isTrending: PropTypes.bool,
  isOnSale: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
};

// ProductItem.defaultProps = {
//   imageUrl: Bangko,
//   name: "Item Price",
//   price: 199.0,
//   category: "",
//   rating: 3,
//   isTrending: false,
//   isOnSale: false,
//   stockQty: 100, //default argument, as is lang
// };

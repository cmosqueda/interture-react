// stylesheet sa cart
import { useState } from "react";
import "./Cart.css";
import Cart_added_item from "./Cart_added_item";
import BangkoSvg from "../Homepage/Homepage_components/assets/bangko.svg";
import { handleCheckOut } from "../Popup_alerts/PopupComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// ang name sa route navigation kay /cart

export default function Cart() {
  const [mgaProdukto, setMgaProdukto] = useState([
    { itemId: 1, imageUrl: BangkoSvg, name: "sofa", price: 99.0, aveRating: 4 },
    { itemId: 2, imageUrl: BangkoSvg, name: "sofa", price: 99.0, aveRating: 4 },
    { itemId: 3, imageUrl: BangkoSvg, name: "sofa", price: 99.0, aveRating: 4 },
    { itemId: 4, imageUrl: BangkoSvg, name: "sofa", price: 99.0, aveRating: 4 },
    { itemId: 5, imageUrl: BangkoSvg, name: "sofa", price: 50.0, aveRating: 4 },
    { itemId: 6, imageUrl: BangkoSvg, name: "sofa", price: 50.0, aveRating: 4 },
    { itemId: 7, imageUrl: BangkoSvg, name: "sofa", price: 50.0, aveRating: 4 },
    { itemId: 8, imageUrl: BangkoSvg, name: "sofa", price: 50.0, aveRating: 4 },
  ]);

  const removeThis = () => {
    const newCartProducts = [...mgaProdukto];
    newCartProducts.pop();
    setMgaProdukto(newCartProducts);
  };

  return (
    <>
      <section className="Cart">
        {/* added items container */}
        <div className="cart-products-container">
          {/* cart labels wrapper */}
          <div className="cart-labels-wrapper">
            <div className="cart-item-label">
              <p>Item</p>
            </div>
            <div className="price-qty-remove">
              <p>Price</p>
              <p>Quantity</p>
              <p>Remove</p>
            </div>
          </div>

          {/* diri ang product components wrapper */}
          <div className="cart-product-components-container">
            {/* {mapCartProducts} */}

            {mgaProdukto.map((kani) => {
              // console.log(kani);
              return (
                <Cart_added_item
                  key={kani.itemId}
                  itemId={kani.itemId}
                  name={kani.name}
                  price={kani.price}
                  aveRating={kani.aveRating}
                  imageUrl={kani.imageUrl}
                  deleteAction={removeThis}
                ></Cart_added_item>
              );
            })}

            {/* ipa display diri, i-map */}
          </div>
        </div>

        {/* cart summary */}
        <div className="cart-summary-container">
          <h2>Cart Summary</h2>

          {/* price and check out button container */}
          <div className="price-and-checkoutButton">
            <div className="total-price-wrapper">
              <p className="total-label">Total Price:</p>
              <p className="price-value">P 1000.0</p>
            </div>
            <button onClick={handleCheckOut} className="checkout-button">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

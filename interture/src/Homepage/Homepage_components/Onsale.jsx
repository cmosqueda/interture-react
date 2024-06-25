import { checkOnSale } from "../../Products_components/Products_list";
import "./Onsale.css";
import { useState } from "react";

export default function OnSale() {
  const isProductOnsale = useState(checkOnSale(true));

  return (
    <>
      <div className="On-sale">
        <div className="title">
          <h1>Unbeatable Deals: On-Sale Furniture</h1>
          <p>
            Redecorate without breaking the bank! Discover incredible savings on sofas, dining tables, desks, bedrooms &
            more. Shop our high-quality sale & create your dream space for less. Limited time only - shop Interture
            today!
          </p>
        </div>
        <div className="sale-prods">{isProductOnsale}</div>
      </div>
    </>
  );
}

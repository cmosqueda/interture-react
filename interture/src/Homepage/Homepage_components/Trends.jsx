import "./Trends.css";
import { useState } from "react";
import ProductsList, { checkTrending } from "../../Products_components/Products_list";

export default function Trends() {
  const isProductTrending = useState(checkTrending(true));
  return (
    <>
      <div className="Trends">
        <div className="title">
          <h1>Discover What's Hot: Trending Furniture Collections</h1>
          <p>
            Shop our handpicked collection of trending furniture. Discover chic sofas, elegant dining sets, and stylish
            storage solutions that blend modern style with timeless appeal. Be part of the latest trends – shop
            Interture now!
          </p>
        </div>
        <div className="trending-products">{isProductTrending}</div>
      </div>
    </>
  );
}

// import { useState } from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";
// import ProductsList from "../../Products_components/Products_list";

export default function Category() {
  const navigateToCategory = useNavigate();

  const goToCateg = (categ) => {
    switch (categ) {
      case "living":
        navigateToCategory("/productsCatalogLiving");
        break;
      case "dining":
        navigateToCategory("/productsCatalogDining");
        break;
      case "bed":
        navigateToCategory("/productsCatalogBed");
        break;
      default:
        navigateToCategory("/productsCatalog");
        break;
    }
  };

  return (
    <>
      <section className="Category">
        <div onClick={() => goToCateg("living")} className="living-room">
          <p>Living Room</p>
        </div>

        <div onClick={() => goToCateg("dining")} className="dining-room">
          <p>Dining Room</p>
        </div>

        <div onClick={() => goToCateg("bed")} className="bed-room">
          <p>Bed Room</p>
        </div>
      </section>
    </>
  );
}

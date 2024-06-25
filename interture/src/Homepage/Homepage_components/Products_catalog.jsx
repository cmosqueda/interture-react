import React, { useState, useRef, useEffect } from "react";
import "./Products_catalog.css";

// import ProductsList from './Products_list'   //bi, kani ang sakto niya na directory sa imong end
import ProductsList, { products } from "../../Products_components/Products_list"; //i-comment lang dayun ni na line
import ProductItem from "../../Products_components/Product_item";

// const [displayFullDetails, setDisplayFullDetails] = useState(null);

// function

// display all products
export default function AllProductsCatalog() {
  // useState function sa category
  const [isCategoryDropdownVisible, setCategoryDropdownVisible] = useState(false);

  // toggle function for category navigation dropdown mobile mode
  const toggleCategoryDropdown = () => {
    setCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  const [categoryType, setCategoryType] = useState(ProductsList);

  const [mobileDropdownButton, setMobileDropdownButton] = useState("All");

  // for mobile dropdown button and categ states
  const mobileDropdownState = (buttonState) => {
    switch (buttonState) {
      case "living":
        setMobileDropdownButton("Living");
        setCategoryType(ProductsList("living"));
        break;
      case "dining":
        setMobileDropdownButton("Dining");
        setCategoryType(ProductsList("dining"));
        break;
      case "bed":
        setMobileDropdownButton("Bed");
        setCategoryType(ProductsList("bed"));
        break;
      default:
        setMobileDropdownButton("All");
        setCategoryType(ProductsList);
        break;
    }
  };

  return (
    <>
      <section className="Catalog">
        <div className="catalog-tab">
          <div className="products-h2">
            <h2>Products</h2>
          </div>

          {/* for desktop screen */}
          <div className="catalog-navigation-desktop">
            {/* i apil nalang pud sa dropdown mechanism ni sha */}
            <button onClick={() => mobileDropdownState()}>All</button>
            <button onClick={() => mobileDropdownState("living")}>Living</button>
            <button onClick={() => mobileDropdownState("dining")}>Dining</button>
            <button onClick={() => mobileDropdownState("bed")}>Bed</button>
          </div>

          {/* for mobile screen */}
          <div className="catalog-navigation-mobile">
            <button onClick={() => toggleCategoryDropdown()} className="catalog-dropdown-button">
              {mobileDropdownButton}
            </button>
            {isCategoryDropdownVisible && (
              <div className="catalog-dropdown-selection">
                <button onClick={() => mobileDropdownState()}>All</button>
                <button onClick={() => mobileDropdownState("living")}>Living</button>
                <button onClick={() => mobileDropdownState("dining")}>Dining</button>
                <button onClick={() => mobileDropdownState("bed")}>Bed</button>
              </div>
            )}
          </div>
        </div>

        {/* All products */}
        <div className="products-wrapper">
          {categoryType}

          {}
          {/* diri dapat ang useState */}
        </div>
      </section>
    </>
  );
}

// display living products catalog
export function LivingProductsCatalog() {
  // useState function sa category
  const [isCategoryDropdownVisible, setCategoryDropdownVisible] = useState(false);

  // toggle function for category navigation dropdown mobile mode
  const toggleCategoryDropdown = () => {
    setCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  const [categoryType, setCategoryType] = useState(ProductsList("living"));

  const [mobileDropdownButton, setMobileDropdownButton] = useState("Living");

  // for mobile dropdown button and categ states
  const mobileDropdownState = (buttonState) => {
    switch (buttonState) {
      case "living":
        setMobileDropdownButton("Living");
        setCategoryType(ProductsList("living"));
        break;
      case "dining":
        setMobileDropdownButton("Dining");
        setCategoryType(ProductsList("dining"));
        break;
      case "bed":
        setMobileDropdownButton("Bed");
        setCategoryType(ProductsList("bed"));
        break;
      default:
        setMobileDropdownButton("All");
        setCategoryType(ProductsList);
        break;
    }
  };

  return (
    <>
      <section className="Catalog">
        <div className="catalog-tab">
          <div className="products-h2">
            <h2>Products</h2>
          </div>

          {/* for desktop screen */}
          <div className="catalog-navigation-desktop">
            {/* i apil nalang pud sa dropdown mechanism ni sha */}
            <button onClick={() => mobileDropdownState()}>All</button>
            <button onClick={() => mobileDropdownState("living")}>Living</button>
            <button onClick={() => mobileDropdownState("dining")}>Dining</button>
            <button onClick={() => mobileDropdownState("bed")}>Bed</button>
          </div>

          {/* for mobile screen */}
          <div className="catalog-navigation-mobile">
            <button onClick={() => toggleCategoryDropdown()} className="catalog-dropdown-button">
              {mobileDropdownButton}
            </button>
            {isCategoryDropdownVisible && (
              <div className="catalog-dropdown-selection">
                <button onClick={() => mobileDropdownState()}>All</button>
                <button onClick={() => mobileDropdownState("living")}>Living</button>
                <button onClick={() => mobileDropdownState("dining")}>Dining</button>
                <button onClick={() => mobileDropdownState("bed")}>Bed</button>
              </div>
            )}
          </div>
        </div>

        {/* All products */}
        <div className="products-wrapper">{categoryType}</div>
      </section>
    </>
  );
}

export function DiningProductsCatalog() {
  // useState function sa category
  const [isCategoryDropdownVisible, setCategoryDropdownVisible] = useState(false);

  // toggle function for category navigation dropdown mobile mode
  const toggleCategoryDropdown = () => {
    setCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  const [categoryType, setCategoryType] = useState(ProductsList("dining"));
  const [mobileDropdownButton, setMobileDropdownButton] = useState("Dining");

  // for mobile dropdown button and categ states
  const mobileDropdownState = (buttonState) => {
    switch (buttonState) {
      case "living":
        setMobileDropdownButton("Living");
        setCategoryType(ProductsList("living"));
        break;
      case "dining":
        setMobileDropdownButton("Dining");
        setCategoryType(ProductsList("dining"));
        break;
      case "bed":
        setMobileDropdownButton("Bed");
        setCategoryType(ProductsList("bed"));
        break;
      default:
        setMobileDropdownButton("All");
        setCategoryType(ProductsList);
        break;
    }
  };

  return (
    <>
      <section className="Catalog">
        <div className="catalog-tab">
          <div className="products-h2">
            <h2>Products</h2>
          </div>

          {/* for desktop screen */}
          <div className="catalog-navigation-desktop">
            {/* i apil nalang pud sa dropdown mechanism ni sha */}
            <button onClick={() => mobileDropdownState()}>All</button>
            <button onClick={() => mobileDropdownState("living")}>Living</button>
            <button onClick={() => mobileDropdownState("dining")}>Dining</button>
            <button onClick={() => mobileDropdownState("bed")}>Bed</button>
          </div>

          {/* for mobile screen */}
          <div className="catalog-navigation-mobile">
            <button onClick={() => toggleCategoryDropdown()} className="catalog-dropdown-button">
              {mobileDropdownButton}
            </button>
            {isCategoryDropdownVisible && (
              <div className="catalog-dropdown-selection">
                <button onClick={() => mobileDropdownState()}>All</button>
                <button onClick={() => mobileDropdownState("living")}>Living</button>
                <button onClick={() => mobileDropdownState("dining")}>Dining</button>
                <button onClick={() => mobileDropdownState("bed")}>Bed</button>
              </div>
            )}
          </div>
        </div>

        {/* All products */}
        <div className="products-wrapper">{categoryType}</div>
      </section>
    </>
  );
}

export function BedProductsCatalog() {
  // useState function sa category
  const [isCategoryDropdownVisible, setCategoryDropdownVisible] = useState(false);

  // toggle function for category navigation dropdown mobile mode
  const toggleCategoryDropdown = () => {
    setCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  const [categoryType, setCategoryType] = useState(ProductsList("bed"));
  const [mobileDropdownButton, setMobileDropdownButton] = useState("Bed");

  // for mobile dropdown button and categ states
  const mobileDropdownState = (buttonState) => {
    switch (buttonState) {
      case "living":
        setMobileDropdownButton("Living");
        setCategoryType(ProductsList("living"));
        break;
      case "dining":
        setMobileDropdownButton("Dining");
        setCategoryType(ProductsList("dining"));
        break;
      case "bed":
        setMobileDropdownButton("Bed");
        setCategoryType(ProductsList("bed"));
        break;
      default:
        setMobileDropdownButton("All");
        setCategoryType(ProductsList);
        break;
    }
  };

  return (
    <>
      <section className="Catalog">
        <div className="catalog-tab">
          <div className="products-h2">
            <h2>Products</h2>
          </div>

          {/* for desktop screen */}
          <div className="catalog-navigation-desktop">
            {/* i apil nalang pud sa dropdown mechanism ni sha */}
            <button onClick={() => mobileDropdownState()}>All</button>
            <button onClick={() => mobileDropdownState("living")}>Living</button>
            <button onClick={() => mobileDropdownState("dining")}>Dining</button>
            <button onClick={() => mobileDropdownState("bed")}>Bed</button>
          </div>

          {/* for mobile screen */}
          <div className="catalog-navigation-mobile">
            <button onClick={() => toggleCategoryDropdown()} className="catalog-dropdown-button">
              {mobileDropdownButton}
            </button>
            {isCategoryDropdownVisible && (
              <div className="catalog-dropdown-selection">
                <button onClick={() => mobileDropdownState()}>All</button>
                <button onClick={() => mobileDropdownState("living")}>Living</button>
                <button onClick={() => mobileDropdownState("dining")}>Dining</button>
                <button onClick={() => mobileDropdownState("bed")}>Bed</button>
              </div>
            )}
          </div>
        </div>

        {/* All products */}
        <div className="products-wrapper">{categoryType}</div>
      </section>
    </>
  );
}

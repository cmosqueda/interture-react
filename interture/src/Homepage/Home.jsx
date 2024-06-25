import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import ProductFullDetails from "../Products_components/Product_full_details";
import Category from "./Homepage_components/Category";
import Hero from "./Homepage_components/Hero";
import OnSale from "./Homepage_components/Onsale";
import AllProductsCatalog from "./Homepage_components/Products_catalog";
import Trends from "./Homepage_components/Trends";

import { useRef } from "react";

export default function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <Category></Category>
      <Trends></Trends>
      <OnSale></OnSale>
      <AllProductsCatalog></AllProductsCatalog>
      <Contact></Contact>
      {/* <ProductFullDetails></ProductFullDetails> */}
    </>
  );
}

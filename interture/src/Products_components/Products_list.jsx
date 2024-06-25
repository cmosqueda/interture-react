// import { displayProductFullDetails } from "../Homepage/Homepage_components/Products_catalog";

// diri pud i-import ang mga url sa mga bangko
// import bangko from '/chuchu'
import article from "./assets/article.svg";
import tangkula from "./assets/tangkula.svg";
import dresser from "./assets/dresser.svg";
import andrei from "./assets/andrei.svg";
import joybird from "./assets/joybird.svg";
import nomad from "./assets/nomad.svg";
import modrest from "./assets/modrest.svg";
import cube from "./assets/cube.svg";
import oak from "./assets/oak-shadow.svg";
import rausch from "./assets/Rausch.svg";
import domenick from "./assets/Domenick.svg";
import Japan from "./assets/japan-log.svg";
import maebel from "./assets/maebel.svg";
import jeweldine from "./assets/Jeweldine.svg";
import jakyrah from "./assets/Jakyrah.svg";
import baron from "./assets/baron.svg";
import dellbrook from "./assets/dellbrook.svg";
import extendable from "./assets/extendable.svg";
import greyboerum from "./assets/greyboerum.svg";
import whiteboerum from "./assets/whiteboerum.svg";
import linen from "./assets/linen.svg";
import colston from "./assets/colston.svg";
import arden from "./assets/arden.svg";
import alloush from "./assets/alloush.svg";
import oval from "./assets/oval.svg";
import cloud from "./assets/cloud.svg";
import grimaldo from "./assets/Grimaldo.svg";
import allena from "./assets/allena.svg";

import ProductItem from "./Product_item";
import { useState } from "react";
import ProductFullDetails from "./Product_full_details";

// global variables list of products
// kani ra na part imong ipang edit bi

export const products = [
  {
    productId: 1,
    imageUrl: article,
    name: "Article Sofa",
    price: 2500.0,
    category: "living",
    isTrending: true,
    isOnSale: false,
    color: "green",
    stockQty: 100,
    size: "H L",
    rating: 3,
  },
  {
    productId: 2,
    imageUrl: tangkula,
    name: "Tangkula",
    price: 500.0,
    category: "living",
    isTrending: false,
    isOnSale: false,
    color: "brown",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 3,
    imageUrl: baron,
    name: "Baron Dining Table",
    price: 2355.0,
    category: "dining",
    isTrending: false,
    isOnSale: false,
    color: "brown",
    stockQty: 100,
    size: "H L",
    rating: 5,
  },
  {
    productId: 4,
    imageUrl: dresser,
    name: "Bedroom Dresser",
    price: 4500.0,
    category: "bed",
    isTrending: false,
    isOnSale: false,
    color: "brown",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 5,
    imageUrl: andrei,
    name: "Andrei Upholstered Panel Bed",
    price: 5999.0,
    category: "bed",
    isTrending: true,
    isOnSale: false,
    color: "black, white",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 6,
    imageUrl: dellbrook,
    name: "Dellbrook Wood Dining Table",
    price: 1770.0,
    category: "dining",
    isTrending: false,
    isOnSale: false,
    color: "brown",
    stockQty: 100,
    size: "H L",
    rating: 5,
  },
  {
    productId: 7,
    imageUrl: extendable,
    name: "Extendable Dining Table",
    price: 999.0,
    category: "dining",
    isTrending: false,
    isOnSale: false,
    color: "white",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 8,
    imageUrl: joybird,
    name: "Joybird Sofa",
    price: 4400.0,
    category: "living",
    isTrending: false,
    isOnSale: false,
    color: "blue",
    stockQty: 100,
    size: "H L",
    rating: 3,
  },
  {
    productId: 9,
    imageUrl: nomad,
    name: " Nomad Sofa",
    price: 6699.0,
    category: "living",
    isTrending: true,
    isOnSale: false,
    color: "black",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 10,
    imageUrl: alloush,
    name: "Alloush Wood Dining Table",
    price: 9599.0,
    category: "dining",
    isTrending: false,
    isOnSale: false,
    color: "ebony",
    stockQty: 100,
    size: "H L",
    rating: 3,
  },
  {
    productId: 11,
    imageUrl: rausch,
    name: "Rausch Upholstered Bed",
    price: 7500.0,
    category: "bed",
    isTrending: false,
    isOnSale: false,
    color: "blue, black",
    stockQty: 100,
    size: "H L",
    rating: 3,
  },
  {
    productId: 12,
    imageUrl: domenick,
    name: "Domenick Bedroom",
    price: 4599.0,
    category: "bed",
    isOnSale: true,
    isTrending: false,
    color: "cream, brown",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 13,
    imageUrl: oval,
    name: "Oval Black Dining Table",
    price: 1000.0,
    category: "dining",
    isTrending: true,
    isOnSale: true,
    color: "black",
    stockQty: 100,
    size: "H L",
    rating: 5,
  },
  {
    productId: 14,
    imageUrl: grimaldo,
    name: "Grimaldo Dining Table",
    price: 9899.0,
    category: "dining",
    isTrending: true,
    isOnSale: false,
    color: "brown, black",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 15,
    imageUrl: modrest,
    name: "Modrest TV table",
    price: 1398.0,
    category: "living",
    isTrending: false,
    isOnSale: true,
    color: "brown",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 16,
    imageUrl: cube,
    name: "Cube Shelf",
    price: 4150.0,
    category: "living",
    isTrending: false,
    isOnSale: false,
    color: "brown",
    stockQty: 100,
    size: "H L",
    rating: 3,
  },
  {
    productId: 17,
    imageUrl: allena,
    name: "Allena Tufted Chair",
    price: 1999.0,
    category: "dining",
    isTrending: false,
    isOnSale: false,
    color: "white",
    stockQty: 100,
    size: "H L",
    rating: 3,
  },
  {
    productId: 18,
    imageUrl: Japan,
    name: "Japan log Mirror Table",
    price: 1500.0,
    category: "bed",
    isTrending: false,
    isOnSale: true,
    color: "beige",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 19,
    imageUrl: maebel,
    name: "Maebel Drawer Dresser with Mirror",
    price: 8889.0,
    category: "bed",
    isTrending: true,
    isOnSale: false,
    color: "dark, brown",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 20,
    imageUrl: greyboerum,
    name: "Grey Boerum Dining Chair",
    price: 4700.0,
    category: "dining",
    isTrending: false,
    isOnSale: false,
    color: "grey",
    stockQty: 100,
    size: "H L",
    rating: 5,
  },
  {
    productId: 21,
    imageUrl: whiteboerum,
    name: "White Boerum Dining Chair",
    price: 2800.0,
    category: "dining",
    isTrending: false,
    isOnSale: false,
    color: "white",
    stockQty: 100,
    size: "H L",
    rating: 5,
  },
  {
    productId: 22,
    imageUrl: linen,
    name: "Linen Dining Chair",
    price: 9500.0,
    category: "dining",
    isTrending: false,
    isOnSale: false,
    color: "orange",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 23,
    imageUrl: colston,
    name: "Colston Dining Chair",
    price: 6999.0,
    category: "dining",
    isTrending: false,
    isOnSale: false,
    color: "earth",
    stockQty: 100,
    size: "H L",
    rating: 5,
  },
  {
    productId: 24,
    imageUrl: arden,
    name: "Arden Natural Upholstered Chair",
    price: 5000.0,
    category: "dining",
    isTrending: false,
    isOnSale: true,
    color: "cream",
    stockQty: 100,
    size: "H L",
    rating: 5,
  },
  {
    productId: 25,
    imageUrl: cloud,
    name: "Cloud Sofa",
    price: 3000.0,
    category: "living",
    isTrending: false,
    isOnSale: true,
    color: "cream",
    stockQty: 100,
    size: "H L",
    rating: 5,
  },
  {
    productId: 26,
    imageUrl: oak,
    name: "Oak Shadow",
    price: 8456.0,
    category: "living",
    isTrending: false,
    isOnSale: false,
    color: "light oak",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 27,
    imageUrl: jeweldine,
    name: "Jeweldine Nightstand",
    price: 2300.0,
    category: "bed",
    isTrending: false,
    isOnSale: false,
    color: "dark oak",
    stockQty: 100,
    size: "H L",
    rating: 4,
  },
  {
    productId: 28,
    imageUrl: jakyrah,
    name: "Jakyrah Twin 3 Bedroom Set",
    price: 9999.0,
    category: "bed",
    isTrending: false,
    isOnSale: false,
    color: "pink",
    stockQty: 100,
    size: "H L",
    rating: 5,
  },
];

export default function ProductsList(categ) {
  // const { selectProduct, productClick, closePopup } = displayProductFullDetails();

  if (categ == "living") {
    const selectLiving = products.filter((product) => product.category == "living");

    const livingProducts = selectLiving.map((product) => (
      <ProductItem
        key={product.productId}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        rating={product.rating}
        color={product.color}
        // size={prod}
        // onClick={() => productClick(product)}
        // onClick={() => }
      />
    ));

    return <>{livingProducts}</>;
  } else if (categ == "dining") {
    const selectDining = products.filter((product) => product.category == "dining");

    const diningProducts = selectDining.map((product) => (
      <ProductItem
        key={product.productId}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        rating={product.rating}
        color={product.color}
      />
    ));

    return <>{diningProducts}</>;
  } else if (categ == "bed") {
    const selectBed = products.filter((product) => product.category == "bed");

    const bedProducts = selectBed.map((product) => (
      <ProductItem
        key={product.productId}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        rating={product.rating}
        color={product.color}
      />
    ));

    return <>{bedProducts}</>;
  } else {
    const productListMap = products.map((product) => (
      <ProductItem
        key={product.productId}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        rating={product.rating}
        color={product.color}
      />
    ));

    return <>{productListMap}</>;
  }
}

export function checkTrending(isTrending) {
  if (isTrending) {
    const trendingProducts = products.filter((product) => product.isTrending == true);

    const productListMap = trendingProducts.map((product) => (
      <ProductItem
        key={product.productId}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        rating={product.rating}
        color={product.color}
      />
    ));

    return <>{productListMap}</>;
  }
}

export function checkOnSale(isOnSale) {
  if (isOnSale) {
    const onSaleProducts = products.filter((product) => product.isOnSale == true);

    const productListMap = onSaleProducts.map((product) => (
      <ProductItem
        key={product.productId}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        rating={product.rating}
        color={product.color}
      />
    ));

    return <>{productListMap}</>;
  }
}

import "./Hero.css";
import { Navigate, useNavigate } from "react-router-dom";
import BangkoSvg from "./assets/bangko.svg";

export default function Hero() {
  // go to products catalog

  const navigateToProducts = useNavigate();

  const goToProducts = () => {
    navigateToProducts("/productsCatalog");
  };

  return (
    <>
      <section className="Hero">
        <div className="text-wrapper">
          <h1>Elevate Your Space, Embrace Comfort.</h1>
          <p>
            Find high-quality furniture for every room, from living room sets to outdoor essentials. Explore unique
            pieces crafted by artisans, and enjoy exclusive deals with fast delivery. Shop Interture - where home meets
            happy.
          </p>
          <button onClick={goToProducts} className="shop-now-btn">
            Shop Now
          </button>
        </div>
        <div className="hero-img-wrapper">
          <img src={BangkoSvg} alt="Bangko color pink" className="bangko" />
        </div>
      </section>
    </>
  );
}

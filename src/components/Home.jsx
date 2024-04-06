import React from "react";
import slides from "../data/carouselData";
import Carousel from "./Carousel";
import "./Carousel.css";
import ProductList from "./Products";
import Category from "./Category";
import img4 from "../images/cat/4.png";

const Home = () => {
  return (
    <div className="home">
      <Carousel data={slides.slides} />
      <div className="new-collection">
        <h1 className="home-txt">Nouvelle Collection</h1>
        <ProductList />
      </div>
      <div className="category">
        <h1 className="home-txt">Nos Catégories</h1>
        <Category />
      </div>
      <div class="banner">
        <p class="banner-text">Adios</p>
        <img src={img4} alt="pica" class="banner-img" />
        <p class="banner-text">Accessoires</p>
      </div>
    </div>
  );
};

export default Home;

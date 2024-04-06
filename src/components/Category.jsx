import React from "react";
import './Category.css'
import categoryData from "../data/categoryData";
import { Link } from "react-router-dom";

const images = categoryData
const Category = () => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <Link to={image.linkTo} key={image.id} className="image-link">
          <img
            src={image.imageUrl}
            alt={`CategoryImage ${image.id}`}
            className="gallery-image"
          />
          <div className="overlay-text">{image.txt}</div>
        </Link>
      ))}
    </div>
  );
};

export default Category;

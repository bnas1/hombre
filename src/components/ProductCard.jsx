import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { RiStarLine as CiStar } from "react-icons/ri";
import "./ProductCard.css"; // Importing CSS for styling

const ProductCard = ({ id, name, price, imageUrl }) => {
  const [rating, setRating] = useState(() => {
    const savedRating = localStorage.getItem(`rating-${id}`);
    return savedRating ? parseInt(savedRating, 10) : 0;
  });

  // Handle rating change
  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  // Render stars based on current rating 
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star key={i} filled={i <= rating} onClick={() => handleRating(i)} />
      );
    }
    return stars;
  };

  // Update localStorage whenever the rating changes
  useEffect(() => {
    localStorage.setItem(`rating-${id}`, rating.toString());
  }, [id, rating]);

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <div className="rating">{renderStars()}</div>
        <p className="price">{price} TND</p>
      </div>
    </div>
  );
};

const Star = ({ filled, onClick }) => {
  const StarIcon = filled ? FaStar : CiStar;
  return <StarIcon className="star-icon" onClick={onClick} />;
};

export default ProductCard;

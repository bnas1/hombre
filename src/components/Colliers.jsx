import React, { useState, useEffect } from 'react';
import './Colliers.css'; // Import your CSS file for styling
import { FaSortAmountDown, FaSortAmountUp, FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import icons
import { FaStar } from 'react-icons/fa'; // Import star icon
import { RiStarLine } from 'react-icons/ri'; // Import empty star icon
import { AiFillStar } from 'react-icons/ai'; // Import filled star icon

const products = [
  { id: 1, name: 'Product 1', category: 'Category A', price: 50, color: 'Red', imageUrl: 'http://localhost:3000/static/media/pr1.5756b91bb7690a06923c.jpg', rating: 4 },
  { id: 2, name: 'Product 2', category: 'Category B', price: 80, color: 'Blue', imageUrl: 'http://localhost:3000/static/media/pr1.5756b91bb7690a06923c.jpg', rating: 3 },
  { id: 3, name: 'Product 3', category: 'Category A', price: 65, color: 'Green', imageUrl: 'http://localhost:3000/static/media/pr1.5756b91bb7690a06923c.jpg', rating: 5 },
  { id: 4, name: 'Product 4', category: 'Category C', price: 120, color: 'Yellow', imageUrl: 'http://localhost:3000/static/media/pr1.5756b91bb7690a06923c.jpg', rating: 4.5 },
  { id: 5, name: 'Product 5', category: 'Category C', price: 10, color: 'Yellow', imageUrl: 'http://localhost:3000/static/media/pr1.5756b91bb7690a06923c.jpg', rating: 4.5 },
];

const Colliers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ratings, setRatings] = useState(() => {
    const storedRatings = JSON.parse(localStorage.getItem('ratings'));
    return storedRatings || {};
  });
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    localStorage.setItem('ratings', JSON.stringify(ratings));
  }, [ratings]);

  useEffect(() => {
    if (sortOption === 'price') {
      const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
      setSortedProducts(sortedByPrice);
    } else if (sortOption === 'popularity') {
    } else if (sortOption === 'rating') {
      const sortedByRating = [...products].sort((a, b) => b.rating - a.rating);
      setSortedProducts(sortedByRating);
    } else if (sortOption === 'sale') {
    } else {
      setSortedProducts(products);
    }
  }, [sortOption]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleStarClick = (index, starIndex) => {
    const newRatings = { ...ratings };
    newRatings[index] = starIndex + 1;
    setRatings(newRatings);
  };

  const renderStars = (index) => {
    const rating = ratings[index];
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <AiFillStar
            key={i}
            className="star-filled"
            onClick={() => handleStarClick(index, i)}
          />
        );
      } else {
        stars.push(
          <RiStarLine
            key={i}
            className="star"
            onClick={() => handleStarClick(index, i)}
          />
        );
      }
    }
    return stars;
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="container">
      <div className="sorting-dropdown">
        <select onChange={handleSortChange} value={sortOption}>
          <option value="">Default Sorting</option>
          <option value="price">Sort by Price</option>
          <option value="popularity">Sort by Popularity</option>
          <option value="rating">Sort by Rating</option>
          <option value="sale">Sort by Sale</option>
        </select>
      </div>
      <div className="colliers">
        {sortedProducts.map((product, index) => (
          <div
            className="product-card"
            key={product.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            {hoveredIndex === index && (
              <div className="hover-icons">
                <FaHeart className="heart-icon" />
                <FaShoppingCart className="cart-icon" />
              </div>
            )}
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <div className="rating">{renderStars(index)}</div>
              <p className="product-price">{product.price} TND</p>
              <p className="product-color">Color: {product.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colliers;

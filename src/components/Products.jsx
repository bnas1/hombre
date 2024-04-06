import React from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products";

const products = productsData;
const ProductList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;

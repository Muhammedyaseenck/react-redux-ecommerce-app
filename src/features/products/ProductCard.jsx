import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} height="150" />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      <p className="category-tag">{product.category}</p>
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
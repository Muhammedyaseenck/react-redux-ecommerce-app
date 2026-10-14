import React from "react";
import CategoryFilter from "../features/categories/CategoryFilter";
import ProductList from "../features/products/ProductList";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Ecommerce Store</h1>
      <CategoryFilter />
      <ProductList />
    </div>
  );
};

export default Home;
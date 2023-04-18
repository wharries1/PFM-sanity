import React from "react";
import { Product } from "../components";
const Featured = ({ products }) => {
  return (
    <div className="products-heading">
      <div className="products-container">
        {products
          .filter((item) => item.featured === true)
          .sort(() => Math.random() - 0.5) // randomize the order of the products
          .map((item) => (
            <Product key={item._id} product={item} />
          ))}
      </div>
    </div>
  );
};

export default Featured;

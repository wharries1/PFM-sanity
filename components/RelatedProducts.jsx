import React from "react";
import { Product } from "../components";
const RelatedProducts = ({ products }) => {
  return (
    <div className="products-heading">
      
      <div className="products-container">
        {products
          .slice(0, 4) // select the first 4 items
          .map((item) => (
            <Product key={item._id} product={item} />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

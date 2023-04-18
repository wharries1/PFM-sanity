import React from "react";
import { HeadingItem } from "../components";
import { urlFor, client } from "../lib/client";
const Heading = ({ headingData }) => {
  return (
    <div className="products-heading">
      <h2>Sustainability</h2>
    <div className="image-grid-container">
      <div className="image-grid-row">
        {headingData.map((item) => (
          <div className="image-grid-column" key={item._id}>
            <img
              src={urlFor(item.image)}
              className="heading-image"
              alt=""
            />
            <h3 className="image-grid-title">{item.header}</h3>
            <p className="image-grid-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Heading;

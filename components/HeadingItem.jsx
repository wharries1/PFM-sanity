import React from 'react';
import { urlFor, client } from "../lib/client";

const HeadingItem = ({item: {image, header, description} }) => {
  return (
    <div>
        <div className="heading-card">
          <img src={urlFor(image)}
          width={400}
          height={250}
          className="heading-image"
          alt="" />
          <h4 className="heading-title">{header}</h4>
          
        </div>
    </div>
  )
}

export default HeadingItem
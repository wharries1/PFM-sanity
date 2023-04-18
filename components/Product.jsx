import React from 'react';
import { useRouter } from 'next/router';
import { urlFor, client } from "../lib/client";

const Product = ({product: {image, name, slug, price} }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${slug.current}`);
  }

  return (
    <div onClick={handleClick}>
      <div className="product-card" >
        <img src={urlFor(image && image[0])}
        width={300}
        height={300}
        className="product-image"
        alt="" />
        <p className="product-name">{name}</p>
        <p className="product-price">£{price}</p>
      </div>
    </div>
  )
}

export default Product;
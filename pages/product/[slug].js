import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import { Featured } from "../../components";
import { useStateContext } from "../../context/StateContext";
import RelatedProducts from "../../components/RelatedProducts";

const ProductDetails = ({ product }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart, products } =
    useStateContext();
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="product-detail-image">
            <img src={urlFor(image && image[index])} />
          </div>
          {/* <div className="small-images-container">
            {image?.map((item, i) => (
              <img key={i} src={urlFor(item)} className="" onMouseEnter="" />
            ))}
          </div> */}
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">£{price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="products-heading">
        <h2>You might also like...</h2>
      </div>
      <RelatedProducts products={products} />
      <Featured products={products} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  return {
    props: { products, product },
  };
};
export default ProductDetails;

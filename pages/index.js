import React from "react";
import { Product, Featured, Footer, MainCarousel, Heading } from "../components";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { client } from "../lib/client";

const Home = ({ products, headingData, sliderData }) => (
  <div>
    
    <MainCarousel images={sliderData}/>
    <Heading headingData={headingData}/>
    <div className="products-heading">
    <h2>Our Featured Products</h2>
    </div>
    
    <Featured products={products}/>
    
    <Footer />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  

  const Bannerquery = '*[_type == "banner"]';
  const bannerData = await client.fetch(Bannerquery);

  const Sliderquery = '*[_type == "slider"]';
  const sliderData = await client.fetch(Sliderquery);

  const Headingquery = '*[_type == "heading"]';
  const headingData = await client.fetch(Headingquery);
  
  return {
    props: { products, bannerData, sliderData, headingData },
  };
};

export default Home;

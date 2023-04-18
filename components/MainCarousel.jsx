import React from "react";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { urlFor, client } from "../lib/client";
const MainCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ maxWidth: "100vw" }}>
    <Slider {...settings}>
      {images?.map((slider, index) =>
        slider.image?.map((image, index) => (
          <div key={index}>
            <img src={urlFor(image.asset)} alt={`Slider ${index}`} />
          </div>
        ))
      )}
      <div>
            <div className="overlay">
              <div className="overlay-content"
              >
                <h2>Protect - Respect - Enjoy</h2>
                <p>Handmade goods, designed and made in Pembrokeshire, West-Wales.  Inspired by and with love and respect for our magnificent coastline and all that inhabit it.</p>
              </div>
            </div>
          </div>
    </Slider>
    </div>
  );
};

export default MainCarousel;

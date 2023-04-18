import React from 'react'
import Link from 'next/link'
import {urlFor, client } from "../lib/client";
const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
        <div>
            <p className="beats-solo">
               {heroBanner.smallText}
            </p>
            <h3>
            {heroBanner.midText}
            </h3>
            <h1>
            {heroBanner.largeText1}
            </h1>
            <img src={urlFor(heroBanner.image)} alt="etching" className="hero-banner-image"/>
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type="button">
                        {heroBanner.buttonText}
                    </button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>Description</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HeroBanner
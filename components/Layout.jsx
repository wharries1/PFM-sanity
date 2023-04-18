import React from 'react';
import Head from 'next/head';
import Navbar  from './Navbar';
import Footer from './Footer'
import { client } from "../lib/client";
const Layout = ({children, products}) => {
  return (
    <div className="layout">
      <Head>
        <title>PFM</title>
        <link rel="stylesheet" href="/fonts.css" />
      </Head>
      <header>
        <Navbar products={products}/>
      </header>
      <main className="main-container">
        {children}
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}


export default Layout
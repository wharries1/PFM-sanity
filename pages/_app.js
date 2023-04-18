import React from "react";
import { Layout } from "../components";
import "../styles/globals.css";
import "../styles/checkout.css"
import "../styles/about.css"
import "../styles/ContactForm.css"
import "../styles/ContactPage.css"
import { StateContext } from "../context/StateContext";
import { client } from "../lib/client";
import {Toaster} from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout products={pageProps.products}>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}


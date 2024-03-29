import React, { useRef, useState } from "react";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import getStripe from "../lib/getStripe";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineClose,
} from "react-icons/ai";
function CheckoutForm() {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();
  console.log(cartItems);

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    console.log(response);

    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">
        <button
          type="button"
          className="checkout-heading"
          onClick={() => setShowCart(false)}
        >
          <span className="heading">Your Cart</span>
          <span className="checkout-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="checkout-product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              
                <div
                  className="checkout-product"
                  key={item._id}
                  onClick={() => setShowCart(false)}
                >
                  <Link href={`/product/${item?.slug.current}`}>
                  <img
                    src={urlFor(item?.image[0])}
                    className="cart-product-image"
                  />
                  </Link>
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>£{item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, "dec")
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num" onClick="">
                            {item.quantity}
                          </span>
                          <span
                            className="plus"
                            onClick={() =>
                              toggleCartItemQuanitity(item._id, "inc")
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        {/* <TiDeleteOutline /> */}
                      </button>
                    </div>
                  </div>
                </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="checkout-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>£{totalPrice}</h3>
            </div>
            <div className="make-payment">
              <div className="total"></div>
              <div className="checkout-btn-container">
                <button
                  type="button"
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Proceed To Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutForm;

import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2022/CE-SM/Outlet/TR21_OUTLET_STORE_DEKSTOP_HEADER_1500x180_w1.jpg"
          alt="banner"
        />
        <div>
          <h2 className="checkout__title">Your Shooping Basket</h2>
        </div>
        <div className="checkout__items">
          <div className="checkout__item">
            <img
              className="checkout__itemImage"
              src="https://images-na.ssl-images-amazon.com/images/I/51+06GSt5xL._AC_SY460_.jpg"
              alt=""
            />
            <div className="checkout__itemDetails">
              <p className="checkout_itemTitle">Title of the item</p>
              <p className="checkout__itemPrice">123.45</p>
              <div className="checkout__itemRating">
                <p>⭐️</p>
              </div>
              <button className="checkout_itemRemoveButton">
                Remove From Basket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

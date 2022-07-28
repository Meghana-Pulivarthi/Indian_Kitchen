import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Productslist from "./productlist";
import Routes from "./routes";
import App from "./app";
const Cart = ({ cartItems }) => {
    console.log("cart items in cart", cartItems);
    return (
        <>
            <h1>Cart</h1>
            <div className="cartitemheader">Your Cart </div>

            <div className="cartitems">
                {cartItems?.length === 0 && (
                    <div className="emptycart">No items in your cart</div>
                )}
                {cartItems?.productItems.map((item) => {
                    return (
                        <div className="itemimage" key={item.id}>
                            <img src={item.image} alt={item.name} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default Cart;

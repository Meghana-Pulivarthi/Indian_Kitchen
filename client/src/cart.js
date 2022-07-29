import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Productslist from "./productlist";
import Routes from "./routes";
import App from "./app";
const Cart = ({
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handlecartclearance,
}) => {
    console.log("cart items in cart", cartItems);

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );
    return (
        <>
            <div className="clearcart">
                {cartItems?.length >=1 && (
                    <button className="clearbtn" onClick={handlecartclearance}>Clear Cart</button>
                )}
            </div>
            <div className="cartitemheader">Your Cart </div>

            <div className="cartitems">
                {cartItems?.length === 0 && (
                    <div className="emptycart">No items in your cart</div>
                )}
                {cartItems?.map((item) => {
                    return (
                        <div className="cartlist">
                            <div key={item.id}>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cartitemname">{item.name}</div>
                            <div className="cartitemfunction">
                                <button
                                    className="cartadd"
                                    onClick={() => handleAddProduct(item)}
                                >
                                    +
                                </button>
                                <button
                                    className="cartremove"
                                    onClick={() => handleRemoveProduct(item)}
                                >
                                    -
                                </button>
                            </div>
                            <div className="cartitemprice">
                                {item.quantity}*{item.price} €
                            </div>
                        </div>
                    );
                })}
                <div className="totalprice">
                    Total price&nbsp;
                    <div className="carttotal">{totalPrice} €</div>
                </div>
            </div>
        </>
    );
};
export default Cart;

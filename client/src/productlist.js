import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./header";
import Routes from "./routes";
import data from "./data.js";
import Products from "./products";
// import Payment from "./payment"
import Cart from "./cart";
const Productslist = () => {
    const { productItems } = data;
    const [cartItems, setCartItems] = useState([]);
    const handleAddProduct = (product) => {
        const productExits = cartItems.find((item) => item.id === product.id);
        if (productExits) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...productExits,
                              quantity: productExits.quantity + 1,
                          }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const handleRemoveProduct = (product) => {
        const productExits = cartItems.find((item) => item.id === product.id);
        if (productExits.quantity == 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id == product.id
                        ? {
                              ...productExits,
                              quantity: productExits.quantity - 1,
                          }
                        : item
                )
            );
        }
    };
    const handlecartclearance = () => {
        setCartItems([]);
        console.log("handle cart clear");
    };

    // console.log("data in product list", data);
    // console.log("productItems in product list", productItems);
    // console.log("cart items in productlist", cartItems);
    return (
        <div>
            {/* <Router>
                <Header />
            </Router> */}
            <Router>
                <Routes
                    productItems={productItems}
                    cartItems={cartItems}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                    handlecartclearance={handlecartclearance}
                />
            </Router>
            <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handlecartclearance={handlecartclearance}
            
            />
            <br></br>
            {/* <Payment/> */}
            <footer className="footerWelcome">
                <p>
                    © Copyright 2022 by Meghana Pulivarthi. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};
export default Productslist;

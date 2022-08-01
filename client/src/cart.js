import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Productslist from "./productlist";
import Routes from "./routes";
import App from "./app";
import Payment from "./payment";
import Pay from "./pay";
const Cart = (props) => {
    const {
        cartItems,
        handleAddProduct,
        handleRemoveProduct,
        handlecartclearance,
        setTotalPrice,
    } = props;

    // console.log("props cart", props);
    // console.log("cart items in cart", cartItems);
    // console.log("handleaddproducts yyy", handleAddProduct);
    //   const [query, setQuery] = useState(cartItems);
    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );
    useEffect(() => {
        setTotalPrice(totalPrice);
    },[totalPrice]);

    return (
        <>
            <div className="checkout">
                <div className="cartitems">
                    {cartItems?.length === 0 && (
                        <div className="emptycart">No items in your cart</div>
                    )}

                    {cartItems?.map((item) => {
                        return (
                            <div className="cartlist" key={item.id}>
                                <div>
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
                                        onClick={() =>
                                            handleRemoveProduct(item)
                                        }
                                    >
                                        -
                                    </button>
                                </div>
                                <div className="cartitemprice">
                                    {item.quantity * item.price} €
                                </div>
                            </div>
                        );
                    })}

                    <div className="totalprice">
                        Total price&nbsp;
                        <div className="carttotal">{totalPrice} €</div>
                    </div>
                </div>
                {/* <h1>{totalPrice}</h1> 
                     <Payment totalPrice={props.totalPrice}/> */}
                <div className="clearcart">
                    {cartItems?.length >= 1 && (
                        <button
                            className="clearbtn"
                            onClick={handlecartclearance}
                        >
                            Clear Cart
                        </button>
                    )}
                </div>
                <Link to="/payment">
                    <div className="paycart">
                        {cartItems?.length >= 1 && (
                            <button className="paybtn">Pay</button>
                        )}
                    </div>
                </Link>
            </div>
        </>
    );
};
export default Cart;

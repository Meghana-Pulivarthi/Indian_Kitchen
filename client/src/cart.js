import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";

import Productslist from "./productlist";
import Routes from "./routes";
import App from "./app";

const Cart = (props) => {
    const {
        cartItems,
        handleAddProduct,
        handleRemoveProduct,
        handlecartclearance,
    } = props;
    // console.log("props cart", props);
    // console.log("cart items in cart", cartItems);
    // console.log("handleaddproducts yyy", handleAddProduct);
    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );
      const [data, setData] = useState("");

      const payment = () => {
          setData("This is data ");
          data=totalPrice;
          console.log("payment",data)
      };

    return (
        <>
            {" "}
            <div className="checkout">
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
                    <button className="paybtn" onClick={() => payment()}>Pay</button>
                </div>
            </div>
        </>
    );
};
export default Cart;

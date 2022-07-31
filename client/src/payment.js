import React from "react";
import ReactDOM from "react-dom";
import Cart from "./cart";
const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
export default class Payment extends React.Component {
    createOrder(data, actions) {
        // console.log("total price in cart", totalPrice);
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "0.01",
                    },
                },
            ],
        });
    }
    onApprove(data, actions) {
        return actions.order.capture();
    }
    render() {
        return (
            <div className="pay">
                <br></br>
                <h3 className="payinfo">Choose any of the payment options {this.props.totalPrice}</h3>
                <br></br>
                <div className="paybtn">
                    {" "}
                    <PayPalButton
                        createOrder={(data, actions) =>
                            this.createOrder(data, actions)
                        }
                        onApprove={(data, actions) =>
                            this.onApprove(data, actions)
                        }
                    />
                </div>
                <footer className="footerWelcome">
                    <p>
                        © Copyright 2022 by Meghana Pulivarthi. All Rights
                        Reserved.
                    </p>
                </footer>
            </div>
        );
    }
}

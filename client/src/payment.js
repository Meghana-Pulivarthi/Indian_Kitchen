import React from "react";
import ReactDOM from "react-dom";
import Cart from "./cart";
const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
export default class Payment extends React.Component {
    
    constructor(props) { 
        super(props);
        this.state = {
            totalPrice: `${this.props.totalPrice}`,
        };
        this.createOrder = this.createOrder.bind(this);
    }
    createOrder(data, actions) {
        console.log("about to create the order");
        console.log("state in payment", this.state);
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: this.state.totalPrice,
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
                <h3 className="payinfo">
                    Choose any of the payment options totalPrice=
                    {this.props.totalPrice}
                </h3>
                <br></br>
                <div className="paybutton">
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

import React from "react";
import ReactDOM from "react-dom";
const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
export default class Payment extends React.Component {
    createOrder(data, actions) {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: this.props.payment,
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
                <h3 className="payinfo">Choose any of the payment options </h3>
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

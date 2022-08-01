import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";

import Productslist from "./productlist";
import Routes from "./routes";
import App from "./app";
import Payment from "./payment";
import Cart from "./cart"
const Pay = (props) => {
        const {handlePay}=props;
        console.log("props in pay ", props)

    return (
        <>
            <h1>I am the pay component </h1>
            <Payment handlePay={handlePay} />
            <h1>{handlePay}</h1>
        </>
    );
};
export default Pay;

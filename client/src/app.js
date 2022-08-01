import React from "react";
import { Component } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import data from "./data.js";
import Header from "/Users/akarshseggemu/Desktop/finalproject/Indian_Kitchen/client/src/header.js";
import FindProducts from "./findproducts";
import About from "./about";
import Productslist from "./productlist";
import Routes from "./routes";
import Cart from "./cart";
import Payment from "./payment";
import Pay from "./pay";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            ...data,
            cartItems: [],
            totalPrice: 0,
        };
        // console.log("data in app", data);
        // console.log("tis.state in app", this.state);
        // console.log("cart items in app", this.state.cartItems);
        this.setTotalPrice = this.setTotalPrice.bind(this);
    }
    componentDidMount() {
        console.log("App mounted");
    }
    setTotalPrice(totalPrice) {
        this.setState({
            totalPrice: totalPrice,
        });
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Route path="/">
                        <Header />
                    </Route>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/find">
                            <Productslist setTotalPrice={this.setTotalPrice} />
                        </Route>
                        <Route path="/payment">
                            <Payment totalPrice={this.state.totalPrice} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

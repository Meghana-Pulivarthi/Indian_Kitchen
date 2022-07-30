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
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            ...data,
            cartItems: [],
        };
        // console.log("data in app", data);
        // console.log("tis.state in app", this.state);
        // console.log("cart items in app", this.state.cartItems);
    }
    componentDidMount() {
        console.log("App mounted");
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
                            <Productslist />
                        </Route>
                        <Route path="/payment">
                            {/* <Cart cartItems={this.state.cartItems} /> */}
                            <Payment />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

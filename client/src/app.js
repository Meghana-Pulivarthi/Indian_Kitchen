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
import Cartlist from "./cartlist";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cartItems:data,
        };
    }
    componentDidMount() {
        console.log("App mounted");
    }
add(){
    
}
    render() {
        return (
            <>
                <BrowserRouter>
                    <Route exact path="/">
                        <Header />
                    </Route>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/find">
                            <Productslist />
                        </Route>
                        <Route path="/login">
                            <Header />
                        </Route>
                        <Route path="/cart">
                            <Cart cartItems={this.state.cartItems} />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

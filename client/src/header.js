import React from "react";
import { Component } from "react";

import { Link } from "react-router-dom";
import Logo from "./logo";
import FindProducts from "./findproducts";
import About from "./about";
import Productslist from "./productlist";
import Routes from "./routes";
import Products from "./products";
import Cart from "./cart";
export default class Header extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <div>
                        <Logo />
                    </div>
                    <p className="mainheading">The Great Indian Kitchen</p>
                    {" "}
                    <div className="linksinheader">
                        <Link to="/about">About&nbsp;</Link>{" "}
                        <Link to="/find">Shop&nbsp;</Link>{" "}
                        <a href="/logout">Logout&nbsp;</a>{" "}
                        <Link to="/payment">Payment&nbsp;</Link>{" "}
                    </div>
                    
                </header>
            </>
        );
    }
}

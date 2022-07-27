import React from "react";
import { Component } from "react";

import { Link } from "react-router-dom";
import Logo from "./logo";
import FindProducts from "./findproducts";
import About from "./about";
export default class Header extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        console.log("Header mounted");
    }

    render() {
        return (
            <>
                <header className="header">
                    <div>
                        <Logo />
                    </div>
                    <div className="linksinheader">
                        <Link to="/about">About&nbsp;</Link>
                        <Link to="/find">Shop&nbsp;</Link>
                        <a href="/logout">Logout&nbsp;</a>
                        <Link to="/cart">🛒&nbsp;</Link>
                    </div>
                </header>
            </>
        );
    }
}

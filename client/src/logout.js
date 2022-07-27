import React from "react";
import { Component } from "react";

import { BrowserRouter, Route, Link} from "react-router-dom";
import Login from "./login";
export default class Logout extends Component {
    componentDidMount() {
        console.log("Logout mounted");
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Route exact path="/logout">
                        {/* <Link to="/login"> */}
                            <Login />
                        {/* </Link> */}
                        
                    </Route>
                </BrowserRouter>
            </>
        );
    }
}

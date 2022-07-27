import { useState, useEffect } from "react";
import { Component } from "react";

import data from "/Users/akarshseggemu/Desktop/finalproject/Indian_Kitchen/server/data.js";

export default class Productslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
        };
    }
    render() {
        return (
            <div>
                <Account user={this.state.data} />
            </div>
        );
    }
}

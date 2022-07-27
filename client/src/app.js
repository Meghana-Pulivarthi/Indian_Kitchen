import React from "react";
import {Component} from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import data from "/Users/akarshseggemu/Desktop/finalproject/Indian_Kitchen/server/data.js";
import Header from "/Users/akarshseggemu/Desktop/finalproject/Indian_Kitchen/client/src/header.js";
import FindProducts from "./findproducts";
import About from "./about";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            uploadIsVisible: false,
        };
    }
    componentDidMount() {
        console.log("App mounted");

    }

  render(){  return (
      <>
          <BrowserRouter>
              <Route exact path="/login">
                  <Header />
              </Route>

              <Switch>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/find">
                      <FindProducts />
                  </Route>
              </Switch>
          </BrowserRouter>
      </>
  );
  }
};

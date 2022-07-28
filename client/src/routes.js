import React from "react";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Products from "./products"
import Cart from "./cart"
const Routes = ({ productItems, cartItems }) => {
    // console.log("productItems in routes", productItems)
    console.log("cart items in routes", cartItems);
    return (
        <>
            <Switch>
                <Route path="/find">
                    <Products
                        productItems={productItems}
                    />
                </Route>
                <Route path="/cart">
                    <Cart
                        cartItems={cartItems}
                    />
                </Route>
            </Switch>
        </>
    );
};
export default Routes;

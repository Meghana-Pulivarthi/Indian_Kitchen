import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Products from "./products";
import Cart from "./cart";
const Routes = ({
    productItems,
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handlecartclearance,
    // handlePay
}) => {
    // console.log("productItems in routes", productItems)
        // console.log("handleaddproducts xxx", handleAddProduct);

    // console.log("cart items in routes", cartItems);
    return (
        <>
            <Switch>
                <Route path="/find">
                    <Products
                        productItems={productItems}
                        handleAddProduct={handleAddProduct}
                    />
                </Route>
                <Route path="/cart">
                    <Cart
                        cartItems={cartItems}
                        handleAddProduct={handleAddProduct}
                        handleRemoveProduct={handleRemoveProduct}
                        handlecartclearance={handlecartclearance}
                        // handlePay={handlePay}
                    />
                </Route>
            </Switch>
        </>
    );
};
export default Routes;

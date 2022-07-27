import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Productslist from "./productlist";
export default function FindProducts() {
    console.log("Find products component here");
    const [searchInput, setSearchInput] = useState("");
    const [products, setUsers] = useState([]);

    useEffect(() => {
        let abort = false;
        (async () => {
            // console.log("useEffect in hello.js ran");
            try {
                console.log("searchInput right now", searchInput);
                const respBody = await fetch(
                    `/findproducts?productSearch=${searchInput}`
                );
                console.log("respbody", respBody);
                const result = await respBody.json();
                console.log("result", result);
                if (!abort) {
                    setUsers(result.data);
                } else {
                    console.log("ignore don't run a a state update");
                }
            } catch (err) {
                console.log("err on fetch find users", err);
            }
        })(); // this closes the async iife
        return () => {
            console.log("cleanup running");
            abort = true;
        };
    }, [searchInput]);
    const handleInputChange = ({ target }) => {
        setSearchInput(target.value);
    };

    return (
        <div>
            <h2>Our Products</h2>
            <input
                onChange={handleInputChange}
                type="text"
                name="productSearch"
                value={searchInput}
            />
            <div id="findproducts">
                {products &&
                    products.map((products, id) => {
                        return (
                            <div id="main" key={products.id}>
                                {/* <img
                                    id="productsimg"
                                    src={users.imgurl}
                                    alt={(users.first, users.last)}
                                /> */}
                                {products.price}
                                <BrowserRouter>
                                    <Link to="/products">
                                        I am product list
                                        <Productslist />
                                    </Link>
                                </BrowserRouter>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

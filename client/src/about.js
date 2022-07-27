import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import App from "./app";
import FindProducts from "./findproducts";



export default function About() {
    return (
        <>
            <div id="about">
                Welcome to The Great Indian Kitchen, explore our amazing range
                of delicacies from various parts of India. We offer a wide range
                of vegetarian, vegan, non-vegetarian varities to choose from.
                Our drinks with season's special fruits are a must try. Have a
                tummy full shopping experience with us.
            </div>
            <Link to="/find">Click here to continue.&nbsp;</Link>
        </>
    );
}

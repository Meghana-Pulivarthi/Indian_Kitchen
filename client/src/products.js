import React from "react";
const Products = ({ productItems, handleAddProduct }) => {
    // console.log("product Items in products", productItems);
    return (
        <div>
            <br></br>
            <p id="productlist">Menu</p>
            <div className="products">
                {productItems?.map((productItem) => {
                    return (
                        <div className="card" key={productItem.id}>
                            <div>
                                <img
                                    className="product-img"
                                    src={productItem.image}
                                    alt={productItem.name}
                                ></img>
                            </div>
                            <div className="productname">
                                {productItem.name}
                            </div>
                            <div className="productprice">
                                {productItem.price} €
                            </div>
                            {/* we need a function for button */}
                            <div>
                                <button className="add" >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Products;

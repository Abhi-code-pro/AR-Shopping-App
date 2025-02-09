import React from "react";
import "./../styles/Productcard.css";

function Productcard({ product , onCategoryClick}) {
    return (
        <div className="product-card" onClick={onCategoryClick}>
            <img src={product.img} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    );
}
export default Productcard;

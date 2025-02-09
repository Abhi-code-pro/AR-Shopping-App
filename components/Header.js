import React from "react";
import "./../styles/Header.css";

function Header() {
    return (
        <header className="app-header">
            <div className="left-section">
                <div className="logo-container">
                    <img 
                        src="https://media.istockphoto.com/id/1215871740/vector/augmented-reality-smartphone-app-outline-vector-icon-isolated-on-white-ar-and-virtual.jpg?s=612x612&w=0&k=20&c=KckWUjcgcsWqxEAgVzAFAHKAG_kYXs8bGQUhuT1_IgI="
                        alt="Brand Logo" 
                        className="logo"
                    />
                    <h1>AR/VR Online Shopping</h1>

                </div>
            </div>
            <div className="right-section">
                <button className="header-button">Login</button>
                <button className="header-button">Sign-up</button>
                <button className="header-button">Add to Cart</button>
            </div>
        </header>
    );
}

export default Header;

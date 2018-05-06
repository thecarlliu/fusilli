import React from "react";
import "./Nav.css";

const Nav = () => (
    <div className="cell medium-12">
        <ul className="menu menu-hover-lines">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/drinks">Drinks</a></li>
            <li><a href="/reservations">Reservations</a></li>
        </ul>
    </div>
);

export default Nav;
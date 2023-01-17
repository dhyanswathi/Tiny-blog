import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <section className="topnav">
            <Link to="/" className="nav-left">Home</Link>
            <Link to="/about" className="nav-right">About</Link>
        </section>
    )
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (

        <nav className="navbar shadow-lg">
            <Link className="text-center" to="/">
               <span className="text-center">Chime</span> 
            </Link>
        </nav>



    )
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav(){
    return(
        <header>
            <h1>
                <Link to="/">Yerin</Link>
            </h1>
            <ul className="nav">
                <li>
                    <Link to="/album">Album</Link>
                </li>
                <li>
                    <Link to="/interview">Interview</Link>
                </li>
                <li>
                    <Link to="/video">Video</Link>
                </li>
            </ul>
        </header>
    )
}

export default Nav;
import React from "react";
import logo from "./images/logo192.png";
// import './App.css';
import './Nav.css';
export default function Nav(){
    return(
        <nav className="nav-body">
            <div className="fest-half">
                <img src={logo} className="logo" />
                <h3 className="Name">Reactfacts</h3>
            </div>
            <div className="other-half">
                <h5>
                    React Course - Project 1
                </h5>
            </div>
        </nav>
    )
}
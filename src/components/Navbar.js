import React from "react"
import moon from "../images/icon-moon.svg"
import sun from "../images/icon-sun.svg"

export default function Navbar(){
    return(
        <nav className="container">
            <p className="nav--title">TODO</p>
            <img src={sun} className="nav--mode--icon" alt="modes toggler clickable image"/>
        </nav>
    )
}
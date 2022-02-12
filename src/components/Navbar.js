import React from "react"
import moon from "../images/icon-moon.svg"
import sun from "../images/icon-sun.svg"

export default function Navbar(props){
    return(
        <nav>
            <p className="nav--title">TODO</p>
            <img src={(props.mode === "dark") ? sun : moon} 
                 className="nav--mode--icon"
                 onClick={props.toggleMode} 
                 alt="modes toggler clickable"/>
        </nav>
    )
}
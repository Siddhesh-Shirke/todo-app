import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import DarkBgImg from "./images/bg-desktop-dark.jpg"
import LightBgImg from "./images/bg-desktop-light.jpg"

export default function App(){
    const [mode, setMode] = React.useState("dark");

    function toggleMode(){
        setMode((prevMode) => {
            return (prevMode === "dark") ? "light" : "dark" 
        })
    }

    const styles = {
        backgroundColor: (mode === "dark") ? "black" : "white",
        
        backgroundImage: (mode === "dark") ? `url(${DarkBgImg})` : `url(${LightBgImg})`
    }

    return(
        <div 
        style={styles}
        className="app">
            <div className="container">
                <Navbar toggleMode={toggleMode}
                        mode={mode}/>

                <Main mode={mode}/>
            </div>
        </div>
        
    )
}
import React from "react";

export default function TodoItem(){
    return(
        <div className="todo--item">
            <div className="todo--complete-check"></div>
            <p className="todo--item--text">Buy Grocery</p>
        </div>
    )
}
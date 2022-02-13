import React from "react";
import cross from "../images/icon-cross.svg"

export default function TodoItem(props){
    return(
        <>
            <div className="todo--item">
                <div className="todo--item--info">
                    <div className="todo--complete-check"></div>
                    <p className="todo--item--text">
                        {props.todoItemText}
                    </p>
                </div>
                <img src={cross} className="cross" alt="todo item remover clickable"/>
            </div>
        </>
    )
}
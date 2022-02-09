import React from "react";
import TodoItem from "./TodoItem";
import DashBoard from "./DashBoard"

export default function Main(){
    return(
        <div className="container">
            <input type="text" 
                   placeholder="Create a new todo..."
                   name="" 
                   value=""
            />
            {TodoItem}
            <DashBoard />
            <p className="main--note">
                Drag and drop to reorder list
            </p>
        </div>
    )
}
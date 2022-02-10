import React from "react";
import TodoItem from "./TodoItem";
import DashBoard from "./DashBoard"

export default function Main(){
    return(
        <div className="main">
            <input type="text" 
                   placeholder="Create a new todo..."
                   name="" 
                   value=""
            />

            {/* {TodoItem} */}

            <TodoItem /> {/* This is a temporary line added, so that, TodoItem is visible for styling */}
            
            <DashBoard />
            <p className="main--note">
                Drag and drop to reorder list
            </p>
        </div>
    )
}
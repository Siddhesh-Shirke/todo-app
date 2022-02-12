import React from "react";
import TodoItem from "./TodoItem";
import DashBoard from "./DashBoard"

export default function Main(props){
    let mode = (props.mode === "dark") ? "" : "light"
    return(
        <main className={mode}>
        
            <input type="text" 
                   placeholder="Create a new todo..."
                   name="" 
                // value="" Add it afterwards. Do not keep it empty.
            />

            {/* {TodoItem} */}

            <TodoItem /> {/* This is a temporary line added, so that, TodoItem is visible for styling */}
            
            <DashBoard />
            <p className="main--note">
                Drag and drop to reorder list
            </p>
        </main>
    )
}
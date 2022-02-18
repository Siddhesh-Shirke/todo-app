import React from "react"
import { NavLink, Routes, Route } from "react-router-dom"

export default function DashBoard(props){
    const allTodoItemsLeft = <p className="dashboard--items--left">
                                {props.itemsLeft} items left&nbsp;&nbsp;
                            </p>

    const completedTodoItems = 
                        <p className="dashboard--items--left">
                            {props.calcCompletedTasks} tasks done
                        </p>
    
    return(
        <>
            <div className="dashboard">

                <Routes>
                    <Route path="/" element={allTodoItemsLeft} />
                    <Route path="/active" element={<p>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </p>} />
                    <Route path="/completed" element={completedTodoItems} />
                </Routes>

                <div className="dashboard--sub">
                    <NavLink to="/">All</NavLink>

                    <NavLink to="/active"
                            onClick={props.createActiveTask}>
                                Active
                    </NavLink>

                    <NavLink to="/completed"
                            onClick={props.createCompletedTasks}>
                                Completed
                    </NavLink>
                </div>

                <a className="dashboard--empty--completed"
                onClick={props.clearCompleted}>
                    Clear Completed
                </a>
            </div>

            <div className="mobile--dashboard--sub">
                    <NavLink to="/">All</NavLink>

                    <NavLink to="/active"
                            onClick={props.createActiveTask}>
                                Active
                    </NavLink>

                    <NavLink to="/completed"
                            onClick={props.createCompletedTasks}>
                                Completed
                    </NavLink>
            </div>
        </>
    )
}
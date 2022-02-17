import React from "react"
import { NavLink } from "react-router-dom"

export default function DashBoard(props){
    return(
        <div className="dashboard">
            <p className="dashboard--items--left">
                {props.itemsLeft} items left
            </p>
            <div className="dashboard--sub">
                {/* <a className="dashboard-sub-btn">
                    All
                </a>

                <a  className="dashboard-sub-btn"
                    onClick={props.createActiveTask}>
                    Active
                </a>

                <a className="dashboard-sub-btn"
                   onClick={props.createCompletedTasks}
                >
                    Completed
                </a> */}
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
            <a className="dashboard--empty--completed">
                Clear Completed
            </a>
        </div>
    )
}
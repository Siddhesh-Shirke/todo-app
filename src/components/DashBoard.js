import React from "react"

export default function DashBoard(){
    return(
        <div className="dashboard">
            <p className="dashboard--items--left">{} items left</p>
            <div className="dashboard--sub">
                <a className="dashboard-sub-btn">All</a>
                <a className="dashboard-sub-btn">Active</a>
                <a className="dashboard-sub-btn">Completed</a>
            </div>
            <a className="dashboard--empty--completed">
                Clear Completed
            </a>
        </div>
    )
}
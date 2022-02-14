import React from "react";
import TodoItem from "./TodoItem";
import DashBoard from "./DashBoard"

export default function Main(props){
    let mode = (props.mode === "dark") ? "" : "light"

    const [todoItem, setTodoItem] = React.useState({
        isCompleted: false,
        todoItemText: "",
        isRemoved: false
    })

    const [allTodoListItems, setAllTodoListItems] = React.useState([])

    function createTodoItem(event){
        const {name, value} = event.target
        setTodoItem((prevTodoItem) => {
            return {
                ...prevTodoItem,
                [name]: value
            }
        })
    }

    function addTodoItemToList(event, todoItem){
        event.preventDefault()
        setAllTodoListItems((prevTodoList) => {
            return [...prevTodoList, todoItem]
        })
    }
    
    function taskCompleted(event){
        const value = event.target.lang;
        console.log(value)
        setAllTodoListItems((prevAllTodoListItems) => {
            return prevAllTodoListItems.map((item) => {
                console.log(item.isCompleted)
                return (item.todoItemText === value) 
                       ? 
                       {...item, isCompleted: !item.isCompleted} 
                       : 
                       item
            })
        })
    }

    const todoListElements = allTodoListItems.map((list) => {
        return <TodoItem key={list.todoItemText}
                         todoItemText={list.todoItemText}
                         taskCompleted={taskCompleted}
                         isCompleted={list.isCompleted}
               />
    })

    return(
        <main className={mode}>
            
            <form onSubmit={(event) =>{
                addTodoItemToList(event,todoItem)
            }}
            >
                <input type="text" 
                       placeholder="Create a new todo..."
                       name="todoItemText" 
                       value={todoItem.todoItemText}
                       onChange={createTodoItem}
                />
            </form>

            {
                allTodoListItems.length > 0 
                ? 
                todoListElements 
                :
                <div className="main--empty--list--card">
                    <p className="main--empty--list--card--text">
                        Nothing to do!
                    </p>
                </div>
            } 
            
            <DashBoard />
            <p className="main--note">
                Drag and drop to reorder list
            </p>
        </main>
    )
}
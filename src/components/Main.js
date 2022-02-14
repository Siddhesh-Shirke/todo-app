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
        setAllTodoListItems((prevAllTodoListItems) => {
            return prevAllTodoListItems.map((item) => {
                return (item.todoItemText === value) 
                       ? 
                       {...item, isCompleted: !item.isCompleted} 
                       : 
                       item
            })
        })
    }

    function removeTask(event){
        const value = event.target.lang;
        setAllTodoListItems((prevAllTodoListItems) => {
            return prevAllTodoListItems.filter((item) => {
                return item.todoItemText != value
            })
        })
    }

    function itemsLeft(){
        let count = 0;
        for(let i = 0; i < allTodoListItems.length; i++)
        {
            if(!allTodoListItems[i].isCompleted)
            {
                count = count + 1;
            }
        }
        return count;
    }

    const todoListElements = allTodoListItems.map((list) => {
        return <TodoItem key={list.todoItemText}
                         todoItemText={list.todoItemText}
                         taskCompleted={taskCompleted}
                         removeTask={removeTask}
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


            
            <DashBoard 
                itemsLeft={itemsLeft()}
            />
            <p className="main--note">
                Drag and drop to reorder list
            </p>
        </main>
    )
}
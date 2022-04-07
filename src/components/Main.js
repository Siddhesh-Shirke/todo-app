import React from "react";
import { Routes, Route } from "react-router-dom"
import TodoItem from "./TodoItem";
import DashBoard from "./DashBoard"

export default function Main(props){
    let mode = (props.mode === "dark") ? "" : "light"

    const [todoItem, setTodoItem] = React.useState({
        isCompleted: false,
        todoItemText: ""
    })

    const [allTodoListItems, setAllTodoListItems] = React.useState( () => JSON.parse(localStorage.getItem("allTaskList")) || []
    )

    React.useEffect(() => {
        localStorage.setItem("allTaskList", JSON.stringify(allTodoListItems))
    }, [allTodoListItems])

    const [activeTask, setActiveTask] = React.useState({
        isCompleted: false,
        todoItemText: ""
    })

    const [completedTasks, setCompletedTasks] = React.useState([])

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
        todoItem.todoItemText === ""
        ?
        console.log(".")
        :
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
                return item.todoItemText !== value
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
    
    function calcCompletedTasks(){
        let count = 0;
        count = count + completedTasks.length
        return count
    }

    function createActiveTask(){
        setActiveTask(
            allTodoListItems.find(item => item.isCompleted === false)
        )
    }

    function createCompletedTasks(){
        setCompletedTasks(allTodoListItems.filter((item) => {
                return item.isCompleted
            })
        )
    }

    function clearCompleted(){
        setAllTodoListItems((prevState) => {
            return prevState.filter((item) => {
                return !item.isCompleted
            })
        })
    }

    React.useEffect(() => {
        createActiveTask()
    })

    React.useEffect(() => {
        createCompletedTasks()
    })
    
    const allTodoListElements = allTodoListItems.map((list, index) => {
        return <TodoItem key={list.todoItemText}
                         index={index}
                         todoItemText={list.todoItemText}
                         taskCompleted={taskCompleted}
                         removeTask={removeTask}
                         isCompleted={list.isCompleted}
               />
    })

    const activeTodoListElement = 
                                activeTask === undefined 
                                ?
                                <div className="main--empty--list--card">
                                    <p className="main--empty--list--card--text">
                                        No active task!
                                    </p>
                                </div>
                                :
                                <TodoItem 
                                    todoItemText={activeTask.todoItemText}
                                    taskCompleted={taskCompleted}
                                    removeTask={removeTask}
                                    isCompleted={activeTask.isCompleted}
                                  />

    const completedTodoListElements = completedTasks.map((item) => {
            return <TodoItem key={item.todoItemText}
                             todoItemText={item.todoItemText}
                             taskCompleted={taskCompleted}
                             removeTask={removeTask}
                             isCompleted={item.isCompleted}
                   />
    })

    return(
        <main className={mode}>
            
            <form onSubmit={(event) =>{
                addTodoItemToList(event,todoItem)
            }}>
                <input type="text" 
                       placeholder="Create a new todo..."
                       name="todoItemText" 
                       value={todoItem.todoItemText}
                       onChange={createTodoItem}
                />
            </form>

            <Routes>
                <Route path="/" 
                       element={
                           allTodoListItems.length <= 0
                           ?
                           <div className="main--empty--list--card">
                               <p className="main--empty--list--card--text">
                                   Nothing to do!
                               </p>
                           </div>
                           :
                            <div className="all--todos--list">
                                {allTodoListElements}
                            </div>
                        } 
                />

                <Route path="active" 
                       element={activeTodoListElement} />
                       
                <Route path="completed" 
                       element={
                            completedTodoListElements.length <= 0
                            ?
                            <div className="main--empty--list--card">
                                <p className="main--empty--list--card--text">
                                    No tasks completed!
                                </p>
                            </div>
                            :
                            completedTodoListElements} />
            </Routes>

            <DashBoard itemsLeft={itemsLeft()}
                       calcCompletedTasks={calcCompletedTasks()}
                       createActiveTask={createActiveTask}
                       createCompletedTasks={createCompletedTasks}
                       clearCompleted={clearCompleted}
            />
                       
            <p className="main--note">
                Drag and drop feature coming soon!
            </p>
        </main>
    )
}
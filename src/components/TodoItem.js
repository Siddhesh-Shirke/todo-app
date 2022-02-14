import React from "react";
import check from "../images/icon-check.svg"
import cross from "../images/icon-cross.svg"

export default function TodoItem(props){
    const styles = {
        color: 'hsl(234, 11%, 52%)',
    }

    return(
        <>
            <div className="todo--item">
                <div className="todo--item--info">
                    <div className="todo--complete-check"
                         lang={props.todoItemText}
                         onClick={(event) => props.taskCompleted(event)}
                    >
                        {
                            props.isCompleted 
                            && 
                            <img src={check} 
                                 lang={props.todoItemText}
                                 alt="todo item remover clickable"/>
                        }
                    </div>
                    <p className="todo--item--text">
                        {
                            props.isCompleted
                            ?
                            <s style={styles}>{props.todoItemText}</s>
                            :
                            props.todoItemText
                        }
                    </p>
                </div>
                <img src={cross} 
                     className="cross" 
                     lang={props.todoItemText}
                     alt="todo item remover clickable"/>
            </div>
        </>
    )
}
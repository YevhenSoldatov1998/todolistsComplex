import React from 'react';
import './App.css';
import {useState} from 'react'
const TodoListTask = props => {
    const [editMode, setEditMode] = useState(false);

    const onIsDoneChanged = (e) => {
        props.changeIsDone(props.todoId, e.currentTarget.checked);
    }

    const onTitleChanged = (e) => {
        // props.changeTitle(props.task.id, e.currentTarget.value);
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode= () => {
        setEditMode(false);
    }



        let containerCssClass = props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
                <div className={containerCssClass}>
                    <input type="checkbox" checked={props.task.isDone}
                           onChange={onIsDoneChanged}/>
                    { editMode
                        ? <input onBlur={deactivateEditMode} onChange={onTitleChanged} autoFocus={true} value={props.task.title} />
                        : <span onClick={activateEditMode}>{props.task.id} - {props.task.title}</span>
                    }, priority: {props.task.priority}
                </div>
        );
}

export default TodoListTask;


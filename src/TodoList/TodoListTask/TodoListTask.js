import React from 'react';
import '../../App.css';
import {useState} from 'react'

const TodoListTask = ({deleteTask, todoId, task, ...props}) => {
    const [editMode, setEditMode] = useState(false);

    const onIsDoneChanged = (e) => {
        props.changeIsDone(todoId, task.id);
    };

    const call_changeTitleTask = (e) => {
        props.changeTitleTask(todoId, task.id, e.currentTarget.value);
    };

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };
    const call_deleteTask = () => {
        deleteTask(todoId, task.id)
    }


    let containerCssClass = task.isDone ? "todoList-task done" : "todoList-task";

    return (
        <div className={containerCssClass}>
            <input type="checkbox" checked={task.isDone}
                   onChange={onIsDoneChanged}/>
            {editMode
                ?
                <input onBlur={deactivateEditMode} onChange={call_changeTitleTask} autoFocus={true} value={task.title}/>
                : <span onClick={activateEditMode}>{task.id} - {task.title}</span>
            }, priority: {task.priority}
            <button onClick={call_deleteTask}>&times;</button>
        </div>
    );
}

export default TodoListTask;


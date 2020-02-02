import React from 'react';
import '../App.css';
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "../AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import {useState} from 'react'

const TodoList = ({deleteTask, ...props}) => {
    let [id, setId] = useState(3);
    const call_addTask = (title) => {
        setId(id + 1);
        let task = {id: id, title: title, isDone: false, priority: "low"};
        props.addTask(task, props.todoId)
    };
    const call_deleteTodoList = () => {
        props.deleteTodoList(props.todoId)
    }
    return (
        <div className="todoList">
            <div className="todoList-header">
            <button onClick={call_deleteTodoList}>&times;</button>
            <TodoListTitle title={props.title}/>
            <AddNewItemForm addTodo={call_addTask}/>
            </div>
            <TodoListTasks tasks={props.tasks}
                           todoId={props.todoId}
                           changeIsDone = {props.changeIsDone}
                           changeTitleTask={props.changeTitleTask}
                           deleteTask={deleteTask}
            />
            {/*<TodoListFooter changeFilter={props.changeFilter} filterValue={props.filterValue}/>*/}
        </div>

    );
}

export default TodoList;


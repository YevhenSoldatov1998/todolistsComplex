import React from 'react';
import '../App.css';
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "../AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import {useState} from 'react'
import TodoListFooter from "./TodoListFooter";

const TodoList = ({changeFilter, deleteTask, filterValue, todoId, tasks, changeIsDone, changeTitleTask, title, addTask, deleteTodoList}) => {
    debugger
    let [id, setId] = useState(3);
    const call_addTask = (title) => {
        setId(id + 1);
        let task = {id: id, title: title, isDone: false, priority: "low"};
        addTask(task, todoId)
    };
    const call_deleteTodoList = () => {
        deleteTodoList(todoId)
    }
    return (
        <div className="todoList">
            <div className="todoList-header">
                <button onClick={call_deleteTodoList}>&times;</button>
                <TodoListTitle title={title}/>
                <AddNewItemForm addTodo={call_addTask}/>
            </div>
            <TodoListTasks tasks={tasks.filter(task =>
                (filterValue === 'All') ? task
                    : (filterValue === 'Completed') ? task.isDone
                    : (filterValue === 'Active') ? !task.isDone : false)}

                           todoId={todoId}
                           changeIsDone={changeIsDone}
                           changeTitleTask={changeTitleTask}
                           deleteTask={deleteTask}
            />
            <TodoListFooter changeFilter={changeFilter}
                            todoId={todoId}
                            filterValue={filterValue}/>
        </div>

    );
}

export default TodoList;


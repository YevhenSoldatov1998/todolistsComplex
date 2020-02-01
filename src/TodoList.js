import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";

const TodoList = (props) => {

    return (
        <div className="todoList">
            {/*<div className="todoList-header">*/}
            {/*    <button onClick={() => props.deleteTodoList(props.id)}>deleteTodoList</button>*/}
                <TodoListTitle title={props.title}/>
                <AddNewItemForm />
            {/*</div>*/}
            <TodoListTasks />
            {/*<TodoListFooter changeFilter={props.changeFilter} filterValue={props.filterValue}/>*/}
        </div>

    );
}

export default TodoList;


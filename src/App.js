import React from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addTask,
    addTodoList,
    changeFilter,
    changeIsDone,
    changeTitleTask,
    deleteTask,
    deleteTodoList
} from "./redux/todo-reducer";
import {useState} from 'react'

const App = ({
                 addTodoList, todoLists,
                 deleteTodoList, addTask,
                 changeIsDone, changeTitleTask,
                 deleteTask, changeFilter
             }) => {
    const [nextTodoListId, setNextTodoListId] = useState(3);
    const call_addTodoList = (title) => {
        let newTodoList = {
            id: nextTodoListId,
            title: title,
            tasks: []
        };
        setNextTodoListId(nextTodoListId + 1);
        addTodoList(newTodoList);
    };


    return (
        <>
            <div>
                <AddNewItemForm addTodo={call_addTodoList}/>
            </div>
            <div className="App">
                {todoLists.map(tl => {
                    return <TodoList todoId={tl.id}
                                     key={tl.id}
                                     tasks={tl.tasks}
                                     title={tl.title}
                                     filterValue={tl.filterValue}
                                     deleteTodoList={deleteTodoList}
                                     addTask={addTask}
                                     changeIsDone={changeIsDone}
                                     changeTitleTask={changeTitleTask}
                                     deleteTask={deleteTask}
                                     changeFilter={changeFilter}

                    />
                })}
            </div>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        todoLists: state.todo.todoLists
    }
}

export default compose(
    connect(mapStateToProps, {
        addTodoList, deleteTodoList, changeIsDone,
        addTask, changeTitleTask, deleteTask,
        changeFilter
    })
)(App);


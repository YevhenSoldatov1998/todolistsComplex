import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {addTodoList, changeIsDone, deleteTodoList} from "./redux/todo-reducer";
import {useState} from 'react'

const App = (props) => {
    const [nextTodoListId, setNextTodoListId] = useState(3);
    const addTodoList = (title) => {
        let newTodoList = {
            id: nextTodoListId,
            title: title
        };
        props.addTodoList(newTodoList);
        setNextTodoListId(nextTodoListId + 1);
    };


    return (
        <>
            <div>
                <AddNewItemForm addTodo={addTodoList}/>
            </div>
            <div className="App">
                {props.todolists.map(tl => {
                    return <TodoList id={tl.id}
                                     tasks={tl.tasks}
                                     deleteTodoList={props.deleteTodoList}
                                     title={tl.title}
                                     changeIsDone={props.changeIsDone}

                    />
                })}
            </div>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        todolists: state.todo.todolists
    }
}

export default compose(
    connect(mapStateToProps, {addTodoList, deleteTodoList , changeIsDone})
)(App);


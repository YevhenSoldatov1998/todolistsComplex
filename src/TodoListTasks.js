import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";
import {connect} from "react-redux";

const TodoListTasks = (props) => {
    debugger

        return (
            <div className="todoList-tasks">
                {props.tasks.map(task => {
                    return <TodoListTask
                        task={task}
                        // changeIsDone={props.changeIsDone}
                        // todoId={props.todoId}
                        // changeTitle={props.changeTitle}

                    />
                })}
            </div>
        );
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks
    }
}
export default connect(mapStateToProps)(TodoListTasks);


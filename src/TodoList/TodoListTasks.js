import React from 'react';
import '../App.css';
import TodoListTask from "./TodoListTask/TodoListTask";

const TodoListTasks = (props) => {
    return (
        <div className="todoList-tasks">
            {props.tasks.map(task => {
                return <TodoListTask
                    task={task}
                    key={task.id}
                    changeIsDone={props.changeIsDone}
                    todoId={props.todoId}
                    changeTitleTask={props.changeTitleTask}

                />
            })}
        </div>
    );
};
export default TodoListTasks;


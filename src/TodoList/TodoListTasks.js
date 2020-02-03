import React from 'react';
import '../App.css';
import TodoListTask from "./TodoListTask/TodoListTask";

const TodoListTasks = ({tasks,deleteTask, todoId,changeIsDone, changeTitleTask,}) => {
    return (
        <div className="todoList-tasks">
            {tasks.map(task => {
                return <TodoListTask
                    task={task}
                    key={task.id}
                    changeIsDone={changeIsDone}
                    todoId={todoId}
                    changeTitleTask={changeTitleTask}
                    deleteTask={deleteTask}


                />
            })}
        </div>
    );
};
export default TodoListTasks;


const ADD_TODO_LIST = 'ADD_TODO_LIST';
const DELETE_TODO_LIST = 'DELETE_TODO_LIST';
const CHANGE_IS_DONE = 'CHANGE_IS_DONE';
const ADD_TASK = 'ADD_TASK';
const CHANGE_TITLE_TASK = 'CHANGE_TITLE_TASK';
const DELETE_TASK = 'DELETE_TASK';

export const addTodoList = (newTodo) => ({type: ADD_TODO_LIST, newTodo});
export const deleteTodoList = (todoId) => ({type: DELETE_TODO_LIST, todoId});
export const changeIsDone = (todoId, taskId) => ({type: CHANGE_IS_DONE, todoId, taskId});
export const addTask = (task, todoId) => ({type: ADD_TASK, task, todoId});
export const changeTitleTask = (todoId, taskId, body) => ({type: CHANGE_TITLE_TASK, todoId, taskId, body});
export const deleteTask = (todoId, taskId) => ({type: DELETE_TASK, todoId, taskId   });
const initialState = {
    todoLists: [
        {
            id: 1,
            title: 'First Todo',
            tasks: [
                {id: 0, title: "d", isDone: false, priority: "low"},
                {id: 1, title: "d", isDone: false, priority: "low"}
            ]

        },
        {
            id: 2,
            title: 'Two Todo',
            tasks: [
                {id: 0, title: "d", isDone: false, priority: "low"},
                {id: 1, title: "d", isDone: false, priority: "low"}
            ]

        }
    ]
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_LIST:
            return {
                ...state,
                todoLists: [...state.todoLists, action.newTodo]
            };
        case DELETE_TODO_LIST:
            return {
                ...state,
                todoLists: state.todoLists.filter(el => el.id !== action.todoId)
            };
        case ADD_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(el => {
                    if (el.id === action.todoId) {
                        return {
                            ...el,
                            tasks: [...el.tasks, action.task]
                        }
                    } else {
                        return el
                    }
                })
            }
        case CHANGE_IS_DONE:
            return {
                ...state,
                todoLists: state.todoLists.map(el => {
                    if (el.id === action.todoId) {

                        let newTasks = el.tasks.map(task => {
                            if (task.id === action.taskId) {
                                return {...task, isDone: !task.isDone}
                            } else return {...task}
                        });

                        return {...el, tasks: newTasks}
                    } else {
                        return {...el}
                    }
                })
            }
        case CHANGE_TITLE_TASK:
            return {
                ...state,
                todoLists: [...state.todoLists.map(el => {
                    if (el.id === action.todoId) {
                        return {...el , tasks: el.tasks.map(task => {
                            if (task.id === action.taskId) {
                                debugger
                                return {...task, title: action.body}
                            } else return {...task}

                        })}
                    }
                    else {
                        return {...el}
                    }
                })]
            }
        case DELETE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(objItem => {
                    if(objItem.id === action.todoId){
                        return {
                            ...objItem,
                            tasks: objItem.tasks.filter(el=> el.id !== action.taskId)
                        }

                    }
                    else return {...objItem}
                })
            }
        default:
            return state;
    }
}

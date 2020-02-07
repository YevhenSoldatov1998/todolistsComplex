import {IState} from "../util/interfaces/interfaces";
import {todoListAPI} from "../services/todoListAPI";

const ADD_TODO_LIST = 'ADD_TODO_LIST';
const DELETE_TODO_LIST = 'DELETE_TODO_LIST';
const CHANGE_IS_DONE = 'CHANGE_IS_DONE';
const ADD_TASK = 'ADD_TASK';
const CHANGE_TITLE_TASK = 'CHANGE_TITLE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const SET_TODO_LISTS = 'SET_TODO_LISTS';

export const addTodoList = (newTodo: any) => ({type: ADD_TODO_LIST, newTodo});
export const deleteTodoList = (todoId: number) => ({type: DELETE_TODO_LIST, todoId});
export const changeIsDone = (todoId: number, taskId: number) => ({type: CHANGE_IS_DONE, todoId, taskId});
export const addTask = (task: any, todoId: number) => ({type: ADD_TASK, task, todoId});
export const changeTitleTask = (todoId: number, taskId: number, body: string) => ({type: CHANGE_TITLE_TASK, todoId, taskId, body});
export const deleteTask = (todoId: number, taskId: number) => ({type: DELETE_TASK, todoId, taskId});
export const changeFilter = (todoId: number, value: boolean) => ({type: CHANGE_FILTER, todoId, value});
const setTodoLists = (todoLists: any) => ({type: SET_TODO_LISTS,  todoLists});
export const getTodoListsThunk = () => (dispatch:Function)=> {
    todoListAPI.getTodoList().then(res=> {
        debugger
        dispatch(setTodoLists(res.data))

    })
}

const initialState: IState= {
    todoLists: []
};

export const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TODO_LISTS:
            return {
                ...state,
                todoLists: action.todoLists
            };
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
        // case ADD_TASK:
        //     return {
        //         ...state,
        //         todoLists: state.todoLists.map(el => {
        //             if (el.id === action.todoId) {
        //                 return {
        //                     ...el,
        //                     tasks: [...el.tasks, action.task]
        //                 }
        //             } else {
        //                 return el
        //             }
        //         })
        //     }
        // case CHANGE_IS_DONE:
        //     return {
        //         ...state,
        //         todoLists: state.todoLists.map(el => {
        //             if (el.id === action.todoId) {
        //
        //                 let newTasks = el.tasks.map(task => {
        //                     if (task.id === action.taskId) {
        //                         return {...task, isDone: !task.isDone}
        //                     } else return {...task}
        //                 });
        //
        //                 return {...el, tasks: newTasks}
        //             } else {
        //                 return {...el}
        //             }
        //         })
        //     }
        // case CHANGE_TITLE_TASK:
        //     return {
        //         ...state,
        //         todoLists: [...state.todoLists.map(el => {
        //             if (el.id === action.todoId) {
        //                 return {
        //                     ...el, tasks: el.tasks.map(task => {
        //                         if (task.id === action.taskId) {
        //                             debugger
        //                             return {...task, title: action.body}
        //                         } else return {...task}
        //
        //                     })
        //                 }
        //             } else {
        //                 return {...el}
        //             }
        //         })]
        //     }
        // case DELETE_TASK:
        //     return {
        //         ...state,
        //         todoLists: state.todoLists.map(objItem => {
        //             if (objItem.id === action.todoId) {
        //                 return {
        //                     ...objItem,
        //                     tasks: objItem.tasks.filter(el => el.id !== action.taskId)
        //                 }
        //
        //             } else return {...objItem}
        //         })
        //     }
        case CHANGE_FILTER:
            return  {
                ...state,
                todoLists: state.todoLists.map(objItem => {
                    if(objItem.id === action.todoId){
                        return  {
                            ...objItem,
                            filterValue: action.value
                        }
                    }
                    else{
                        return {...objItem}
                    }
                })
            }
        default:
            return state;
    }
}

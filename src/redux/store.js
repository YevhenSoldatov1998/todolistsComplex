import {combineReducers, createStore} from "redux";
import {todoReducer} from "./todo-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {taskReducer} from "./tasks-reducer";

let reducers = combineReducers({
    todo: todoReducer,
    tasks: taskReducer
})
export let store = createStore(reducers, composeWithDevTools());

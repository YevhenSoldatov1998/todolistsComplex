import {combineReducers, createStore} from "redux";
import {todoReducer} from "./todo-reducer";
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({
    todo: todoReducer,
})
export let store = createStore(reducers, composeWithDevTools());

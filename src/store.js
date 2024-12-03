import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counter";
import { todoReducer } from "./reducers/todo";

const allReducer = combineReducers({
    counterReducer,
    todoReducer
});

export const store = createStore(allReducer);
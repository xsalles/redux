import { combineReducers, createStore } from "redux";
import reducerLogged from "./reducers/index.jsx";

const rootReducer = combineReducers({
    logged: reducerLogged,
})

const store = createStore(rootReducer)

export default store;
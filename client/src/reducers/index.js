import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer
});

export default allReducers;
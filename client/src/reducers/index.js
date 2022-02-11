import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import authReducer from "./auth";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggerReducer,
    authState: authReducer
});

export default allReducers;
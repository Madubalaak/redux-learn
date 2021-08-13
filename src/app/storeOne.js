import { createStore, combineReducers } from "redux";
import counterReducer from "../features/counterOne/counterReducer";

const rootReducer = combineReducers({
    counterReducer,
});

const store = createStore(rootReducer, {});

export default store;
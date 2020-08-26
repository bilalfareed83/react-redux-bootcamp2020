import { createStore } from "redux";
import counterReducer from "./conponents/Reducers/CounterReducer";

const store = createStore(counterReducer);

export default store;

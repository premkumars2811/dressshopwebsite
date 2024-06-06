import { combineReducers } from "redux";
import CounterReducer from "./Reducer";

const Rootreducer =combineReducers({
CounterReducer:CounterReducer,

});
export default Rootreducer;
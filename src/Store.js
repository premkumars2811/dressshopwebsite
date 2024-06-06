import { legacy_createStore as createstore } from 'redux';
import CounterReducer from './Reducer';
const store = createstore(CounterReducer);
export default store;

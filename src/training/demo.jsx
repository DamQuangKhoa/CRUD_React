import { createStore } from "redux";
import {status,sort} from './action/index';
import myReducer from './reducers/index'
const store = createStore(myReducer);
console.log('default',store.getState());
store.dispatch(status());
console.log('status',store.getState());
// sort 
store.dispatch(sort({
    by: 'name',
    value: -1
}))
console.log('new' , store.getState());

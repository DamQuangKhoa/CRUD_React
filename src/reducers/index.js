import {
    combineReducers
} from 'redux';
import tasks from './tasks'
import form from './form'
import task from './task'

const myReducer = combineReducers({
    tasks, // tasks : tasks
    isDisplayForm : form ,// form : form,
    task: task
});

export default myReducer;
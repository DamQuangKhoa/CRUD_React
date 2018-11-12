import {
    combineReducers
} from 'redux';
import tasks from './tasks'
import form from './form'

const myReducer = combineReducers({
    tasks, // tasks : tasks
    isDisplayForm : form // form : form
});

export default myReducer;
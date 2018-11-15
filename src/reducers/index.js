import {
    combineReducers
} from 'redux';
import tasks from './tasks'
import form from './form'
import task from './task'
import filterTask from './filter'
import search from './search'

const myReducer = combineReducers({
    tasks, // tasks : tasks
    isDisplayForm : form ,// form : form,
    task: task,
    filterTask: filterTask,
    searchTask: search
});

export default myReducer;
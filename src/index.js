import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Application from './components/app'
import {createStore} from 'redux';
import myReducer from './reducers/index'
// Store
const store = createStore(myReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDom.render(
<Provider store ={store}> 
    <Application/> 
</Provider>,
document.getElementById('root'));

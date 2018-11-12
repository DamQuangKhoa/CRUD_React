import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Application from './components/app'
import {createStore} from 'redux';
import myReducer from './reducers/index'
// Store
const store = createStore(myReducer)
ReactDom.render(
<Provider store ={store}> 
    <Application/> 
</Provider>,
document.getElementById('root'));

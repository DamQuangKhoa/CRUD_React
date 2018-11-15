import * as types from "../constant/action_type";
import _ from "lodash";
let data = JSON.parse(localStorage.getItem("tasks"));
let initialState = data ? data : [];
var randomstring = require("randomstring");

const make_id = () => {
  return randomstring.generate();
};

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_TASK:
      var index = _.findIndex(state, task => task.id === action.task.id);
      state[index] = {
        ...state[index],
        name: action.task.name,
        status: action.task.status
      };
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state]; // updateStatusTask(state, action);

    case types.UPDATE_STATUS_TASK:
      var index = _.findIndex(state, task => task.id === action.id);
      state[index] = {
        ...state[index],
        status: !state[index].status
      };
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state]; // updateStatusTask(state, action);

    case types.LIST_ALL:
      return state;

    case types.ADD_TASK:
      let newTask = {
        id: make_id(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    case types.DELETE_TASK:
      var index = _.findIndex(state, task => task.id === action.id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

export default myReducer;

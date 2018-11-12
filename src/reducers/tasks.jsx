import * as types from "../constant/action_type";
let data = JSON.parse(localStorage.getItem("tasks"));
let initialState = data ? data : [];
var randomstring = require("randomstring");

const make_id = () => {
  return randomstring.generate();
};

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      let newTask = {
        id: make_id(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false
      };
      console.log(newTask);
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;

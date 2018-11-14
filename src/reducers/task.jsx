import * as types from "../constant/action_type";
var initialState = {
};

let myReducer = (state = initialState , action) => {
  switch (action.type) {
    case types.UPDATE_TASK:
    
      return action.task;
    default:
      return state;
  }
};

export default myReducer;

import * as types from "../constant/action_type";
var initialState = {
name: '',
status : -1
};

let myReducer = (state = initialState , action) => {
  switch (action.type) {
    case types.FILTER_TASK:
    action.key.status = parseInt(action.key.status);
      return {
        name: action.key.name,
        status : parseInt(action.key.status,10)
      };
    default:
      return state;
  }
};

export default myReducer;

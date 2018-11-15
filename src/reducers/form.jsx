import * as types from "../constant/action_type";
let initialState = false;

let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return !state;
    case types.CLOSE_FORM:
      return state = false;
    case types.OPEN_FORM:
      return state = true;
    default:
      return state;
  }
};

export default myReducer;

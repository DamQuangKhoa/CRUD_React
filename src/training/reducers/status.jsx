import * as cons from "../const/actionType";
let initialState = false;
 
let status = (state = initialState, action) => {
  if (action.type === cons.TOGGLE_STATUS) {
    state = !state;
    return state;
  }
  return state
};

export default status;

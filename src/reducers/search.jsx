import * as types from "../constant/action_type";
var initialState = {
    keyword : '' 
};
let myReducer = (state = initialState , action) => {
  switch (action.type) {
    case types.SEARCH_TASK: 
    
      return action.keyword ;
    default:
      return state;
  }
};

export default myReducer;

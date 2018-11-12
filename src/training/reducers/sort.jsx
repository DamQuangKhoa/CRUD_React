import * as cons from '../const/actionType'
let initialState = {
      by: 'name',
      value: -11
};

let myReducer = (state = initialState, action) => {
     if (action.type === cons.SORT) {
        return {
            sort : action.sort
        }      
    }
  return state;
};
export default myReducer;
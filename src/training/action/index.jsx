import * as cons from '../const/actionType'
export const status = () => {
    return {
        type: cons.TOGGLE_STATUS 
    }
}
export const sort =  (sort) => {
    return {
        type: cons.SORT,
        sort  
    }
}
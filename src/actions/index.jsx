import * as types from "../constant/action_type";
export const listAll = () => {
  return {
    type: types.LIST_ALL
  };
};
export const addTask = task => {
  return {
    type: types.ADD_TASK,
    task
  };
};
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  };
};
export const openForm = () => {
  return {
    type: types.OPEN_FORM
  };
};
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  };
};
export const updateStatusTask = id => {
  return {
    type: types.UPDATE_STATUS_TASK,
    id
  };
};
export const deleteTask = id => {
  return {
    type: types.DELETE_TASK,
    id
  };
};
export const updateTask = task => {
  return {
    type: types.UPDATE_TASK,
    task
  };
};
export const saveTask = task => {
  return {
    type: types.SAVE_TASK,
    task
  };
};
export const filterTask = (key) => {
  return {
    type: types.FILTER_TASK,
    key
  };
};
export const search = (keyword) => {
  return {
    type: types.SEARCH_TASK,
    keyword
  };
};


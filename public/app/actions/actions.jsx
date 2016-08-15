import {actions} from '../constants/constants.jsx';

let nextTodoId = 0

export const userLogin = (user) => {
  return {
    type: actions.USER_LOGIN,
    user
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
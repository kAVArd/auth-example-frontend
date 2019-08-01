import { GET_TODOS } from '../actions/todo'

export const todo = (state = { todos: [] }, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}

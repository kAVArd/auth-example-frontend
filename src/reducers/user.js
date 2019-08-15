import { GET_USERS } from '../actions/user'

const initState = {
  users: []
}
export const user = (state = initState, action) => {
  if (action.type === GET_USERS) {
    return {
      ...state,
      users: action.payload
    }
  }
  return state
}

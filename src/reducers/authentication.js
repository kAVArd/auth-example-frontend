import { LOGIN } from '../actions/auth'

const initState = {
  authUser: null
}

export const authentication = (state = initState, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
      authUser: action.payload
    }
  }
  return state
}

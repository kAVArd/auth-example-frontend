import { LOGIN, REGISTER, LOGOUT } from '../actions/auth'

const initState = {
  authUser: null
}

export const authentication = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER: {
      return {
        ...state,
        authUser: action.payload
      }
    }
    case LOGOUT: {
      return {
        ...state,
        authUser: null
      }
    }
    default:
      return state
  }
}

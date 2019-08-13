import { LOGOUT } from '../actions/auth'

const initState = {
  messageLogout: ''
}

export const auth = (state = initState, action) => {
  switch (action.type) {
    // case LOGIN:
    //   return {
    //     ...state,
    //     messageLogin: action.payload
    //   }
    case LOGOUT:
      return {
        ...state,
        messageLogout: action.payload
      }
    default:
      return state
  }
}

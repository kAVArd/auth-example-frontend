import { AUTHWITHGOOGLE, LOGOUT } from '../actions/auth'

const initState = {
  messageLogin: '',
  messageLogout: ''
}

export const auth = (state = initState, action) => {
  switch (action.type) {
    case AUTHWITHGOOGLE:
      return {
        ...state,
        messageLogin: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        messageLogout: action.payload
      }
    default:
      return state
  }
}

const initState = {
  hasError: false,
  message: ''
}

export const error = (state = initState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      hasError: true,
      message: action.payload
    }
  }
  if (action.type === 'DELETE_ERROR') {
    return {
      hasEror: false,
      message: ''
    }
  }
  return state
}

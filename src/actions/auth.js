import axios from 'axios'

export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

export const login = (username, password, dispatch) => {
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, { username, password }).then(res => {
    console.log(res)
    return res.data
  }).then(user => {
    dispatch({ type: LOGIN, payload: user })
  })
}

export const logout = (dispatch) => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`)
    .then(res => res.data)
    .then(message => dispatch({ type: LOGOUT, payload: message }))
}

export const register = (username, password, dispatch) => {
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, { username, password })
    .then(res => res.data)
    .then(user => {
      console.log(user)
      dispatch({ type: REGISTER, payload: user })
    })
}

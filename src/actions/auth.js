import axios from 'axios'

export const AUTHWITHGOOGLE = 'AUTHWITHGOOGLE'
export const LOGOUT = 'LOGOUT'

export const authWithGoogle = (dispatch) => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/login/google`)
    .then(res => console.log(res))
}

export const logout = (dispatch) => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/logout`)
    .then(res => res.data)
    .then(message => dispatch({ type: LOGOUT, payload: message }))
}

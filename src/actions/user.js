import axios from 'axios'

export const GET_USERS = 'GET_USERS'

export const getUsers = (dispatch) => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`).then(res => res.data)
    .then(users => dispatch({ type: GET_USERS, payload: users }))
}

import axios from 'axios'

export const GET_TODOS = 'GET_TODOS'

export const getTodos = (dispatch) => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/todos`)
    .then(res => res.data)
    .then(todos => dispatch({ type: GET_TODOS, payload: todos }))
}

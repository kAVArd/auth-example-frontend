import { todo } from './todo'
import { auth } from './auth'
import { combineReducers } from 'redux'

export default combineReducers({
  todo: todo,
  auth: auth
})

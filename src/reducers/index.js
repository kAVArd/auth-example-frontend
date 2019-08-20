import { user } from './user'
import { authentication } from './authentication'
import { error } from './error'
import { combineReducers } from 'redux'

export default combineReducers({
  user: user,
  authentication: authentication,
  error: error
})

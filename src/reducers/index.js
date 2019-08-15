import { user } from './user'
import { authentication } from './authentication'
import { combineReducers } from 'redux'

export default combineReducers({
  user: user,
  authentication: authentication
})

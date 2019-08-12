import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authWithGoogle, logout } from '../actions/auth'

const Login = (props) => {
  const messageLogin = useSelector(reducers => reducers.auth.messageLogin)
  const messageLogout = useSelector(reducers => reducers.auth.messageLogout)
  const dispatch = useDispatch()

  useEffect(() => {
    authWithGoogle(dispatch)
    logout(dispatch)
  }, [dispatch])

  return (
    <>
      <h3 className='header'>Log in page</h3>
      {console.log(messageLogin)}
      {console.log(messageLogout)}
    </>
  )
}

export default Login

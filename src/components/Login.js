import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    login(username, password, dispatch)
  }

  return (
    <>
      <h3 className='header'>Login page</h3>
      <div className='row justify-content-center'>
        <div className='col-6'>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className='form-group'>
              <label htmlFor='username'>Username:</label>
              <input type='username' className='form-control' id='username' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className='form-group'>
              <label htmlFor='pwd'>Password:</label>
              <input type='password' className='form-control' id='pwd' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

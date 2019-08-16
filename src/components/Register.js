import React, { useState } from 'react'
import { register } from '../actions/auth'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Register = ({ history }) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    register(username, password, dispatch)
    history.push('/')
  }

  return (
    <>
      <h3 className='header'>Register page</h3>
      <div className='row justify-content-center'>
        <div className='col-6'>
          <form onSubmit={(e) => {
            handleRegister(e)
          }}>
            <div className='form-group'>
              <label htmlFor='username'>Username:</label>
              <input type='username' className='form-control' id='username' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className='form-group'>
              <label htmlFor='pwd'>Password:</label>
              <input type='password' className='form-control' id='pwd' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type='submit' className='btn btn-primary'>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default withRouter(Register)

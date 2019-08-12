import React from 'react'
import { useDispatch } from 'react-redux'
import { authWithGoogle } from '../actions/auth'

const Login = (props) => {
  const dispatch = useDispatch()

  return (
    <>
      <h3 className='header'>Log in page</h3>
      <div className='row justify-content-center'>
        <div className='col-6'>
          <form>
            <div className='form-group'>
              <label htmlFor='email'>Email address:</label>
              <input type='email' className='form-control' id='email' />
            </div>
            <div className='form-group'>
              <label htmlFor='pwd'>Password:</label>
              <input type='password' className='form-control' id='pwd' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
            <button type='submit' className='btn btn-primary' onClick={authWithGoogle(dispatch)}>Google+</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

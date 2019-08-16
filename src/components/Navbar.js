import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const authUser = useSelector(state => state.authentication.authUser)

  const isAuth = (authUser) => {
    if (!authUser) {
      return (
        <>
          <li className='nav-item'>
            <Link to='/login' className='nav-link'>LogIn</Link>
          </li>
          <li className='nav-item'>
            <Link to='/register' className='nav-link'>Register</Link>
          </li>
        </>
      )
    }
    return (
      <>
        <li className='nav-item'>
          <a href='' className='nav-link disable'>Hello, {authUser.username.toUpperCase()}</a>
        </li>
        <li className='nav-item'>
          <Link to='/logout' className='nav-link'>Logout</Link>
        </li>
      </>
    )
  }

  return (
    <>
      <nav className='navbar navbar-expand-sm'>
        <Link to='/' className='navbar-brand'><b>Authentication example</b></Link>
        <div className='collpase nav-collapse'>
          <ul className='navbar-nav'>
            {isAuth(authUser)}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

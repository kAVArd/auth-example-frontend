import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

function App () {
  return (
    <Provider store={store}>
      <Router>
        <nav className='navbar navbar-expand-sm'>
          <Link to='/' className='navbar-brand'><b>Authentication example</b></Link>
          <div className='collpase nav-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/login' className='nav-link'>LogIn</Link>
              </li>
              <li className='nav-item'>
                <Link to='/register' className='nav-link'>Register</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    </Provider>
  )
}

export default App

import React from 'react'
import Home from './components/Home'
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
          <Link to='/' className='navbar-brand'><b>Your todos</b></Link>
          <div className='collpase nav-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/today' className='nav-link'>Today</Link>
              </li>
              <li className='nav-item'>
                <Link to='/celedar' className='nav-link'>Celedar</Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
              </li>
            </ul>
          </div>
          <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>Log out</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    </Provider>
  )
}

export default App

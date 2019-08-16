import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Navbar from './components/Navbar';

const store = createStore(reducer)

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    </Provider>
  )
}

export default App

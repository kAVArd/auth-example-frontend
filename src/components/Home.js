import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../actions/user'

const Home = () => {
  const users = useSelector(reducers => reducers.user.users)
  const dispatch = useDispatch()

  useEffect(() => {
    getUsers(dispatch)
  }, [dispatch])

  return (
    <>
      <div className='col-4'>
        <h3 className='header'>All users</h3>
        <ul className='list-group list-group-flush'>
          {users && users.map(user => (
            <li key={user._id} className='list-group-item'>{user.username}</li>
          ))}
        </ul>
      </div>
      {console.log(users)}
    </>
  )
}

export default Home

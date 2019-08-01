import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../actions/todo'

const Home = () => {
  const todos = useSelector(reducers => reducers.todo.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    getTodos(dispatch)
  }, [dispatch])

  return (
    <>
      <h3 className='header'>All todos</h3>
      {console.log(todos)}
    </>
  )
}

export default Home

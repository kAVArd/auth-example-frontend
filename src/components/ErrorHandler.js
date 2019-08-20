import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ErrorHandler = () => {
  const error = useSelector(state => state.error)
  const dispatch = useDispatch()

  const handleClosing = () => {
    dispatch({ type: 'DELETE_ERROR' })
  }

  useEffect(() => {
    return () => handleClosing()
  })

  return (
    <div>
      {error.hasError &&
        <div className='alert alert-warning alert-dismissible'>
          {error.message}
        </div>}
    </div>
  )
}

export default ErrorHandler

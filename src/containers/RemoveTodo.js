import React from 'react'
import {connect} from 'react-redux'
import {removeTodo} from '../actions'

let RemoveTodo = ({id, dispatch}) => {
  return (
        <button  class="btn btn-info" onClick={e => {
          e.preventDefault()
          console.log(dispatch(removeTodo(id)))
        }}>Remove</button>
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo
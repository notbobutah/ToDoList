import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RemoveTodo from '../containers/RemoveTodo';

const Todo = ({ onClick, completed, text, id }) => (
  <li>
    <div align="center"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    </div><div><RemoveTodo id={id}/></div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo
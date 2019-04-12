import React from 'react'
import PropTypes from 'prop-types'
import RemoveTodo from '../containers/RemoveTodo';
import { connect } from 'react-redux'

const Todo = ({ onClick, completed, text, id }) => (
  <li> <div align="center"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text} </div> <div> <RemoveTodo id={id}/> </div>
  </li>
)


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default connect() (Todo)
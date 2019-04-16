import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RemoveTodo from '../containers/RemoveTodo';

const Todo = ({ onClick, completed, text, id }) => (
  <li><div class="row"><div className="card-title" class="col"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}    </div><div class="col"><RemoveTodo id={id}/></div></div>
  </li>
    )

    Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default  connect()(Todo)
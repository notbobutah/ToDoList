import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
<div className="container center">
        <div className="col-xs-12">
        <h1>My Todos</h1>
        <div className="card">
            <div className="card-body">
              <AddTodo />
              <VisibleTodoList />
              <Footer />
            </div>
        </div>
        </div>
  </div>
)

export default App
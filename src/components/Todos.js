import React from 'react'
import Todo from './Todo'

const Todos = ({todoz}) => {
  return (
    <div className='container'>
        <div className="row">
        {todoz.map((todo) => 

        <Todo key={todo.id} todo={todo}  />
        )}
    </div>
    </div>
  )
}

export default Todos
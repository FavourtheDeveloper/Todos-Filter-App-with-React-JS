import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className="col-lg-4">
        <div className="card" style={{width: "18rem", marginTop: "50px"}}>
  <img src={todo.img} className="card-img-top img-fluid img-container" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">Make sure to do and complete these todos as at the right time given.</p>
    <a href="#" className={`btn ${todo.completed ? "btn-success" : "btn-primary"}`}>{todo.completed ? "Not Completed" : "Completed"} </a>

  </div>
</div>
</div>
  )
}

export default Todo
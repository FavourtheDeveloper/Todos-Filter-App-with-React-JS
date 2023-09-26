import React from 'react'

const Navbar = ({onWrite}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
  <h1>Filter App</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
    </ul>
    <form className="form-inline my-2 my-lg-0" onSubmit={onWrite}>
      <input className="form-control mr-sm-2" type="search" name='theVal' placeholder="Search" aria-label="Search"  />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </div>
</nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const NavBarPatient = () => {
  return (
    <div>


<nav class="navbar bg-warning">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">ADD</Link>
      <Link class="navbar-brand" to="/search">SEARCH</Link>
        <Link class="navbar-brand" to="delete">DELETE</Link>
        <Link class="navbar-brand" to="view">VIEW</Link>
  </div>
</nav>


    </div>
  )
}

export default NavBarPatient
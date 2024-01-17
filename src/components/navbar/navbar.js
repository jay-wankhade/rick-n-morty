import { bottom } from '@popperjs/core'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <style>
        {`.active{
          font-weight: bold;
        }`}
      </style>
  <div className="container">
  <Link to="/" className="fs-3 navbar-brand">
        Rick & Morty
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav fs-5">
        <NavLink activeClassName="active" className="nav-link"  to="/">Home</NavLink>
        <NavLink className="nav-link" to="/location">Location</NavLink>
        <NavLink className="nav-link" to="/episode">Episode</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default navbar
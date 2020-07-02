import React from 'react'
// import './App.css'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav>
      <div className='nav-links'>
        <p><Link to='/auth/token/login/'>Login</Link></p>
        <p><Link to='/auth/users/me/'>Profile</Link></p>
        <p><Link to='/cards/all/'>Cards</Link></p>
      </div>
    </nav>
  )
}

export default Nav

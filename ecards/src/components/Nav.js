import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav>
      <div className='nav-links'>
        <p><Link to='/login/'>Login</Link></p>
        <p><Link to='/profile/'>Profile</Link></p>
        <p><Link to='/cards/all/'>Cards</Link></p>
        <p><Link to='/createcard/'>Create Card</Link></p>

      </div>
    </nav>
  )
}

export default Nav

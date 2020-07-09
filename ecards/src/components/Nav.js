/* globals localStorage */
import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  const handleLogout = () => {
    localStorage.removeItem('login_username')
    localStorage.removeItem('login_auth_token')
  }
  return (
    <nav>
      <div className='nav-links'>
        <p><Link to='/cards/all/' className='button'>All Cards</Link></p>
        <p><Link to='/profile/' className='button'>Profile</Link></p>
        <p><Link to='/createcard/' className='button'>Create Card</Link></p>
        <p><Link to='/friends/' className='button'>Friends</Link></p>
        <div>
          <Link to='/login/' className='button' onClick={() => handleLogout()}>Logout</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav

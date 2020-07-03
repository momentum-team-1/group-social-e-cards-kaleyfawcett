/* globals localStorage */
import React from 'react'

class ProfilePage extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: localStorage.getItem('login_username') || ''
    }
  }

  render () {
    return (
      <div>
        <div>
          <p>Username: {this.state.username}</p>
        </div>
        <div>
            Email:
        </div>
        <div>
            Name:
        </div>
      </div>
    )
  }
}

export default ProfilePage

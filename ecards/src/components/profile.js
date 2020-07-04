/* globals localStorage */
import React from 'react'

class ProfilePage extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: localStorage.getItem('login_username') || '',
      email: '',
      first_name: '',
      last_name: ''
    }
  }

  render () {
    return (
      <div>
        <div>
          <p>Username: {this.state.username}</p>
        </div>
        <div>
          <p>Email: {this.state.email}</p>
        </div>
        <div>
          <p>Name: {this.state.first_name}{this.state.last_name}</p>
        </div>
      </div>
    )
  }
}

export default ProfilePage

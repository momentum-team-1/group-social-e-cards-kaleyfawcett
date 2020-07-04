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

  // componentDidMount () {
  //   if (this.state.token) {
  //     getEmail(this.state.token)
  //       .then(email => this.setState({ email: email }))
  //   }
  // }

  // componentDidUpdate (prevProps, prevState) {
  //   if (this.state.token && this.state.token !== prevState.token) {
  //     getemail(this.state.token).then(cards => this.setState({ cards: cards }))
  //   }
  // }

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

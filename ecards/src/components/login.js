/* globals localStorage */

import React from 'react'
// import './App.css'
import { getToken } from '../Api'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: localStorage.getItem('login_username') || '',
      password: '',
      token: localStorage.getItem('login_auth_token'),
      error: null
      // cards: []
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  // componentDidMount () {
  //   if (this.state.token) {
  //     getCards(this.state.token).then(cards => this.setState({ cards: cards }))
  //   }
  // }

  // componentDidUpdate (prevProps, prevState) {
  //   if (this.state.token && this.state.token !== prevState.token) {
  //     getCards(this.state.token).then(cards => this.setState({ cards: cards }))
  //   }
  // }

  handleLogin (event) {
    event.preventDefault()

    getToken(this.state.username, this.state.password)
      .then(token => {
        this.setState({ token: token, password: '' })
        localStorage.setItem('login_username', this.state.username)
        localStorage.setItem('login_auth_token', token)
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: 'There is no user with that username and password.' })
      })
  }

  handleLogout (event) {
    event.preventDefault()

    this.setState({ token: null, username: '' })
    localStorage.removeItem('login_username')
    localStorage.removeItem('login_auth_token')
  }

  render () {
    return (
      <div>
        <div>
          {
            this.state.token
              ? (
                <div>
                  <h2>Welcome, {this.state.username}!</h2>
                  <button className='button' onClick={this.handleLogout}>Log out</button>
                  {/* <ul>
                    {this.state.cards.map(card => <li key={card.id}>{card.message}</li>)}
                  </ul> */}
                </div>
              )
              : (
                <form onSubmit={this.handleLogin}>
                  <div className='error'>{this.state.error}</div>
                  <div>
                    <label htmlFor='username' className='username'>Username: </label>
                    <input
                      id='username'
                      type='text' value={this.state.username}
                      onChange={event => this.setState({ username: event.target.value })}
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor='password'>Password: </label>
                    <input
                      className='password' type='password'
                      id='password' value={this.state.password}
                      onChange={event => this.setState({ password: event.target.value })}
                    />
                  </div>
                  <div>
                    <button type='submit' className='button'>Submit</button>
                  </div>
                </form>
              )
          }
        </div>
      </div>
    )
  }
}

export default Login

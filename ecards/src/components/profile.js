/* globals localStorage */
import React from 'react'
import { getUsersCards, getUsersInfo } from '../Api'

class ProfilePage extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: localStorage.getItem('login_username') || '',
      email: '',
      first_name: '',
      last_name: '',
      cards: []
    }
    this.handleUserInfo = this.handleUserInfo.bind(this)
  }

  componentDidMount () {
    if (this.state.token) {
      getUsersCards(this.state.token)
        .then(cards => this.setState({ cards: cards }))
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.token && this.state.token !== prevState.token) {
      getUsersCards(this.state.token).then(cards => this.setState({ cards: cards }))
    }
  }

  handleUserInfo (event) {
    getUsersInfo(this.state.email, this.state.first_name, this.state.last_name)
      .then(token => {
        this.setState({ token: token })
      })
  }

  render () {
    return (
      <div>
        <div>
          <p>Username: {this.state.username}</p>
        </div>
        <div>
          Email: {this.state.email}
          {/* {this.state.email.map(email => <p key={email.id}> </p>)} */}
        </div>
        <div>
          <p>Name: {this.state.first_name}{this.state.last_name}</p>
        </div>
        <div>
          {this.state.cards.map(card => <p className='container' key={card.id}> Title: {card.card_name}  <br />  Card: {card.card_text}</p>)}
        </div>
      </div>
    )
  }
}

export default ProfilePage

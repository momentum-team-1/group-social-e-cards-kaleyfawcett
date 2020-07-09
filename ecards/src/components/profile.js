/* globals localStorage */
import React from 'react'
import { getUsersCards, getUsersInfo } from '../Api'

class ProfilePage extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      user: localStorage.getItem('login_username') || '',
      email: '',
      first_name: '',
      last_name: '',
      cards: []
    }
  }

  componentDidMount () {
    if (this.state.token) {
      getUsersCards(this.state.token)
        .then(cards => this.setState({ cards: cards }))
    }
    getUsersInfo(this.state.token)
      .then(data => this.setState({ email: data.email, first_name: data.first_name, last_name: data.last_name }))
  }


  componentDidUpdate (prevProps, prevState) {
    if (this.state.token && this.state.token !== prevState.token) {
      getUsersCards(this.state.token).then(cards => this.setState({ cards: cards }))
    }
  }

  render () {
    return (
      <div>
        <div className='container2'>
          <div>
            <p>Username: {this.state.user}</p>
          </div>
          <div>
          Email: {this.state.email}
          </div>
          <div>
            <p>Name: {this.state.first_name} {this.state.last_name}</p>
          </div>
        </div>
        <div>
          <div>
            {this.state.cards.map(card => <p className='container' key={card.id}> Title: {card.title}  <br />  <br /> Quote: {card.message}</p>)}
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePage

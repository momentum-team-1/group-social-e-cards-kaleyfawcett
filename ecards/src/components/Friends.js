import React from 'react'
import { getFriendsList, getFriendsCards } from '../Api'

class FollowFriends extends React.Component {
  constructor () {
    super()
    this.state = {
      friends: [],
      cards: []

    }
  }

  componentDidMount () {
    getFriendsCards(this.props.token)
      .then(cards => this.setState({ cards: cards.results }))
    getFriendsList(this.props.token)
      .then(data => this.setState({ friends: data.friends }))
  }

  render () {
    return (
      <div>
        <div>
          <ul>
            <li>
              {this.state.friends.map(friend => <p key={friend.id}>Friends: {friend.username}</p>)}
            </li>
          </ul>
        </div>
        <div>
          {this.state.cards.map(card => <p className='container' key={card.id}> Title: {card.title}  <br />  Card: {card.message}</p>)}
        </div>
      </div>

    )
  }
}

export default FollowFriends

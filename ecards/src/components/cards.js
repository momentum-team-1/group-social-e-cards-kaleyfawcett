import React from 'react'
import { getCards } from '../Api'
import axios from 'axios'

class Cards extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    getCards(this.props.token)
      .then(cards => this.setState({ cards: cards }))
  }

  AddFriend (username) {
    axios
      .post('https://brown-shoe.herokuapp.com/api/friends/', {
        user: username
      },
      {
        headers: {
          Authorization: `Token ${this.props.token}`
        }
      })
      .then(response =>
        this.setState({ created: true }))
  }

  render () {
    return (
      <div className='Cards'>
        <div>
          <div>
            {this.state.cards.map(card => <p className='container' key={card.id}> User: {card.username} <br />  <br /> Title: {card.title} <br />  <br />Quote: {card.message} <br /> <br /> <button onClick={() => this.AddFriend(card.username)}> Follow User </button></p>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Cards

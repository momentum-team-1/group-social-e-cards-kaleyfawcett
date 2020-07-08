import React from 'react'
import { getCards } from '../Api'
import axios from 'axios'

class Cards extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: [],
      count: 0
    }
  }

  componentDidMount () {
    getCards(this.props.token)
      .then(cards => this.setState({ cards: cards }))
  }

  AddFriend (username) {
    axios
      .post('https://brown-shoe.herokuapp.com/api/friend/', {
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

  LikeButtonCount () {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render () {
    return (
      <div className='Cards'>
        {/* {this.props.token} */}
        <div>
          <div>
            {this.state.cards.map(card => <p className='container' key={card.id}> User: {card.username} <br /> Title: {card.title} <br /> Quote: {card.message} <br /> <button handleOnClick={this.LikeButtonCount}> ❤ Like: {this.state.count} </button> <button onClick={() => this.AddFriend(card.user)}> Follow </button></p>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Cards

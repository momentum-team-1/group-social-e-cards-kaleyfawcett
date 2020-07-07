import React from 'react'
import { getCards } from '../Api'

class Cards extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: [],
      token: window.localStorage.getItem('login_auth_token'),
      count: 0
    }
  }

  componentDidMount () {
    if (this.state.token) {
      getCards(this.state.token)
        .then(cards => this.setState({ cards: cards }))
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.token && this.state.token !== prevState.token) {
      getCards(this.state.token).then(cards => this.setState({ cards: cards }))
    }
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
        {/* {this.state.token} */}
        <div>
          <div>
            {this.state.cards.map(card => <p className='container' key={card.id}> User: {card.user} <br /> Title: {card.title} <br /> Card: {card.message} <br /> <button handleOnClick={this.LikeButtonCount}> ❤ Like: {this.state.count} </button></p>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Cards

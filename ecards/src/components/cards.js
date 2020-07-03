import React from 'react'
import { getCards } from '../Api'

class Cards extends React.Component {
  constructor () {
    super()
    this.state = {
      cards: [],
      token: window.localStorage.getItem('login_auth_token')
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

  render () {
    return (
      <div className='Cards'>
        {/* {this.state.token} */}
        <div>
          <div>
            {this.state.cards.map(card => <p className='container' key={card.id}>{card.message}</p>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Cards

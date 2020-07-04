import React from 'react'
import axios from 'axios'

class createCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      title: '',
      subject: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubjectChange = this.handleSubjectChange.bind(this)
  }

  handleTitleChange (event) {
    this.setState({ title: event.target.value })
  }

  handleSubjectChange (event) {
    this.setState({ body: event.target.value })
  }

  handleSubmit (event) {
    const cardPost = {
      token: window.localStorage.getItem('login_auth_token')
    //   card_name: this.state.title,
    //   card_text: this.state.subject
    }
    axios
      .post('https://ecards-api-ben.herokuapp.com/api/cards/', { cardPost })
      .then(response =>
        this.setState({
          title: response.data, subject: response.data, token: window.localStorage.getItem('login_auth_token')
        }))
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <div className='form-area'>
          <form onSubmit={this.handleSubmit}>
            <br styles='clear:both' />
            <div className='form-group'>
              <input type='text' onChange={this.handleTitleChange} className='form-control' id='title' name='title' placeholder='Title' required />
            </div>

            <div className='form-group'>
              <textarea className='form-control' onChange={this.handleSubjectChange} type='textarea' id='subject' placeholder='Subject' maxLength='140' rows='7' />
            </div>

            <button type='submit' id='submit' name='submit' value='Submit' className='button'>Add Card</button>
          </form>
        </div>
      </div>
    )
  }
}

export default createCard

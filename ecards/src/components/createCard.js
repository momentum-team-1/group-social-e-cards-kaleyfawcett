import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class CreateCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    //   token: window.localStorage.getItem('login_auth_token'),
      title: '',
      subject: '',
      created: false
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubjectChange = this.handleSubjectChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange (event) {
    this.setState({ title: event.target.value })
  }

  handleSubjectChange (event) {
    this.setState({ subject: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    // const Token = 'login_auth_token'
    axios
      .post('https://ecards-api-ben.herokuapp.com/api/cards/', {
        card_name: this.state.title,
        card_text: this.state.subject
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
    if (this.state.created) {
      return <Redirect to='/cards/all/' />
    }
    return (
      <div>
        <div className='form-area'>
          <form onSubmit={this.handleSubmit}>
            <br styles='clear:both' />
            <div className='form-group'>
              <input type='text' onChange={this.handleTitleChange} value={this.state.title} className='form-control' id='title' name='title' placeholder='Title' required />
            </div>

            <div className='form-group'>
              <textarea className='form-control' onChange={this.handleSubjectChange} value={this.state.subject} type='textarea' id='subject' placeholder='Subject' maxLength='140' rows='7' />
            </div>

            <button type='submit' id='submit' name='submit' value='Submit' className='button'>Add Card</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateCard

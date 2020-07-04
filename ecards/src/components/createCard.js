import React from 'react'
// import './App.css'
import axios from 'axios'

class createCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      subject: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSubjecChange = this.handleSubjectChange.bind(this)
  }

  handleTitleChange (event) {
    this.setState({ title: event.target.value })
  }

  handleSubjectChange (event) {
    this.setState({ body: event.target.value })
  }

  componentDidMount () {
    axios
      .post('/createCard', {
        title: this.state.title,
        subject: this.state.subject
      })
  }

  render () {
    return (
      <div>
        <div className='form-area'>
          <form>
            <br styles='clear:both' />
            <div className='form-group'>
              <input type='text' onChange={this.handleTitleChange} className='form-control' id='title' name='title' placeholder='Title' required />
            </div>

            <div className='form-group'>
              <textarea className='form-control' onChange={this.handleSubjectChange} type='textarea' id='subject' placeholder='Subject' maxLength='140' rows='7' />
            </div>

            <button type='button' id='submit' name='submit' className='button'>Add Card</button>
          </form>
        </div>
      </div>
    )
  }
}

export default createCard

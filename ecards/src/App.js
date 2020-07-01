import React from 'react'
import Login from './login'
import './App.css'

class App extends React.Component {

  render () {
    return (
      <div className='App'>
        <header>E Card Social Time</header>
        <Login />
        <footer> Created by Sarah Akus and Kaley Fawcett</footer>
      </div>
    )
  }
}

export default App

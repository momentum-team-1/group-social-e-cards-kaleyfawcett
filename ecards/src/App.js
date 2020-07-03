import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Cards from './components/cards'
import Login from './components/login'
import ProfilePage from './components/profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token')

    }
  }

  render () {
    return (
      <div className='App'>
        <header>E Card Social Time</header>
        <Router>
          <Nav />
          <Switch>
            <Route path='/login/' component={Login} token={this.state.token} setToken={token => this.setState({ token: token })} />
            <Route path='/profile/' component={ProfilePage} />
            <Route path='/cards/all/' component={Cards} />
          </Switch>
        </Router>

        <footer> Created by Sarah Akus and Kaley Fawcett</footer>
      </div>
    )
  }
}

export default App

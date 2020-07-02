import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Cards from './components/cards'
import Login from './components/login'
import ProfilePage from './components/profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <header>E Card Social Time</header>
        <Router>
          <Nav />
          <Switch>
            <Route path='/auth/token/login/' component={Login} />
            <Route path='/auth/users/me/' component={ProfilePage} />
            <Route path='/cards/all/' component={Cards} />
          </Switch>
        </Router>

        <footer> Created by Sarah Akus and Kaley Fawcett</footer>
      </div>
    )
  }
}

export default App

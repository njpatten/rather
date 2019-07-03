import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Nav from './Nav'
import HomePage from './HomePage'
import SignIn from './SignIn'
import Questions from './Questions'
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

import { setAuthedUser } from '../actions/authedUser'


class App extends Component {
  state = {
    loading: true
  }

  componentDidMount () {
    this.props.dispatch(handleInitialData())

    window.logout = () => this.props.dispatch(setAuthedUser(null))
    var loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser) {
      this.props.dispatch(setAuthedUser(loggedInUser))
    }
  }

  render() {
    return (
      <Router>
          <div className='container'>
            <div className="nav">
              <Nav />
            </div>
            {/* <Route path='/' exact component={HomePage} /> */}
            {this.props.authedUser ? 
              <Route path='/' exact component={HomePage} />
            : <Route path='/' exact component={SignIn} />
            }
            <Route path='/questions/:question_id' component={Questions} />
            <Route path='/new-question' component={NewQuestion} />
            <Route path='/leaderboard' component={Leaderboard} />
          </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return { 
    authedUser: state.authedUser 
  }
}

export default connect(mapStateToProps)(App)
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Nav from './Nav'
import HomePage from './HomePage'
import SignIn from './SignIn'
import Questions from './Questions'
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import NavSecondary from './NavSecondary';
import NoMatch from './NoMatch';

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
          {this.props.authedUser && 
              <div className="nav">
                <Nav />
                <NavSecondary />
              </div>
          }
          <Switch>
            {this.props.authedUser ? 
            <div>
              <Route path='/' exact component={HomePage} />
              <Route path='/questions/:question_id' component={Questions} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
            </div> : <Route path='/' exact component={SignIn} />
            }
            <Route component={NoMatch} />
            </Switch>
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
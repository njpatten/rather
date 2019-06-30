import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Nav from './Nav'
import HomePage from './HomePage'
import SignIn from './SignIn'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
    // console.log(this.props)
  }

  render() {
    return (
      <Router>
          <div className='container'>
            <Nav />
            {/* <Route path='/' exact component={HomePage} /> */}
            {this.props.authedUser ? 
              <Route path='/' exact component={HomePage} />
            : <Route path='/' exact component={SignIn} />
            }
          </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { 
    authedUser: state.authedUser 
  }
}

export default connect(mapStateToProps)(App)
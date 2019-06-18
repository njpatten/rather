import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import SignIn from './SignIn'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
    console.log(this.props)
  }

  render() {
    return (
      <Router>
          <div className='container'>
            <Route path='/' exact component={SignIn} />
          </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps)(App)
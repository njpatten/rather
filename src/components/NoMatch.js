import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import { handleInitialData } from '../actions/shared'

const Homepage = props => {

    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h2>Oops! Page can't be found!</h2>
      </div>
    )
}

function mapStateToProps(state) {
  return { 
    users: state.users,
    questions: state.questions,
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(Homepage)
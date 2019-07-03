import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import authedUser from '../reducers/authedUser';

class Leaderboard extends Component {

  render() {

    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Leaderboard</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    users: state.users,
    questions: state.questions,
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)
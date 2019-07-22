import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  state={
    loading: true
  }

  getAnswered = user => {
    let totalAnswered = 0;
    let questionObj = this.props.questions;
    let questions = Object.keys(questionObj).map(key => questionObj[key])
    questions.map(question => {
      if (question.optionOne.votes.includes(user)){
        totalAnswered = totalAnswered + 1
      }
      if (question.optionTwo.votes.includes(user)){
        totalAnswered = totalAnswered + 1
      }
      return totalAnswered
    })
    return totalAnswered
  }


  render() {
    const userObj = this.props.users
    let users = Object.values(userObj)
    users.map(user => {
      let leaderboard = user.questions.length + this.getAnswered(user.id)
      user.leaderboard = leaderboard
      return user;
    })
    users = users.sort((a, b) => b.leaderboard - a.leaderboard)
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Leaderboard</h1>
        {users && users.length ? 
          users.map(user => (
          <div key={user.id} className='leader-wrap'>
            <img src={user.avatarURL} style={{width: '50px', height: '50px', borderRadius: '100%'}} alt="img" />
            <div className="leader-info">
              <p>{user.name}</p>
              <p>Has asked {user.questions.length} questions</p>
              <p>Has answered {this.getAnswered(user.id)} questions</p>
              <p>Total = {user.leaderboard}</p>
            </div>
          </div>
        ))
        : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    users: state.users,
    questions: state.questions,
  }
}

export default connect(mapStateToProps)(Leaderboard)
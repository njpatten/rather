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
    console.log(questions)
    questions.map(question => {
      if (question.optionOne.votes.includes(user)){
        totalAnswered = totalAnswered + 1
        console.log('yes')
      }
      if (question.optionTwo.votes.includes(user)){
        totalAnswered = totalAnswered + 1
        console.log('ok')
      }
      console.log(totalAnswered)
      return totalAnswered
    })
    return totalAnswered
  }


  render() {
    const userObj = this.props.users
    const  users = Object.keys(userObj);
    console.log(users)
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>Leaderboard</h1>
        {users && users.length ? 
          users.map(user => (
          <div key={userObj[user].id} className='leader-wrap'>
            <img src={userObj[user].avatarURL} style={{width: '50px', height: '50px', borderRadius: '100%'}} />
            <div className="leader-info">
              <p>{userObj[user].name}</p>
              <p>Has asked {userObj[user].questions.length} questions</p>
              <p>Has answered {this.getAnswered(user)} questions</p>
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
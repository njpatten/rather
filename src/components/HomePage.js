import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import authedUser from '../reducers/authedUser';

class Homepage extends Component {
  state = {
    answered: false
  }

  render() {
    let questionObj = this.props.questions;
    let questions = Object.keys(questionObj).map(key => questionObj[key])

    console.log(questions)

    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <button onClick={this.changeAnsweredTab}>Unanswered</button>
          <button onClick={this.changeAnsweredTab}>Answered</button>
        </div>
        {questions.filter(question => question.author === 'sarahedo').map(question => {
          return (
            <Question
              author={question.author}
              optionOne={question.optionOne}
              optionTwo={question.optionTwo}
            />
          )
        })}
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

export default connect(mapStateToProps)(Homepage)
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'

let questions;

class Homepage extends Component {

  render() {
    let questionObj = this.props.questions;

    if (questionObj){
      // questions = Object.keys(questionObj.state).map(key => questionObj.state[key])
    }
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
        {questions.map((question, i) => 
          <Question
            author={question.author}
            optionOne={question.optionOne}
            optionTwo={question.optionTwo}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    users: state.users,
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Homepage)
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'

class Questions extends Component {
  state = {
    showValues: true,
    showResults: false,
  }

  handleAnswer = () => {
    this.setState({
      showValues: false,
      showResults: true,
    })
  }

  render() {
    let questionId = this.props.match.params.question_id
    let question = this.props.questions[questionId]

    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        {question ?
          <Question
            author={question.author}
            optionOne={question.optionOne}
            optionTwo={question.optionTwo}
            key={question.id}
            showValues={this.state.showValues}
            showResults={this.state.showResults}
            onAnswer={this.handleAnswer}
          />
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

export default connect(mapStateToProps)(Questions)
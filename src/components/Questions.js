import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _saveQuestionAnswer, _getQuestions } from '../utils/_DATA.js'

import Question from './Question'

class Questions extends Component {
  state = {
    showValues: true,
    showResults: false,
  }

  handleAnswer = (qid, answer) => {
    const { authedUser } = this.props;

    // update redux store
    _saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        _getQuestions().then(questions => console.log(questions))
      })
      .catch(() => console.log('unsuccessful save question'))


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
            id={question.id}
            showValues={this.state.showValues}
            showResults={this.state.showResults}
            onAnswer={(answer) => this.handleAnswer(question.id, answer)}
          />
        : <h2>Oops! No question here!</h2>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    authedUser: state.authedUser,
    questions: state.questions,
  }
}

export default connect(mapStateToProps)(Questions)
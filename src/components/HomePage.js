import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import { handleInitialData } from '../actions/shared'

class Homepage extends Component {
  state = {
    answered: false,
  }

  componentDidMount = () => {
    this.props.dispatch(handleInitialData())
    console.log(this.props)
  }

  getShownQuestions = () => {
    let questionObj = this.props.questions;
    let questions = Object.keys(questionObj).map(key => questionObj[key])

    let shownQuestions = [];

    if (this.state.answered) {
      questions.forEach(question => {
        if (question.optionOne.votes.includes(this.props.authedUser) || question.optionTwo.votes.includes(this.props.authedUser)){
          shownQuestions.push(question);
        }
      })
    } else {
      questions.forEach(question => {
        if (!question.optionOne.votes.includes(this.props.authedUser) && !question.optionTwo.votes.includes(this.props.authedUser)){
          shownQuestions.push(question);
        }
      })
    }
    return shownQuestions;
  }

  changeAnsweredTab = () => {
    this.setState({
      answered: !this.state.answered,
    })
  }

  render() {

    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <button onClick={this.changeAnsweredTab} className={!this.state.answered ? 'solid' : null}>Unanswered</button>
          <button onClick={this.changeAnsweredTab} className={this.state.answered ? 'solid' : null}>Answered</button>
        </div>
        {this.getShownQuestions().map(question => {
          return (
            <Question
              author={question.author}
              optionOne={question.optionOne}
              optionTwo={question.optionTwo}
              key={question.id}
              id={question.id}
              showResults={this.state.answered}
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
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import authedUser from '../reducers/authedUser';

class Homepage extends Component {
  state = {
    answered: true,
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

  componentDidMount = () => {
    console.log(this.props)
  }

  render() {

    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <button onClick={this.changeAnsweredTab}>Unanswered</button>
          <button onClick={this.changeAnsweredTab}>Answered</button>
        </div>
        {this.getShownQuestions().map(question => {
          return (
            <Question
              author={question.author}
              optionOne={question.optionOne}
              optionTwo={question.optionTwo}
              key={question.id}
              id={question.id}
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
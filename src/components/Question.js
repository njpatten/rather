import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

class Question extends Component {
  state= {
    selectedAnswer: null,
    selectedAnswerText: '',
  }

  componentDidMount = () => {

    if (this.props.showResults){
      if (this.props.optionOne.votes.includes(this.props.authedUser)){
        this.setState({
          selectedAnswer: 'optionOne',
          selectedAnswerText: this.props.optionOne.text
        })
      }
      else if (this.props.optionTwo.votes.includes(this.props.authedUser)){
        this.setState({
          selectedAnswer: 'optionTwo',
          selectedAnswerText: this.props.optionTwo.text
        })
      }
    }
  }

  handleChange = event => {
    let question = this.props.questions[this.props.id]
    let questionText = question[event.target.value].text

    this.setState({
      selectedAnswer: event.target.value,
      selectedAnswerText: questionText,
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.selectedAnswer != null){
      let selectedAnswer = this.state.selectedAnswer
      this.props.onAnswer(selectedAnswer);
      this.props[selectedAnswer].votes.push(this.props.authedUser)
    }
  }

  getPercent = optionVotes => {
    const totalVotes = this.props.optionTwo.votes.length + this.props.optionOne.votes.length;
    return Math.round(optionVotes/totalVotes * 100)
  }

  hasBeenAnswered = () => {
    let { authedUser } = this.props;
    if (this.props.optionOne.votes.includes(authedUser) || this.props.optionTwo.votes.includes(authedUser)){
      return true
    }
  }

  render() {
    const { author, optionOne, optionTwo, id } = this.props
    return (
      <div style={{width: '500px'}}>
        <div style={{display: 'flex', background: '#f1f1f1', padding: '8px'}}>
          {author} asks:
        </div>
        <div style={{display: 'flex', alignItems: 'center', margin: '20px'}}>
          <img src={this.props.users[author].avatarURL} className="image-avatar"/>
          <div style={{textAlign: 'left'}}>
            <h2 style={{marginTop: '0'}}>Would you rather:</h2>
            {this.props.location.pathname !== '/' && !this.hasBeenAnswered() ?
              <form onSubmit={this.handleSubmit}>
                <div style={{display: 'flex'}}>
                  <input type="radio" id="optionOne" value="optionOne" name="question" onChange={this.handleChange} />
                  <label htmlFor="optionOne">{optionOne.text}</label>
                </div>
                <div style={{display: 'flex'}}>
                  <input type="radio" id="optionTwo" value="optionTwo" name="question" onChange={this.handleChange}/>
                  <label htmlFor="optionTwo">{optionTwo.text}</label>
                </div>
                <button>Submit</button>
              </form>
            : this.hasBeenAnswered() ?
            <div>
              <p>{optionOne.text} has {optionOne.votes.length} votes ({this.getPercent(optionOne.votes.length)}%)</p>
              <p>{optionTwo.text} has {optionTwo.votes.length} votes ({this.getPercent(optionTwo.votes.length)}%)</p>
              <hr />
              <p>Your answer: {this.state.selectedAnswerText}</p>
            </div>
            : <div>
              <p>{optionOne.text} or...</p> 
              <Link to={`/questions/${id}`}>
                <button>Go to Question</button>
              </Link>
            </div>}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    users: state.users,
    authedUser: state.authedUser,
    questions: state.questions,
  }
}

export default withRouter(connect(mapStateToProps)(Question));
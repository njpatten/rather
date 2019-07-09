import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
      this.props.onAnswer(this.state.selectedAnswer);
    }
  }

  getPercent = optionVotes => {
    const totalVotes = this.props.optionTwo.votes.length + this.props.optionOne.votes.length;
    return optionVotes/totalVotes * 100
  }

  render() {
    const { author, optionOne, optionTwo, id, showValues, showResults } = this.props

    return (
      <div style={{width: '500px'}}>
        <div style={{display: 'flex', background: '#f1f1f1', padding: '8px'}}>
          {author} asks:
        </div>
        <div style={{display: 'flex', alignItems: 'center', margin: '20px'}}>
          <img src={this.props.users[author].avatarURL} className="image-avatar"/>
          <div style={{textAlign: 'left'}}>
            <h2 style={{marginTop: '0'}}>Would you rather:</h2>
            {showValues ?
              <form onSubmit={this.handleSubmit}>
                <div style={{display: 'flex'}}>
                  <input type="radio" id="optionOne" value="optionOne" name="question" onChange={this.handleChange} />
                  <label for="optionOne">{optionOne.text}</label>
                </div>
                <div style={{display: 'flex'}}>
                  <input type="radio" id="optionTwo" value="optionTwo" name="question" onChange={this.handleChange}/>
                  <label for="optionTwo">{optionTwo.text}</label>
                </div>
                <button>Submit</button>
              </form>
            : showResults ?
            <div>
              <p>{optionOne.text} has {optionOne.votes.length} votes ({this.getPercent(optionOne.votes.length)}%)</p>
              <p>{optionTwo.text} has {optionTwo.votes.length} votes ({this.getPercent(optionTwo.votes.length)}%)</p>
              <hr />
              <p>Your answer: {this.state.selectedAnswerText}</p>
              <Link to='/'><button>Back to Questions</button></Link>
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

export default connect(mapStateToProps)(Question)
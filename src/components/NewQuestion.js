import React, { Component } from 'react'
import { connect } from 'react-redux'

import { _saveQuestion } from '../utils/_DATA.js'

class NewQuestion extends Component {
  state={
    optionOne: '',
    optionTwo: '',
  }

  createQuestion = event => {
    event.preventDefault();
    const question = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo,
      author: this.props.authedUser,
    }
    _saveQuestion(question).then(data => {
      console.log(data)},
      this.props.history.push('/')
    ).catch(() => console.log('no'))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>New Question</h1>
        <h2>Would you rather...</h2>
        <form onSubmit={this.createQuestion}>
          <div className="form-wrap">
            <label htmlFor="optionOne">Option One</label>
            <input id="optionOne" name="optionOne" type="text" value={this.state.optionOne} onChange={this.handleChange}></input>
          </div>
          <div className="form-wrap">
            <label htmlFor="optionTwo">Option Two</label>
            <input id="optionTwo" name="optionTwo" type="text" value={this.state.optionTwo} onChange={this.handleChange}></input>
          </div>
          <div className="form-wrap">
            <button>Submit Question</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
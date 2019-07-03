import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Question extends Component {

  componentDidMount = () => {
    console.log(this.props)
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAnswer();
  }

  render() {
    const { author, optionOne, optionTwo, id, showValues, showResults } = this.props
    console.log(this.props)

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
                  <input type="radio" id="option1" />
                  <label> {optionOne.text}</label>
                </div>
                <div style={{display: 'flex'}}>
                  <input type="radio" id="option1" />
                  <label> {optionTwo.text}</label>
                </div>
                <button>Submit</button>
              </form>
            : showResults ? 
            <div>show results</div>
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
  }
}

export default connect(mapStateToProps)(Question)
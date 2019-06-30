import React, { Component } from 'react'


class Question extends Component {
  render() {
    const { author, optionOne, optionTwo } = this.props
    console.log(this.props)

    return (
      <div style={{width: '500px'}}>
        <div style={{display: 'flex', background: '#f1f1f1', padding: '5px'}}>
          {author} asks:
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: '200px', height: '200px'}}>
            <img src="http://placekitten.com/200/300" />
          </div>
          <div>
            <h2>Would you rather:</h2>
              <form onSubmit={() => console.log('fml')}>
                <div style={{display: 'flex'}}>
                  <input type="radio" id="option1" />
                  <label>{optionOne.text}</label>
                </div>
                <div style={{display: 'flex'}}>
                  <input type="radio" id="option1" />
                  <label>{optionTwo.text}</label>
                </div>
                <button>Submit</button>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Question;
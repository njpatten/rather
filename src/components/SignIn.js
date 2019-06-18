import React, { Component } from 'react'
import { connect } from 'react-redux'


class SignIn extends Component {
  componentDidMount () {
    // console.log(this.props)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <select>
          {this.props.users && this.props.users.length ? 
            this.props.users.map(user => <option>user</option>)
          : null}
        </select>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { 
    users: state.users
  }
}

export default connect(mapStateToProps)(SignIn)
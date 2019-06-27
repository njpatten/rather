import React, { Component } from 'react'
import { connect } from 'react-redux'


class SignIn extends Component {
  render() {
    let users;

    if (this.props.users){
      users = Object.keys(this.props.users);
    }
    return (
      <div>
        <select>
          <option>select a user</option>
          {/* {users.map(user => <option key={user}>{user}</option>)} */}
        </select>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    users: state.users
  }
}

export default connect(mapStateToProps)(SignIn)
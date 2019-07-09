import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'


class NavSecondary extends Component {
  logOut = () => {
    this.props.dispatch(setAuthedUser(null))
  }
  render() {
    let { authedUser, users } = this.props;
    let authedUserObj = users[authedUser]
    return (
      <ul className="nav-secondary">
        {authedUserObj ? 
          <li><img src={authedUserObj.avatarURL} className="nav-avatar"/></li>
        : null}
        {/* {authedUser ? 
          <li onClick={this.logOut}>Log Out</li>
        : <li>Log In</li>} */}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { 
    authedUser: state.authedUser,
    users: state.users
  }
}

export default connect(mapStateToProps)(NavSecondary)
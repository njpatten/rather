import React, { Component } from 'react'
import {  withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'


class NavSecondary extends Component {
  
  logOut = () => {
    this.props.dispatch(setAuthedUser(null))
    localStorage.removeItem('loggedInUser');
    this.props.history.push('/')
  }

  render() {
    let { authedUser, users } = this.props;
    let authedUserObj = users[authedUser]

    return (
      <div>
        {authedUserObj ? 
          <ul className="nav-secondary">
            <li><img src={authedUserObj.avatarURL} className="nav-avatar"/></li>
            <li>Logged in as {authedUser}</li>
            <li style={{cursor: 'pointer'}} onClick={this.logOut}>Log Out</li>
          </ul>
        : null}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    authedUser: state.authedUser,
    users: state.users
  }
}

export default withRouter(connect(mapStateToProps)(NavSecondary));
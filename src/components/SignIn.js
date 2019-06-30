import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'


class SignIn extends Component {
  state = {
    id: null
  }

  setAuthedUser = (event) => {
    event.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.id))
  }

  handleChange = event => {
    this.setState({
      id: event.target.value
    })
  }

  render() {
    let users = Object.keys(this.props.users);

    return (
      <div style={{ border: '2px solid aquamarine', padding: '20px 40px 40px', width: '500px', textAlign: 'center' }}>
        <h1>Sign In</h1>
        <form style={{ display: 'flex', flexDirection: 'column', width: 'fit-content', margin: 'auto'}} onSubmit={this.setAuthedUser}>
          <select style={{ WebkitAppearance: 'none', background: 'aquamarine', padding: '5px 10px', border: 'none', borderRadius: 0, marginBottom: '10px' }} onChange={this.handleChange}>
            <option>select a user</option>
            {users.map(user => <option key={user}>{user}</option>)}
          </select>
          <button style={{ webkitAppearance: 'none'}} >Select</button>
        </form>
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
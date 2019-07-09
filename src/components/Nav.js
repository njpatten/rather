import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <ul className="main-nav">
        <Link to='/'>
          <li key='home'>
            Home
          </li>
        </Link>
        <Link to='/new-question'>
          <li key='new'>
            New Question
          </li>
        </Link>
        <Link to='/leaderboard'>
          <li key='leaderboard'>
            Leaderboard
          </li>
        </Link>
      </ul>
    )
  }
}

export default Nav;
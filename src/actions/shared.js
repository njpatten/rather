import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

export function handleInitialData () {
  return async dispatch => {
    return getInitialData()
      .then( ( {users, questions} ) => {
        dispatch(receiveUsers(users, questions))
        dispatch(receiveQuestions(questions))
      })
  }
}
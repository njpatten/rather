export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

// export function getUsers() {
//   return async dispatch => {
//     dispatch(receiveUsers(users));
//   };
// }
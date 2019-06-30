export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

// export function getQuestions(questions) {
//   return async dispatch => {
//     dispatch(receiveQuestions(questions));
//   };
// }
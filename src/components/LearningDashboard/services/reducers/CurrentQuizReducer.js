import { SET_CURRENT_QUIZ } from "../constents/CurrentQuizContents";

const currentQuiz = "";

export const CurrentQuizReducer = (state = currentQuiz, action) => {
  switch (action.type) {
    case SET_CURRENT_QUIZ:
      return action.payload;

    default:
      return state;
  }
};

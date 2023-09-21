import { SET_QUIZ_DATA } from "../constents/QuizDataConstents";

export const QuizDataAction = (value) => {
  return {
    type: SET_QUIZ_DATA,
    payload: value,
  };
};

import { QUIZ_VALIDATE } from "../constents/QuizValidationConstets";

const quizValidate = false;

export const QuizValidationReducer = (state = quizValidate, action) => {
  switch (action.type) {
    case QUIZ_VALIDATE:
      return action.payload;

    default:
      return state;
  }
};

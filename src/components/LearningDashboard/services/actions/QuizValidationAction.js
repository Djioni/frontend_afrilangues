import { QUIZ_VALIDATE } from "../constents/QuizValidationConstets";

export const QuizValidationAction = (value) => {
  return {
    type: QUIZ_VALIDATE,
    payload: value,
  };
};

import { GET_QUESTIONS } from "../constents/GetQuestionConstents";

export const GetQuestionsAction = (value) => {
  return {
    type: GET_QUESTIONS,
    payload: value,
  };
};

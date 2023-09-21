import { GET_QUESTIONS } from "../constents/GetQuestionConstents";

const questionsData = {
  questions: [],
};

export const GetQuestionReducer = (state = questionsData, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { questions: action.payload };

    default:
      return state;
  }
};

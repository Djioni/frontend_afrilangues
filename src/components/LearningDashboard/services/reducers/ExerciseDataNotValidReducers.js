import { SET_CURRENT_QUIZ } from "../constents/CurrentQuizContents";
import { SET_EXERCISE_DATA_NOT_VALID } from "../constents/ExerciseDataNotValidConstent";

const ExerciseDataNotValid = {
  id: "",
  title: "",
  type: "",
  error: "",
  data: "",
};

export const ExerciseDataNotValidReducers = (
  state = ExerciseDataNotValid,
  action
) => {
  switch (action.type) {
    case SET_EXERCISE_DATA_NOT_VALID:
      return action.payload;

    default:
      return state;
  }
};

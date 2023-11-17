import { SET_EXERCISE_DATA_NOT_VALID } from "../constents/ExerciseDataNotValidConstent";

export const ExerciseDataNotValidAction = (value) => {
  return {
    type: SET_EXERCISE_DATA_NOT_VALID,
    payload: value,
  };
};

import { GET_EXERCISE } from "../constents/GetExerciseConstents";

export const GetExerciseAction = (value) => {
  return {
    type: GET_EXERCISE,
    payload: value,
  };
};

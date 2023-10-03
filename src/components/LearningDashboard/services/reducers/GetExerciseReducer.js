import { GET_EXERCISE } from "../constents/GetExerciseConstents";

const exercises = null;

export const GetExerciseReducer = (state = exercises, action) => {
  switch (action.type) {
    case GET_EXERCISE:
      return action.payload;

    default:
      return state;
  }
};

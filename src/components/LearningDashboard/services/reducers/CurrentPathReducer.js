import { GET_CURRENT_PATH } from "../constents/CurrentPathConstents";

const currentPath = "fdf";

export const CurrentPathReducer = (state = currentPath, action) => {
  switch (action.type) {
    case GET_CURRENT_PATH:
      return action.payload;

    default:
      return state;
  }
};

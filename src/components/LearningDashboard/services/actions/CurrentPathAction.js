import { GET_CURRENT_PATH } from "../constents/CurrentPathConstents";

export const CurrentPathAction = (value) => {
  return {
    type: GET_CURRENT_PATH,
    payload: value,
  };
};

import { GET_THEME } from "../constents/ThemeConstents";

export const ThemeAction = (value) => {
  return {
    type: GET_THEME,
    payload: value,
  };
};

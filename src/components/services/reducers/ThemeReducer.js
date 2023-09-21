import { GET_THEME } from "../constents/ThemeConstents";

const currentTheme = [];

export const ThemeReducer = (state = currentTheme, action) => {
  switch (action.type) {
    case GET_THEME:
      return action.payload;

    default:
      return state;
  }
};

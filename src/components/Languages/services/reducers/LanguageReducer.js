import { GET_LANGUAGE } from "../constents/LanguageConstent";
const language = {
  language: "",
};
export const GetLanguageReducer = (state = language, action) => {
  switch (action.type) {
    case GET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

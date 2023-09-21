import { GET_LANGUAGE } from "../constents/LanguageConstent";

export const GetLanguageAction = (value) => {
  return {
    type: GET_LANGUAGE,
    payload: value,
  };
};

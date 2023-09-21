import { AUTH_LOGIN } from "../constents/AuthConstents";

const userData = {
  token: "",
  id: "",
};

export const AuthReducer = (state = userData, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return action.payload;
    default:
      return state;
  }
};

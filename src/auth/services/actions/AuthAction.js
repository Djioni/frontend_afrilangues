import { AUTH_LOGIN } from "../constents/AuthConstents";

export const AuthAction = (value) => {
  return {
    type: AUTH_LOGIN,
    payload: value,
  };
};

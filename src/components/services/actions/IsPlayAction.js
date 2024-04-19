import { IS_PLAY } from "../constents/IsPlayContent";

export const IsPlayAction = (value) => {
  return {
    type: IS_PLAY,
    payload: value,
  };
};

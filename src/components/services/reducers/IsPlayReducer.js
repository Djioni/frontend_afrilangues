import { IS_PLAY } from "../constents/IsPlayContent";

const isPlay = false;

export const IsPlayReducer = (state = isPlay, action) => {
  switch (action.type) {
    case IS_PLAY:
      return action.payload;

    default:
      return state;
  }
};

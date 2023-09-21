import { GET_MEMORY_GAME_DATA } from "../constents/MemoryGameConstent";

export const MemoryGameDataAction = (value) => {
  return {
    type: GET_MEMORY_GAME_DATA,
    payload: value,
  };
};

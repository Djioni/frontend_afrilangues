import { GET_MEMORY_GAME_DATA } from "../constents/MemoryGameConstent";

const CardArray = [];

export const MemoryGameDataReducer = (state = CardArray, action) => {
  switch (action.type) {
    case GET_MEMORY_GAME_DATA:
      return action.payload; // Fix the typo here from `paload` to `payload`

    default:
      return state;
  }
};

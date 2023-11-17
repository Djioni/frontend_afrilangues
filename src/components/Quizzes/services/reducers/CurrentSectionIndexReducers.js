import { SET_CURRENT_SECTION_INDEX } from "../constents/CurrentSectionIndexConstent";

const currentSectionIndex = 0;

export const CurrentSectionIndexReducers = (
  state = currentSectionIndex,
  action
) => {
  switch (action.type) {
    case SET_CURRENT_SECTION_INDEX:
      return action.payload;

    default:
      return state;
  }
};

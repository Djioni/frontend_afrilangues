import { SET_CURRENT_SECTION_INDEX } from "../constents/CurrentSectionIndexConstent";

export const CurrentLessonIndexAction = (value) => {
  return {
    type: SET_CURRENT_SECTION_INDEX,
    payload: value,
  };
};

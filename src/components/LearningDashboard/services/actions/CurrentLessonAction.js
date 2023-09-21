import { SET_CURRENT_LESSON } from "../constents/CurrentLessonConstents";

export const CurrentLessonAction = (value) => {
  return {
    type: SET_CURRENT_LESSON,
    payload: value,
  };
};

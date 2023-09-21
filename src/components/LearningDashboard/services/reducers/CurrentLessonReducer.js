import { SET_CURRENT_LESSON } from "../constents/CurrentLessonConstents";

const currentLesson = {
  currentLesson: "", // You can set your initial lesson here
};

export const currentLessonReducer = (state = currentLesson, action) => {
  switch (action.type) {
    case SET_CURRENT_LESSON:
      return { currentLesson: action.payload }; // Update the lesson based on the action payload
    default:
      return state;
  }
};

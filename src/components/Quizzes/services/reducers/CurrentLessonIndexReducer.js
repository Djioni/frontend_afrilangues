import { SET_LESSON_QUIZ } from "../constents/LessonQuizActionConstents";

const currentLessonIndex = 0;

export const CurrentLessonIndexReducer = (
  state = currentLessonIndex,
  action
) => {
  switch (action.type) {
    case SET_LESSON_QUIZ:
      return action.payload;

    default:
      return state;
  }
};

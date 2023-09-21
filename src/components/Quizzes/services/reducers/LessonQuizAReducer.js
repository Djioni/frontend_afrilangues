import { SET_LESSON_QUIZ } from "../constents/LessonQuizActionConstents";

const LessonName = "";

export const LessonQuizReducer = (state = LessonName, action) => {
  switch (action.type) {
    case SET_LESSON_QUIZ:
      return action.payload;

    default:
      return state;
  }
};

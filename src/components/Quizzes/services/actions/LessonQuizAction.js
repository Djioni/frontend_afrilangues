import { SET_LESSON_QUIZ } from "../constents/LessonQuizActionConstents";

export const LessonQuizAction = (value) => {
  return {
    type: SET_LESSON_QUIZ,
    payload: value,
  };
};

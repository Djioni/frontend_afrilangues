import { SET_LESSON_QUIZ } from "../../../Quizzes/services/constents/LessonQuizActionConstents";

export const CurrentQuizAction = (value) => {
  return {
    type: SET_LESSON_QUIZ,
    payload: value,
  };
};

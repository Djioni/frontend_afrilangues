import {
  BONUS_POINT_INCREMENT,
  LESSON_INCREMENT,
} from "../constents/LessonConstents";

export const lessonIncrement = (value) => {
  return {
    type: LESSON_INCREMENT,
    payload: value,
  };
};

export const bonusPointIncrement = (value) => {
  return {
    type: BONUS_POINT_INCREMENT,
    payload: value,
  };
};

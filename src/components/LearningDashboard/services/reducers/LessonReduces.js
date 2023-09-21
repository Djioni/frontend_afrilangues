import {
  BONUS_POINT_INCREMENT,
  LESSON_INCREMENT,
} from "../constents/LessonConstents";

const lessonState = {
  lavel: 0,
  point: 0,
  ciwara: 0,
};

export const LessonReducer = (state = lessonState, action) => {
  switch (action.type) {
    case LESSON_INCREMENT:
      return {
        ...state,
        ciwara: action.payload,
        lavel: Math.floor(action.payload / 5),
      };
    case BONUS_POINT_INCREMENT:
      return {
        ...state,
        point: action.payload,
      };

    default:
      return state;
  }
};

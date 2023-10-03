import { GET_LESSON_SECTION } from "../constents/GetLessonSectionConstents";

const lessonsection = null;

export const GetLessonSectionReducer = (state = lessonsection, action) => {
  switch (action.type) {
    case GET_LESSON_SECTION:
      return action.payload;

    default:
      return state;
  }
};

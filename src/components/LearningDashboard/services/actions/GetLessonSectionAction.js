import { GET_LESSON_SECTION } from "../constents/GetLessonSectionConstents";

export const GetLessonSectionAction = (value) => {
  return {
    type: GET_LESSON_SECTION,
    payload: value,
  };
};

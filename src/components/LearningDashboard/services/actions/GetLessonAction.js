import { GET_LESSON } from "../constents/GetLessonContents";

export const GetLessonAction = (value) => {
  return {
    type: GET_LESSON,
    payload: value,
  };
};

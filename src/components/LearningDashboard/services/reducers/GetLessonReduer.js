import { GET_LESSON } from "../constents/GetLessonContents";

const lesson = null;

export const GetLessonReducer = (state = lesson, action) => {
  switch (action.type) {
    case GET_LESSON:
      return action.payload;

    default:
      return state;
  }
};

import { SET_QUIZ_DATA } from "../constents/QuizDataConstents";

const quizData = [
  {
    questionText: "Match the words with their meanings:",
    format: "wordsMatching",
    leftWords: ["Apple", "Banana", "Cherry", "Grapes"],
    rightWords: [
      "A sweet fruit",
      "Yellow and curved",
      "Small and red",
      "Clusters of small round fruits",
    ],
    correctMatches: [0, 1, 2, 3],
  },
];

export const QuizDataReducer = (state = quizData, action) => {
  switch (action.type) {
    case SET_QUIZ_DATA:
      return action.payload;

    default:
      return state;
  }
};

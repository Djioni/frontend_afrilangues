import { API_URL } from "../../../../api";

<<<<<<< HEAD
export const ListenRepeat = (QAdata, userID, exType) => {
  if (QAdata && userID && exType) {
=======
export const ListenRepeat = (QAdata, userID, type, title) => {
  if (QAdata && userID && type && title) {
    QAdata.sort((a, b) => a.order - b.order);
>>>>>>> 2b320164e835b9b8d2fa95c0fc3e932da484332f
    // listen and repeat

    const quizQuestion = [
      {
        order: 0,
        sentence: "Listen and repeat the word:",
        mediaQuestion: [
          {
            media: `${API_URL}/mediaObject/download/6505a4efd7827c142d8f90f6`,
            type: "audio/mpeg",
          },
        ],
        answers: [
          {
            content: "Good Morning",
            mediaResponse: null,
            correct: true,
          },
          {
            content: "Good afternoon",
            mediaResponse: null,
            correct: false,
          },
        ],
      },
    ];

    // Transform the data structure
    const transformedData = QAdata.map((question) => {
      const audioSrc = `${API_URL}/mediaObject/download/${question.mediaQuestion[0].media}`;
      const options = [
        question.sentence,
        ...question.answers.map((answer) => answer.content),
      ];
      const correctAnswer = question.answers.filter(
        (answer) => answer.correct
      )[0].content;

      return {
        questionText: title,
        format: "listenRepeat",
        audioSrc,
        options,
        correctAnswer,
      };
    });

    return [
      {
<<<<<<< HEAD
        id: userID,
        quiztype: exType,
=======
        formatListen: true,
        id: userID,
        type: type,
>>>>>>> 2b320164e835b9b8d2fa95c0fc3e932da484332f
        lessonTitle: "lesson",
        questions: transformedData,
      },
    ];
  }
};

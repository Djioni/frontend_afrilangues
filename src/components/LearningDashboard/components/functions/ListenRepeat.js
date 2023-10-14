import { API_URL } from "../../../../api";

export const ListenRepeat = (QAdata, userID, type, title) => {
  if (QAdata && userID && type && title) {
    QAdata.sort((a, b) => a.order - b.order);
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
        formatListen: true,
        id: userID,
        type: type,
        lessonTitle: "lesson",
        questions: transformedData,
      },
    ];
  }
};

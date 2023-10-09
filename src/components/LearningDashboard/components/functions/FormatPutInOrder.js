<<<<<<< HEAD
export const FormatPutInOrder = (QAdata, QuizID, exType) => {
  if (QAdata && QuizID && exType) {
=======
export const FormatPutInOrder = (QAdata, QuizID, type, title) => {
  if (QAdata && QuizID && type && title) {
    QAdata.sort((a, b) => a.order - b.order);
>>>>>>> 2b320164e835b9b8d2fa95c0fc3e932da484332f
    const jsonString = [
      {
        order: 0,
        speaker: null,
        sentence: "Lɛsogo ka di ne yé.",
        mediaQuestion: [
          {
            media: "650370f541bd45770962a197",
            type: "audio/mpeg",
          },
        ],
        answers: [
          {
            content: "ne",
            mediaResponse: null,
            words: null,
            correct: true,
          },
          {
            content: "ka",
            mediaResponse: null,
            words: null,
            correct: true,
          },
          {
            content: "Lɛsogo",
            mediaResponse: null,
            words: null,
            correct: true,
          },
          {
            content: "yé.",
            mediaResponse: null,
            words: null,
            correct: true,
          },
          {
            content: "di",
            mediaResponse: null,
            words: null,
            correct: true,
          },
        ],
        questionWords: null,
      },
      {
        order: 1,
        speaker: null,
        sentence: "Ne fa bɛ bɔ Mali la",
        mediaQuestion: [
          {
            media: "6503710f41bd45770962a199",
            type: "audio/mpeg",
          },
        ],
        answers: [
          {
            content: "Ne",
            mediaResponse: null,
            words: null,
            correct: true,
          },
          {
            content: "bɔ",
            mediaResponse: null,
            words: null,
            correct: true,
          },
          {
            content: "bɛ",
            mediaResponse: null,
            words: null,
            correct: true,
          },
          {
            content: "la",
            mediaResponse: null,
            words: null,
            correct: true,
          },
          {
            content: "Mali",
            mediaResponse: null,
            words: null,
            correct: true,
          },
          {
            content: "fa",
            mediaResponse: null,
            words: null,
            correct: true,
          },
        ],
        questionWords: null,
      },
    ];

    const convertedData = QAdata.map((item) => {
      return {
        order: item.order,
        type: type,
        questionText: title,
        format: "putInOrder",
        sentence: item.answers.map((answer) => answer.content),
        correctOrder: item.sentence,
      };
    });

    return [
      {
        id: QuizID,
<<<<<<< HEAD
        quiztype: exType,
=======
        type: type,
>>>>>>> 2b320164e835b9b8d2fa95c0fc3e932da484332f
        lessonTitle: "lesson",
        questions: convertedData,
      },
    ];
  }
};

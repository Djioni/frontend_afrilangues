export const FormatPutInOrder = (QAdata, QuizID, exType) => {
  if (QAdata && QuizID && exType) {
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

    const convertedData = jsonString.map((item) => {
      return {
        order: item.order,
        questionText: "Put Words in Order:",
        format: "putInOrder",
        sentence: item.answers.map((answer) => answer.content),
        correctOrder: item.sentence,
      };
    });

    return [
      {
        id: QuizID,
        quiztype: exType,
        lessonTitle: "lesson",
        questions: convertedData,
      },
    ];
  }
};

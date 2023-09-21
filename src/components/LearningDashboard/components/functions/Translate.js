export const Translate = (QAdata, userID) => {
  const quizQuestion = [
    {
      order: 0,
      sentence: "Bonjour comment allez-vous? Comment vont tes études?",
      mediaQuestion: [
        {
          media: "64fc8112d43dc93fd06cfc9a",
          type: "audio/mpeg",
        },
      ],
      answers: [
        {
          content:
            "Good morning, how are you doing? How are your studies going?",
          mediaResponse: null,
          correct: true,
        },
      ],
    },
    {
      order: 2,
      sentence: "Bonjour comment allez-vous? Comment vont tes études?",
      mediaQuestion: [
        {
          media: "64fc8112d43dc93fd06cfc9a",
          type: "audio/mpeg",
        },
      ],
      answers: [
        {
          content:
            "Good morning, how are you doing? How are your studies going?",
          mediaResponse: null,
          correct: true,
        },
      ],
    },
    {
      order: 1,
      sentence: "Bonjour comment allez-vous? Comment vont tes études?",
      mediaQuestion: [
        {
          media: "64fc8112d43dc93fd06cfc9a",
          type: "audio/mpeg",
        },
      ],
      answers: [
        {
          content:
            "Good morning, how are you doing? How are your studies going?",
          mediaResponse: null,
          correct: true,
        },
      ],
    },
    // ... (other questions)
  ];

  // Sort the quiz questions based on their order
  quizQuestion.sort((a, b) => a.order - b.order);

  // Override QAdata and userID if needed

  if (QAdata && userID) {
    QAdata.sort((a, b) => a.order - b.order);

    // Translate the questions
    const convertedQuestions = QAdata.map((question) => ({
      format: "translatingWords",
      word: question.sentence,
      correctTranslation: question.answers[0].content,
      order: question.order,
    }));

    return [
      { id: userID, lessonTitle: "lesson", questions: convertedQuestions },
    ];
  }
};

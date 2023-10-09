<<<<<<< HEAD
export const Translate = (QAdata, userID, exType) => {
=======
export const Translate = (QAdata, userID, type, title) => {
>>>>>>> 2b320164e835b9b8d2fa95c0fc3e932da484332f
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

  if (QAdata && userID && title) {
    QAdata.sort((a, b) => a.order - b.order);

    // Translate the questions
    const convertedQuestions = QAdata.map((question) => ({
      questionText: title,
      format: "translatingWords",
      word: question.sentence,
      correctTranslation: question.answers[0].content,
      order: question.order,
    }));

    return [
      {
        id: userID,
        quiztype: exType,
        lessonTitle: "lesson",
        questions: convertedQuestions,
      },
    ];
  }
};

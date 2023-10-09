<<<<<<< HEAD
export const FormatMatchTheWordsData = (QAdata, QuizID, exType) => {
  if (QAdata && QuizID && exType) {
=======
export const FormatMatchTheWordsData = (QAdata, QuizID, type, title) => {
  if (QAdata && QuizID && type && title) {
    QAdata.sort((a, b) => a.order - b.order);
>>>>>>> 2b320164e835b9b8d2fa95c0fc3e932da484332f
    const data = [
      {
        order: 1,
        speaker: null,
        sentence: "Wula",
        mediaQuestion: [
          {
            media: "6503709741bd45770962a190",
            type: "audio/mpeg",
          },
        ],
        answers: [
          {
            content: "Après-midi",
            mediaResponse: null,
            words: null,
            correct: true,
          },
        ],
        questionWords: null,
      },
      {
        order: 0,
        speaker: null,
        sentence: "Sɔgɔma",
        mediaQuestion: [
          {
            media: "6503708841bd45770962a18e",
            type: "audio/mpeg",
          },
        ],
        answers: [
          {
            content: "Matin",
            mediaResponse: null,
            words: null,
            correct: true,
          },
        ],
        questionWords: null,
      },
      {
        order: 2,
        speaker: null,
        sentence: "Su",
        mediaQuestion: [
          {
            media: "650370a741bd45770962a192",
            type: "audio/mpeg",
          },
        ],
        answers: [
          {
            content: "Soir, nuit",
            mediaResponse: null,
            words: null,
            correct: true,
          },
        ],
        questionWords: null,
      },
      {
        order: 3,
        speaker: null,
        sentence: "Tile",
        mediaQuestion: [
          {
            media: "650370b841bd45770962a194",
            type: "audio/mpeg",
          },
        ],
        answers: [
          {
            content: "Soleil",
            mediaResponse: null,
            words: null,
            correct: true,
          },
        ],
        questionWords: null,
      },
    ];

    // Extract unique answers from the data
    const uniqueAnswers = Array.from(
      new Set(QAdata.map((item) => item.answers[0].content))
    );

    // Shuffle the unique answers randomly
    const shuffledAnswers = uniqueAnswers.slice(); // Create a copy
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [
        shuffledAnswers[j],
        shuffledAnswers[i],
      ];
    }

    // Create the converted data
    const convertedData = [
      {
        questionText: "Match the words with their meanings:",
        format: "wordsMatching",
        leftWords: QAdata.map((item) => item.sentence),
        rightWords: shuffledAnswers,
        correctMatches: QAdata.map((item) =>
          shuffledAnswers.indexOf(item.answers[0].content)
        ),
      },
    ];

    return [
      {
        id: QuizID,
<<<<<<< HEAD
        quiztype: exType,
=======
        title: title,
        type: type,
>>>>>>> 2b320164e835b9b8d2fa95c0fc3e932da484332f
        lessonTitle: "lesson",
        questions: convertedData,
      },
    ];
  }
};

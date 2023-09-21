export const MatchWord = (QAdata) => {
  if (QAdata) {
    const quizQuestion = [
      {
        order: 0,
        sentence: "Listen and repeat the word:",
        mediaQuestion: [
          {
            media: "64fc8112d43dc93fd06cfc9a",
            type: "audio/mpeg",
          },
        ],
        answers: [
          {
            content: "Apple,A sweet fruit",
            mediaResponse: null,
            correct: true,
          },
          {
            content: "Banana,Yellow and curved",
            mediaResponse: null,
            correct: true,
          },
          {
            content: "Cherry,Small and red",
            mediaResponse: null,
            correct: true,
          },
          {
            content: "Grapes,Clusters of small round fruits",
            mediaResponse: null,
            correct: false,
          },
          {
            content: '{"cm":[1,0,3,2]}',
            mediaResponse: null,
            correct: false,
          },
        ],
      },
    ];

    // Convert the data structure
    const transformedData = QAdata.map((question) => {
      const questionText = question.sentence;
      const format = "wordsMatching";

      // Extract words and descriptions from answers
      const leftWords = [];
      const rightWords = [];
      let correctMatches = [];

      question.answers.forEach((answer, index) => {
        try {
          const contentData = JSON.parse(answer.content);
          if (typeof contentData === "object" && contentData.cm) {
            correctMatches = contentData.cm;
          }
        } catch (error) {
          const [word, description] = answer.content.split(",");
          leftWords.push(word.trim());
          rightWords.push(description.trim());
          if (answer.correct) {
            correctMatches.push(rightWords.length - 1);
          }
        }
      });

      return {
        questionText,
        format,
        leftWords,
        rightWords,
        correctMatches,
      };
    });

    return [{ lessonTitle: "lesson", questions: transformedData }];
  }
};

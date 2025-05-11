export const FormatDialogueData = (QAdata, QuizID, title) => {
  if (QAdata && QuizID && title) {
    let transformedData = [];
    let totalInputNumber = 1;

    const QAdataExercise = QAdata.exerciseAndAnswers.sort(
      (a, b) => a.order - b.order
    );

    QAdataExercise.forEach((exercise, index) => {
      const sentence = exercise.sentence;
      const questionWords = exercise.questionWords || [];
      const sentenceParts = sentence.split("...");
      let sentenceBoxes = [];

      console.log("??????exerciseexercise", exercise);
      const content = exercise?.answers[0]?.content;

      const removeSpace = content.replace(/\s+/g, " ");
      const contentArray = removeSpace.split(" ");
      const textValue = removeSpace.split("...").filter((value) => value);

      // Define sentence inputNames
      const sentenceInputNames = questionWords.map(
        (_, i) => `blank${totalInputNumber + i}`
      );

      sentenceParts.forEach((part, i) => {
        sentenceBoxes.push({ type: "text", value: part });
        if (i < questionWords.length) {
          sentenceBoxes.push({
            type: "input",
            name: `blank${totalInputNumber}`,
          });
          totalInputNumber++;
        }
      });

      transformedData.push({
        id: `${index + 1}-s`,
        order: exercise.order,
        type: "sentence",
        boxes: sentenceBoxes,
        rawSentence: sentence,
        inputNames: sentenceInputNames,
        inputs: sentenceInputNames.length,
        text1: textValue[0] ? textValue[0] : "",
        inputFirst: true, // Add inputFirst
        input1Name: `blank${totalInputNumber - sentenceInputNames.length + 1}`, // Add input1Name
      });

      const answer = exercise.answers?.[0]?.content || "";
      const answerWords = exercise.answers?.[0]?.words || [];
      const answerParts = answer.split("...");
      let answerBoxes = [];

      // Define answer inputNames
      const answerInputNames = answerWords.map(
        (_, i) => `blank${totalInputNumber + i}`
      );

      answerParts.forEach((part, i) => {
        answerBoxes.push({ type: "text", value: part });
        if (i < answerWords.length) {
          answerBoxes.push({ type: "input", name: `blank${totalInputNumber}` });
          totalInputNumber++;
        }
      });

      transformedData.push({
        id: `${index + 1}-a`,
        order: exercise.order + 0.1,
        type: "answer",
        boxes: answerBoxes,
        rawSentence: answer,
        inputNames: answerInputNames,
        inputs: answerInputNames.length,
        text1: textValue[0] ? textValue[0] : "",
        inputFirst: true, // Add inputFirst
        input1Name: `blank${totalInputNumber - answerInputNames.length + 1}`, // Add input1Name
      });
    });

    const questionMissingWords = QAdata?.exerciseWords;

    return [
      {
        quizid: QuizID,
        question: "Question1",
        title: title,
        keywords: questionMissingWords.sort(() => Math.random() - 0.5),
        audio: "/audio/q1.mp3",
        iconRight: true,
        inputs: 20,
        questions: transformedData.sort((a, b) => a.order - b.order),
      },
    ];
  }
};
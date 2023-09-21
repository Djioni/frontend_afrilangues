export const FormatDialogueData = (QAdata, QuizID) => {
  //

  if (QAdata && QuizID) {
    const jsonData = {
      id: "6503729c41bd45770962a19e",
      title: "Complete the dialog",
      type: "DIALOGUE",
      exerciseAndAnswers: [
        {
          order: 3,
          speaker: "Idrissa",
          sentence: "Ayiwa, ka ... hɛrɛ caya!",
          mediaQuestion: null,
          answers: [
            {
              content: "Ayiwa, ka sɔgɔma hɛrɛ caya!",
              mediaResponse: null,
              words: ["sɔgɔma"],
              correct: true,
            },
          ],
          questionWords: ["tile"],
        },
        {
          order: 2,
          speaker: "Idrissa",
          sentence: "... kɛ kɛnɛ?",
          mediaQuestion: null,
          answers: [
            {
              content: "sira kɛ kɛnɛ?",
              mediaResponse: null,
              words: ["sira"],
              correct: true,
            },
          ],
          questionWords: ["Denbaya"],
        },
        {
          order: 1,
          speaker: "Idrissa",
          sentence: "... Hɛrɛ ... wa?",
          mediaQuestion: null,
          answers: [
            {
              content: "Denbaya Hɛrɛ bɛɛ wa?",
              mediaResponse: null,
              words: ["Denbaya", "bɛɛ"],
              correct: true,
            },
          ],
          questionWords: ["sira"],
        },
        {
          order: 0,
          speaker: "Idrissa",
          sentence: "I ni ...",
          mediaQuestion: null,
          answers: [
            {
              content: "I ni minɛ",
              mediaResponse: null,
              words: ["minɛ"],
              correct: true,
            },
          ],
          questionWords: ["sɔgɔma"],
        },
      ],
      difficultyLevel: 0,
      exerciseMedia: [
        {
          media: "6503729b41bd45770962a19c",
          type: "audio/mpeg",
        },
      ],
      exerciseWords: ["minɛ", "bɛɛ", "Denbaya", "sira", "sɔgɔma"],
      lessonSection: "",
    };
    let transformedData = [];
    let totalInputNumber = 0;

    QAdata.exerciseAndAnswers.forEach((exercise, index) => {
      if (totalInputNumber >= 5) {
        return;
      }

      totalInputNumber++;
      console.log(totalInputNumber);

      const content = exercise.sentence;
      const removeSpace = content.replace(/\s+/g, " ");

      const contentArray = removeSpace.split(" ");
      const textValue = removeSpace.split("...").filter((value) => value);
      const indicesOfEllipsis = contentArray.reduce((indices, value, index) => {
        if (value === "...") {
          indices.push(index);
        }
        return indices;
      }, []);

      // 1 input
      if (indicesOfEllipsis.length <= 1) {
        if (indicesOfEllipsis[0] === 0) {
          console.log("first input");
          transformedData.push({
            id: index + 1,
            order: exercise.order,
            inputs: 1,
            inputFirst: true,
            input1Name: `blank${totalInputNumber}`,
            text1: textValue[0] ? textValue[0] : "",
          });
        } else {
          console.log("middle input");
          if (textValue.length >= 2) {
            console.log("middle input text1/2");
            transformedData.push({
              id: index + 1,
              order: exercise.order,
              inputs: 1,
              inputFirst: false,
              inputMiddle: true,
              input1Name: `blank${totalInputNumber}`,
              text1: textValue[0],
              text2: textValue[1],
            });
          } else {
            console.log("middle input text1");
            transformedData.push({
              id: index + 1,
              order: exercise.order,
              inputs: 1,
              inputFirst: false,
              inputMiddle: true,
              input1Name: `blank${totalInputNumber}`,
              text1: textValue[0],
            });
          }
        }
      }
      // 2 inputs
      if (indicesOfEllipsis.length >= 2) {
        console.log("2 input");
        if (textValue.length >= 2) {
          console.log("2 input text1/2");
          transformedData.push({
            id: index + 1,
            order: exercise.order,
            inputs: 2,
            inputFirst: true,
            input1Name: `blank${totalInputNumber}`,
            input2Name: `blank${totalInputNumber + 1}`,
            text1: textValue[0],
            text2: textValue[1],
          });
          totalInputNumber++;
        } else {
          console.log("2 input text1");
          transformedData.push({
            id: index + 1,
            order: exercise.order,
            inputs: 2,
            inputFirst: true,
            input1Name: `blank${totalInputNumber}`,
            input2Name: `blank${totalInputNumber + 1}`,
            text1: textValue[0],
          });
          totalInputNumber++;
        }
      }
    });

    return [
      {
        quizid: QuizID,
        question: "Question1",

        keywords: jsonData.exerciseWords.sort(() => Math.random() - 0.5),
        audio: "/audio/q1.mp3",
        iconRight: true,
        inputs: 5,

        questions: transformedData,
      },
    ];

    // console.log(transformedData);
    // Parse the JSON data into an object

    // Now, jsonObject contains your data without double quotes around property names
    // console.log(jsonData);
  }
};

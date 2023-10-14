import { API_URL } from "../../../../api";

export const TestFunction = (QAdata, userID, type) => {
  console.log("qadata", QAdata);
  const quizQuestion1 = [
    {
      order: 0,
      sentence: "Qui est l'actuel Président du Sénégal?",
      mediaQuestion: {
        media: "64f983cfbbc4b83d3517edf6",
        type: "audio/mpeg",
      },
      answers: [
        {
          content: "Macky Sall",
          mediaResponse: null,
          correct: true,
        },
        {
          content: "Abdoulaye Wade",
          mediaResponse: null,
          correct: false,
        },
        {
          content: " Léopold Sédar Senghor",
          mediaResponse: null,
          correct: false,
        },
        {
          content: " Abdou Diouf ",
          mediaResponse: null,
          correct: false,
        },
      ],
    },
    {
      order: 1,
      sentence: "Capitale du Mali -1",
      mediaQuestion: {
        media: "64f9841abbc4b83d3517edf8",
        type: "audio/mpeg",
      },
      answers: [
        {
          content: "Bamako",
          mediaResponse: {
            media: "64f9841abbc4b83d3517edf8",
            type: "audio/mpeg",
          },
          correct: false,
        },
        {
          content: "Paris",
          mediaResponse: {
            media: "64f9841abbc4b83d3517edf8",
            type: "audio/mpeg",
          },
          correct: true,
        },
        {
          content: "New York",
          mediaResponse: {
            media: "64f9841abbc4b83d3517edf8",
            type: "audio/mpeg",
          },
          correct: false,
        },
        {
          content: "Bruxelles",
          mediaResponse: {
            media: "64f9841abbc4b83d3517edf8",
            type: "audio/mpeg",
          },
          correct: false,
        },
      ],
    },
    {
      order: 2,
      sentence: "Capitale du Mali",
      mediaQuestion: {
        media: "64f9841abbc4b83d3517edf8",
        type: "audio/mpeg",
      },
      answers: [
        {
          content: "Bamako",
          mediaResponse: {
            media: "64f9841abbc4b83d3517edf8",
            type: "audio/mpeg",
          },
          correct: true,
        },
        {
          content: "Paris",
          mediaResponse: {
            media: "64f9841abbc4b83d3517edf8",
            type: "audio/mpeg",
          },
          correct: false,
        },
        {
          content: "New York",
          mediaResponse: {
            media: "64f9841abbc4b83d3517edf8",
            type: "audio/mpeg",
          },
          correct: false,
        },
        {
          content: "Bruxelles",
          mediaResponse: {
            media: "64f9841abbc4b83d3517edf8",
            type: "audio/mpeg",
          },
          correct: false,
        },
      ],
    },
    {
      order: 3,
      sentence: "Capitale du Mali",
      mediaQuestion: {
        media: "64faadf993364342e55b1873",
        type: "image/png",
      },
      answers: [
        {
          content: "Bamako",
          mediaResponse: {
            media: "64faadf993364342e55b1873",
            type: "image/png",
          },
          correct: false,
        },
        {
          content: "Paris",
          mediaResponse: {
            media: "64faadf993364342e55b1873",
            type: "image/png",
          },
          correct: false,
        },
        {
          content: "New York",
          mediaResponse: {
            media: "64faadf993364342e55b1873",
            type: "image/png",
          },
          correct: false,
        },
        {
          content: "Bruxelles",
          mediaResponse: {
            media: "64faadf993364342e55b1873",
            type: "image/png",
          },
          correct: true,
        },
      ],
    },
  ];

  const quizQuestion = QAdata;

  const quizData = [];
  if (quizQuestion && userID && type) {
    quizQuestion.sort((a, b) => a.order - b.order);
    // Text Options
    const textOptions = quizQuestion.map((value) => {
      if (
        !value.answers.some(
          (answer) =>
            answer.mediaResponse && answer.mediaResponse.type === "audio/mpeg"
        ) &&
        !value.answers.some(
          (answer) =>
            answer.mediaResponse && answer.mediaResponse.type === "image/png"
        )
      ) {
        return value;
      }
    });

    // audio options
    const audioOptions = quizQuestion.map((value) => {
      if (
        value.answers.some(
          (answer) =>
            answer.mediaResponse && answer.mediaResponse.type === "audio/mpeg"
        )
      ) {
        return value;
      }
    });

    // text options
    const ImageOptions = quizQuestion.map((value) => {
      if (
        value.answers.some(
          (answer) =>
            answer.mediaResponse && answer.mediaResponse.type === "image/jpeg"
        ) ||
        value.answers.some(
          (answer) =>
            answer.mediaResponse && answer.mediaResponse.type === "image/png"
        )
      ) {
        return value;
      }
    });

    // // audio option filtering start
    const audioOptionsFilter = audioOptions.map((value) => {
      if (value) {
        //
        // order text and id
        const audiodata = value.answers.map((answer) => ({
          text: answer.content,
          audioURL:
            answer.mediaResponse &&
            `${API_URL}/mediaObject/download/${answer.mediaResponse.media}`,
        }));

        //
        const option = value.answers.map((answer) => answer.content);
        const correctAnswerIndex = value.answers.findIndex(
          (answer) => answer.correct
        );

        // console.log(option);
        // console.log(correctAnswerIndex);
        return {
          order: value.order,
          questionText: value.sentence,
          audioOptions: audiodata,
          correctAnswerIndex: correctAnswerIndex,
          format: "multipleChoice",
        };
      }
    });
    // remove falsy data
    audioOptionsFilter.forEach((value) => {
      if (typeof value === "object" && value !== null) {
        quizData.push(value);
      }
    });
    // audio option filtering end

    // image option filtering start
    const imageOptionsFilter = ImageOptions.map((value) => {
      if (value) {
        // order text and id
        const audiodata = value.answers.map((answer) => ({
          text: answer.content,
          imageURL:
            answer.mediaResponse &&
            `${API_URL}/mediaObject/download/${answer.mediaResponse.media}`,
        }));

        //

        const option = value.answers.map((answer) => answer.content);
        const correctAnswerIndex = value.answers.findIndex(
          (answer) => answer.correct
        );

        // console.log(option);
        // console.log(correctAnswerIndex);
        return {
          order: value.order,
          questionText: value.sentence,
          imageOptions: audiodata,
          correctAnswerIndex: correctAnswerIndex,
          format: "multipleChoice",
        };
      }
    });
    imageOptionsFilter.forEach((value) => {
      if (typeof value === "object" && value !== null) {
        quizData.push(value);
      }
    });

    // image option filtering end

    // // audio option filtering start
    const textOptionsFilter = textOptions.map((value) => {
      if (value) {
        //
        // order text and id
        const audiodata = value.answers.map((answer) => answer.content);

        //
        const option = value.answers.map((answer) => answer.content);
        const correctAnswerIndex = value.answers.findIndex(
          (answer) => answer.correct
        );

        // console.log(option);
        // console.log(correctAnswerIndex);
        return {
          order: value.order,
          questionText: value.sentence,
          options: audiodata,
          correctAnswerIndex: correctAnswerIndex,
          format: "multipleChoice",
        };
      }
    });
    // remove falsy data
    textOptionsFilter.forEach((value) => {
      if (typeof value === "object" && value !== null) {
        quizData.push(value);
      }
    });
    // text option filtering end
    // console.log(quizData);
    let quizOrderData = [];

    for (let i = 0; i < quizData.length; i++) {
      quizData.forEach((value) => {
        if (i === value.order) {
          quizOrderData.push(value);
        }
      });
    }

    return [
      {
        id: userID,
        type: type,
        lessonTitle: "lesson",
        questions: quizOrderData,
      },
    ];
  }
};

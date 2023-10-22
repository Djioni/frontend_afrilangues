import { API_URL } from "../../../../api";

export const TestFunction = (QAdata, userID, type, title) => {
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
  if (quizQuestion && userID && type && title) {
    quizQuestion.sort((a, b) => a.order - b.order);

    console.log("-----------------", QAdata);
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

    // // text options
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

    if (type === "SINGLE_CHOICE_QUESTION_AUDIO_FORMAT") {
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
            sentence: { text: value.sentence },
            type: type,

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
    }

    // image option filtering start
    if (type === "SINGLE_CHOICE_QUESTION_IMAGE_FORMAT") {
      //
      const transformedData = quizQuestion.map((item) => {
        // Find the image media with type 'image/png' or 'image/jpeg'
        const imageMedia = item.mediaQuestion.find(
          (media) => media.type === "image/png" || media.type === "image/jpeg"
        );
        const audioMedia = item.mediaQuestion.find(
          (media) => media.type === "audio/mpeg"
        );

        // Get the content of the first answer in the answers array
        const firstAnswer = item.answers.filter(
          (value) => value.correct == true
        );

        console.log(
          "first anser----------------- ",
          item.answers.filter((value) => value.correct == true)
        );

        // Create a new object with the desired structure
        return {
          text: firstAnswer[0] ? firstAnswer[0].content : "",
          image: imageMedia
            ? { media: imageMedia.media, type: imageMedia.type }
            : null,
          audio: audioMedia
            ? { media: audioMedia.media, type: audioMedia.type }
            : null,
        };
      });

      //
      const imageOptionsFilter = quizQuestion.map((value) => {
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
            sentence: {
              text: value.sentence,
              audio: value.mediaQuestion.filter(
                (data) => data.type === "audio/mpeg"
              ),
              image: value.mediaQuestion.filter(
                (data) =>
                  data.type === "image/jpeg" || data.type === "image/png"
              ),
            },
            order: value.order,
            questionText: title,
            imageOptions: audiodata,
            correctAnswerIndex: correctAnswerIndex,
            format: "multipleChoice",
            option: transformedData,
          };
        }
      });
      imageOptionsFilter.forEach((value) => {
        if (typeof value === "object" && value !== null) {
          quizData.push(value);
        }
      });
    }

    // image option filtering end

    // // text option filtering start

    if (type === "SINGLE_CHOICE_QUESTION_TEXT_FORMAT") {
      const textOptionsFilter = quizQuestion.map((value) => {
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
            sentence: { text: value.sentence, audio: value.mediaQuestion },
            order: value.order,
            questionText: title,
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
    }

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

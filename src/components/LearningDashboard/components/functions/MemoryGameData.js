import { API_URL } from "../../../../api";

export const MemoryGameData = (QAdata, QuizID) => {
  if (QAdata && QuizID) {
    // game

    const gameData = [
      {
        order: 0,
        speaker: null,
        sentence: "Jabibi",
        mediaQuestion: [
          {
            media: "64fe40b235e38c74070213d5",
            type: "image/png",
          },
          {
            media: "64fe40b235e38c74070213d5",
            type: "image/png",
          },

          {
            media: "64fe40b335e38c74070213da",
            type: "audio/mpeg",
          },
        ],
        answers: null,
        questionWords: null,
      },
      {
        order: 2,
        speaker: null,
        sentence: "Sogo",
        mediaQuestion: [
          {
            media: "64fe410935e38c74070213e6",
            type: "image/png",
          },
          {
            media: "64fe410935e38c74070213e6",
            type: "image/png",
          },

          {
            media: "64fe410a35e38c74070213ec",
            type: "audio/mpeg",
          },
        ],
        answers: null,
        questionWords: null,
      },
      {
        order: 4,
        speaker: null,
        sentence: "Denmuso",
        mediaQuestion: [
          {
            media: "64fe415d35e38c74070213f6",
            type: "image/png",
          },
          {
            media: "64fe415d35e38c74070213f6",
            type: "image/png",
          },

          {
            media: "64fe415e35e38c74070213ff",
            type: "audio/mpeg",
          },
        ],
        answers: null,
        questionWords: null,
      },
      {
        order: 3,
        speaker: null,
        sentence: "Keninge",
        mediaQuestion: [
          {
            media: "64fe412f35e38c74070213ee",
            type: "image/png",
          },
          {
            media: "64fe412f35e38c74070213ee",
            type: "image/png",
          },

          {
            media: "64fe413035e38c74070213f4",
            type: "audio/mpeg",
          },
        ],
        answers: null,
        questionWords: null,
      },
      {
        order: 1,
        speaker: null,
        sentence: "Gan",
        mediaQuestion: [
          {
            media: "64fe40e635e38c74070213dc",
            type: "image/png",
          },
          {
            media: "64fe40e635e38c74070213dc",
            type: "image/png",
          },

          {
            media: "64fe40e735e38c74070213e4",
            type: "audio/mpeg",
          },
        ],
        answers: null,
        questionWords: null,
      },
    ];

    const convertedGameData = QAdata.map((item) => {
      const mediaImages = item.mediaQuestion.filter(
        (mediaItem) =>
          mediaItem.type === "image/png" || mediaItem.type === "image/jpeg"
      );
      const mediaAudio = item.mediaQuestion.filter(
        (mediaItem) => mediaItem.type === "audio/mpeg"
      );

      return {
        id: QuizID,
        image: `${API_URL}/mediaObject/download/${mediaImages[0].media}`,
        isFlipped: false,
        isMatched: false,
        name: item.sentence,
        sound: `${API_URL}/mediaObject/download/${mediaAudio[0].media}`,
      };
    });

    return convertedGameData;
  }
};

/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { CardArray } from "../constants/Data/DummyData";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { API_URL, AUTH_NAME } from "../../../../../api";
import axios from "axios";

const initialState = {
  cards: [],
  setCards: () => {},
  startGame: () => {},
  colseMatchedImage: () => {},
  turn: 0,
  round: 1,
  score: 0,
  matchedImage: "",
  matchedImageModal: false,
  gameOver: false,
  handleGameOver: () => {},
  timeLeft: 45,
  matchedName: "",
  handleCardItemClick: () => {},
  disabledCards: false,
  checkWin: () => false,
};

const MemoryContext = createContext(initialState);

const MemoryProvider = ({ children }) => {
  const CardArray = useSelector((state) => state.cardArray);
  const [cards, setCards] = useState(initialState.cards);
  const [timeLeft, setTimeLeft] = useState(initialState.timeLeft);
  const [turn, setTurn] = useState(initialState.turn);
  const [score, setScore] = useState(initialState.score);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabledCards, setDisabledCards] = useState(false);
  const [round, setRound] = useState(initialState.round);
  const [gameOver, setGameOver] = useState(initialState.gameOver);
  const [matchedName, setMatchedName] = useState(initialState.matchedName);
  const [matchedImage, setMatchedImage] = useState(initialState.matchedImage);
  const [matchedImageModal, setMatchedImageModal] = useState(
    initialState.matchedImageModal
  );
  const checkWin = () => {
    const isWin = cards.every((card) => card.isMatched);
    return isWin;
  };

  /**
   * @description
   * This function is used to start the game
   * It shuffles the cards and sets the turn to 0
   * @returns void
   */
  const shuffleCards = () => {
    const shuffledCards = [...CardArray, ...CardArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, id: Math.random() };
      });
    console.log("shuffle cards called");
    setCards(shuffledCards);
  };

  /**
   * @description
   * This function is used to handle the click event on the card
   * It flips the card and checks if the card is a match
   * @param card
   */
  const handleCardItemClick = (card) => {
    if (!disabledCards) {
      setCards((prevCard) =>
        prevCard.map((c) => {
          if (c.id === card.id) {
            card.isFlipped = true;
            return card;
          }
          return c;
        })
      );
    }

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  /**
   * @description
   * This function is used to reset the cards
   * @returns void
   */
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((prevTurn) => prevTurn + 1);
    setDisabledCards(false);
  };

  /**
   * @description
   * This function is used to start the game
   * It shuffles the cards and sets the turn to 0
   * @returns void
   */
  const startGame = () => {
    setGameOver(false);
    setTimeLeft(45);
    shuffleCards();
    setScore(0);
    setRound(1);
    setTurn(0);
    console.log("game started");
  };

  /**
   * @description
   * This function is used to check if the cards are a match
   * @returns void
   */
  const colseMatchedImage = () => {
    setMatchedImageModal(false);
  };
  const showMatchedImage = (image, name) => {
    setMatchedImage(image);
    setMatchedName(name);
    setMatchedImageModal(true);
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabledCards(true);
      if (choiceOne.image === choiceTwo.image) {
        //
        const extractImageURL = choiceOne.image.split("/");
        const choiceImageID = extractImageURL[extractImageURL.length - 1];
        const quizID = CardArray[0].id;
        const currentMatchName = CardArray.filter((value) =>
          value.image.includes(choiceImageID)
        )[0]?.name;
        console.log(currentMatchName);
        console.log(choiceImageID);
        //
        console.log("array", quizID);
        // assessment start
        // Hide and show the verify button
        const userID = Cookies.get("id") ? JSON.parse(Cookies.get("id")) : "";
        const userToken = Cookies.get("id")
          ? JSON.parse(Cookies.get("token"))
          : "";

        const sentence = "";
        const content = choiceImageID;
        console.log(content);
        if (true) {
          // assessment schma
          const AssessmentSchma = {
            userId: userID,
            exerciseId: quizID,
            type: "MEMORY",
            sentence: currentMatchName,
            order: 0,
            answerLetter: [
              {
                content: content,
              },
            ],
          };

          console.log(userID, userToken);
          const config = {
            headers: {
              Authorization: `${AUTH_NAME} ${userToken}`,
            },
          };

          // axios request

          axios
            .post(`${API_URL}/assessment/`, AssessmentSchma, config)
            .then((assessment) => {
              if (assessment.data.status === "RIGHT") {
                // point store
                const points = assessment.data.isNumberPoint;
                console.log("userpoints", points);
                localStorage.setItem("exercisePoints", JSON.stringify(points));
                console.log(assessment);
              } else {
                // point store
                const points = assessment.data.isNumberPoint;
                console.log("userpoints", points);
                localStorage.setItem("exercisePoints", JSON.stringify(points));
                console.log(
                  "right answer:",
                  assessment.data.answerValidation[0].content
                );
              }
            })
            .catch((error) => {
              console.log(error.message);
              if (error.message === "Request failed with status code 401") {
                navigate("/auth/login");
              }
            });
        }
        // assessment end
        //
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.id === choiceOne?.id || card.id === choiceTwo?.id) {
              card.isMatched = true;
              card.isFlipped = true;
            }
            return card;
          })
        );
        if (score < 5) {
          setScore((prevvalue) => prevvalue + 1);
        }
        const audio = new Audio(choiceOne.sound);
        audio.play();
        // to cut the audio to 2 secconds
        setTimeout(() => {
          audio.pause();
        }, 2000);
        showMatchedImage(choiceOne.image, choiceOne.name);
        resetTurn();
      } else {
        setTimeout(() => {
          setCards((prevCard) => {
            return prevCard.map((card) => {
              if (!card.isMatched) {
                return { ...card, isFlipped: false };
              }
              return card;
            });
          });
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  const onTimerEnd = () => {
    if (round < 3) {
      setGameOver(false);
      setTimeLeft(45);
      shuffleCards();
      setScore(0);
      setTurn(0);
      setRound((prevvalue) => prevvalue + 1);
      setTimeLeft(45);
    } else {
      setGameOver(true);
      setTimeLeft(0);
    }
  };
  const handleGameOver = () => {
    setGameOver(false);
  };
  useEffect(() => {
    if (timeLeft > 0 && !checkWin()) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      onTimerEnd();
    }
  }, [timeLeft, onTimerEnd]);
  /**
   * @description
   * This function is used to check if the cards are a match
   * @returns void
   */
  useEffect(() => {
    shuffleCards();
    console.log("page loaded");
  }, []);

  const value = {
    cards,
    setCards,
    startGame,
    round,
    gameOver,
    turn,
    score,
    colseMatchedImage,
    matchedImageModal,
    matchedImage,
    timeLeft,
    handleCardItemClick,
    handleGameOver,
    matchedName,
    disabledCards,
    checkWin,
  };

  return (
    <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>
  );
};

const useMemoryCards = () => {
  const context = useContext(MemoryContext);
  if (context === undefined) {
    throw new Error("useMemoryCards must be used within a MemoryProvider");
  }
  return context;
};

export { MemoryContext, MemoryProvider, useMemoryCards };

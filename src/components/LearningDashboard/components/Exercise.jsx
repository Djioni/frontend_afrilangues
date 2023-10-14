import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import Cookies from "js-cookie";

import { API_URL, AUTH_NAME } from "../../../api";

import Loading from "../../Loading";
import { QuizValidationAction } from "../services/actions/QuizValidationAction";
import { FormatDialogueData } from "./functions/FormatDialogueData";
import { Translate } from "./functions/Translate";
import { MemoryGameData } from "./functions/MemoryGameData";
import { ListenRepeat } from "./functions/ListenRepeat";
import { MatchWord } from "./functions/WordMatch";
import { FormatMatchTheWordsData } from "./functions/FormatMatchTheWordsData";
import { FormatPutInOrder } from "./functions/FormatPutInOrder";
import { TestFunction } from "./functions/TestFunction";
import Quizzes from "../../Quizzes/Quizzes";
import Game from "../../Quizzes/components/MemoryGame/Game";
import Dialogue from "../../Quizzes/components/Dialogue/Dialogue";
import ErrorModal from "../../ErrorModal";

export default function Exercise() {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const dispatch = useDispatch();
  const userToken = Cookies.get("token");
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);
  const [exercuseNotFound, setExerciseNotFound] = useState(false);
  const [currentExercise, setCurrentExercise] = useState([]);
  console.log("hello word");

  // get params
  const urlSearchParams = new URLSearchParams(window.location.search);

  // Access the 'id' parameter
  const id = urlSearchParams.get("id");

  // get params
  useEffect(() => {
    if (!userToken) {
      navigate("/auth/login");
    }
    //
    if (!id && userToken) {
      navigate("/dashboard");
    }

    if (userToken && id) {
      const config = {
        headers: {
          Authorization: `${AUTH_NAME} ${JSON.parse(userToken)}`,
        },
      };
      //

      axios
        .get(`${API_URL}/exercise/lessonsection/${id}`, config)
        .then((result) => {
          console.log("dataf", result.data);

          if (result.data[0]) {
            console.log(result.data[0]);
            setIsPageLoading(false);
            setCurrentExercise(result.data[0]);

            /// handle exercise

            // console section data

            const filteredObjects = result.data;

            if (filteredObjects[0]) {
              const currentQuiz = filteredObjects[filteredObjects.length - 1];

              // MULTIPLE_CHOICE
              if (
                currentQuiz.type === "SINGLE_CHOICE_QUESTION_TEXT_FORMAT" ||
                currentQuiz.type === "SINGLE_CHOICE_QUESTION_IMAGE_FORMAT" ||
                currentQuiz.type === "SINGLE_CHOICE_QUESTION_AUDIO_FORMAT" ||
                currentQuiz.type === "BASIC_QCM" ||
                currentQuiz.type === "IMAGE_QCM" ||
                currentQuiz.type === "AUDIO_QCM"
              ) {
                console.log("this is quiz");
                /// remove content
                localStorage.removeItem("content");
                const quizQuestionsUpdated = JSON.parse(
                  JSON.stringify(
                    filteredObjects[filteredObjects.length - 1]
                      .exerciseAndAnswers
                  )
                );

                try {
                  localStorage.setItem(
                    "currentQuiz",
                    JSON.stringify(
                      TestFunction(
                        quizQuestionsUpdated,
                        currentQuiz.id,
                        currentQuiz.type,
                        currentQuiz.title
                      )
                    )
                  );
                  console.log("quiz types", currentQuiz.type);
                  dispatch(QuizValidationAction(true));

                  //   navigate("/lessons/section/quiz");
                } catch (error) {
                  console.log("data not valid");
                }
              }

              // listen and repeat
              if (currentQuiz.type === "LISTEN") {
                /// remove content
                localStorage.removeItem("content");

                try {
                  // store data
                  const listenData = ListenRepeat(
                    filteredObjects[filteredObjects.length - 1]
                      .exerciseAndAnswers,
                    currentQuiz.id,
                    currentQuiz.type,
                    currentQuiz.title
                  );
                  localStorage.setItem(
                    "currentQuiz",
                    JSON.stringify(listenData)
                  );

                  // hide navber and navigate
                  dispatch(QuizValidationAction(true));
                  //   navigate("/lessons/section/quiz");
                } catch (error) {
                  console.log("data not valid");
                }
              }

              // listen and repeat
              if (currentQuiz.type === "MATCH") {
                const wordMatchData1 =
                  filteredObjects[filteredObjects.length - 1]
                    .exerciseAndAnswers;

                const wordMatchData =
                  filteredObjects[filteredObjects.length - 1]
                    .exerciseAndAnswers;

                console.log("wrod", wordMatchData);
                localStorage.setItem(
                  "currentQuiz",
                  JSON.stringify(
                    FormatMatchTheWordsData(
                      wordMatchData,
                      currentQuiz.id,
                      currentQuiz.type,
                      currentQuiz.title
                    )
                  )
                );

                // hide navber and navigate
                dispatch(QuizValidationAction(true));
                // navigate("/lessons/section/quiz");
              }

              // translate
              if (currentQuiz.type === "TRANSLATE") {
                localStorage.removeItem("content");

                const translateData =
                  filteredObjects[filteredObjects.length - 1]
                    .exerciseAndAnswers;

                console.log("data:", translateData);

                localStorage.setItem(
                  "currentQuiz",
                  JSON.stringify(
                    Translate(
                      translateData,
                      currentQuiz.id,
                      currentQuiz.type,
                      currentQuiz.title
                    )
                  )
                );
                console.log("title", currentQuiz.title);

                // hide navber and navigate
                dispatch(QuizValidationAction(true));
                // navigate("/lessons/section/quiz");
              }
              if (currentQuiz.type === "MEMORY") {
                const memoryGameData =
                  filteredObjects[filteredObjects.length - 1]
                    .exerciseAndAnswers;
                console.log(
                  "memory game found!",
                  MemoryGameData(memoryGameData)
                );
                localStorage.setItem(
                  "memoryGame",
                  JSON.stringify(MemoryGameData(memoryGameData, currentQuiz.id))
                );

                // navigate("/lessons/section/quiz/game");
                dispatch(QuizValidationAction(true));
              }
              if (currentQuiz.type === "PUT_IN_ORDER") {
                localStorage.removeItem("content");

                const putInOrderData =
                  filteredObjects[filteredObjects.length - 1]
                    .exerciseAndAnswers;

                console.log(
                  FormatPutInOrder(
                    putInOrderData,
                    currentQuiz.id,
                    currentQuiz.title
                  )
                );
                localStorage.setItem(
                  "currentQuiz",
                  JSON.stringify(
                    FormatPutInOrder(
                      putInOrderData,
                      currentQuiz.id,
                      currentQuiz.type,
                      currentQuiz.title
                    )
                  )
                );

                // hide navber and navigate
                dispatch(QuizValidationAction(true));
                // navigate("/lessons/section/quiz");
              }
              if (currentQuiz.type === "DIALOGUE") {
                localStorage.removeItem("content");

                const dialoguedata =
                  filteredObjects[filteredObjects.length - 1];

                console.log(
                  FormatDialogueData(
                    dialoguedata,
                    currentQuiz.id,
                    currentQuiz.type
                  )
                );
                localStorage.setItem(
                  "currentQuiz",
                  JSON.stringify(
                    FormatDialogueData(
                      dialoguedata,
                      currentQuiz.id,
                      currentQuiz.title
                    )
                  )
                );
                // hide navber and navigate
                dispatch(QuizValidationAction(true));
                // navigate("/lessons/section/quiz/dialogue");
              }

              // quiz condition end
            }

            // if (result.content.length > 10) {
            //   console.log("data found");
            //   localStorage.setItem("content", JSON.stringify(result.content));
            //   localStorage.setItem("currentQuiz", JSON.stringify(demoQuiz));
            //   /// hide navber
            //   dispatch(QuizValidationAction(true));
            //   navigate("/lessons/section/quiz");
            // }

            if (!filteredObjects[0]) {
              setErrorMessage("Cette section est vide pour l'instant");
              setShowModal(true);
            }

            /// handle exercise
          } else {
            console.log("okay");
            setExerciseNotFound(true);
            setIsPageLoading(false);
          }
          //
        })
        .catch((error) => {
          console.log(error);
          //   if (error.response.status === 401) {
          //     Cookies.set("token", "");
          //     Cookies.set("id", "");
          //     localStorage.clear();
          //     navigate("/auth/login");
          //   }
        });
    }
    dispatch(QuizValidationAction(true));

    return () => {
      dispatch(QuizValidationAction(false));
    };

    //
  }, []);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
    navigate(-1);
  };
  if (
    currentExercise.type === "SINGLE_CHOICE_QUESTION_TEXT_FORMAT" ||
    currentExercise.type === "SINGLE_CHOICE_QUESTION_IMAGE_FORMAT" ||
    currentExercise.type === "SINGLE_CHOICE_QUESTION_AUDIO_FORMAT" ||
    currentExercise.type === "MULTIPLE_CHOICE" ||
    currentExercise.type === "BASIC_QCM" ||
    currentExercise.type === "IMAGE_QCM" ||
    currentExercise.type === "AUDIO_QCM" ||
    currentExercise.type === "PUT_IN_ORDER" ||
    currentExercise.type === "TRANSLATE" ||
    currentExercise.type === "MATCH" ||
    currentExercise.type === "LISTEN"
  ) {
    return (
      <div>
        {isPageLoading ? (
          <Loading
            full={true}
            page={true}
            message={"S'il vous plaît, attendez!"}
          />
        ) : (
          <Quizzes />
        )}
      </div>
    );
  }
  if (isPageLoading) {
    return (
      <Loading full={true} page={true} message={"S'il vous plaît, attendez!"} />
    );
  }
  if (currentExercise.type === "MEMORY") {
    return (
      <div>
        {isPageLoading ? (
          <Loading
            full={true}
            page={true}
            message={"S'il vous plaît, attendez!"}
          />
        ) : (
          <Game />
        )}
      </div>
    );
  }
  if (currentExercise.type === "DIALOGUE") {
    return (
      <div>
        {isPageLoading ? (
          <Loading
            full={true}
            page={true}
            message={"S'il vous plaît, attendez!"}
          />
        ) : (
          <Dialogue />
        )}
      </div>
    );
  }
  if (exercuseNotFound) {
    return (
      <ErrorModal
        open={true}
        error="Exercice introuvable!"
        actionText={"Continuer"}
        setOpen={toggleModal}
      />
    );
  }
}

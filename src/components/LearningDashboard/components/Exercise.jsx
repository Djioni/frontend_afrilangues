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
import TextZone from "../../Quizzes/components/TextZone/TextZone";
import ExerciseDataNotValid from "./ExerciseDataNotValid/ExerciseDataNotValid";
import { ExerciseDataNotValidAction } from "../services/actions/ExerciseDataNotValidAction";
import AdsPage from "../../ads/AdsPage";

export default function Exercise({ handlePrevQuestion }) {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const dispatch = useDispatch();
  const userToken = Cookies.get("token");
  const userId = Cookies.get("id");
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);
  const [exercuseNotFound, setExerciseNotFound] = useState(false);
  const [currentExercise, setCurrentExercise] = useState([]);
  const [exerciseDataNotValid, setExerciseDataNotValid] = useState(null);
  console.log("hello word");
  const [adsInfo, setAdsInfo] = useState(null);
  const [subscriptionData, setSubscriptionData] = useState(null);

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
      // define request
      const result = axios.get(
        `${API_URL}/exercise/lessonsection/${id}`,
        config
      );
      const adsInfo = axios.get(`${API_URL}/advertisement/`, config);
      const subscriptionData = axios.get(
        `${API_URL}/subscription/user/${userId && JSON.parse(userId)}/`,
        config
      );
      axios
        .all([result, adsInfo, subscriptionData])
        .then(
          axios.spread((result, adsInfo, subscriptionData) => {
            console.log("dataf", result.data);
            if (subscriptionData?.data[0]) {
              ("");
            } else {
              console.log("data______", adsInfo.data);
              setAdsInfo(adsInfo.data);
            }
            if (result.data[0]) {
              console.log(result.data[0]);
              setIsPageLoading(false);
              setCurrentExercise(result.data[0]);

              /// handle exercise

              // console section data

              const filteredObjects = result.data;

              if (filteredObjects[0]) {
                const currentQuiz = filteredObjects[0];
                // current main exercise
                localStorage.setItem(
                  "currentMainExercise",
                  JSON.stringify(currentQuiz)
                );

                const allexercisedata = filteredObjects;
                // allexercisedata.sort((a, b) => {
                //   const dateA = new Date(...a.createdAt);
                //   const dateB = new Date(...b.createdAt);
                //   return dateA - dateB;
                // });
                // set all current exercise
                localStorage.setItem(
                  "currentAllExercises",
                  JSON.stringify(allexercisedata)
                );
                // set current exercise question length
                localStorage.setItem(
                  "currentExerciseQuestionLength",
                  JSON.stringify(1)
                );

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
                    JSON.stringify(filteredObjects[0].exerciseAndAnswers)
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
                    console.log("all data....", filteredObjects);

                    /// test

                    console.log("quiz types", currentQuiz.type);
                    dispatch(QuizValidationAction(true));

                    //   navigate("/lessons/section/quiz");
                  } catch (error) {
                    console.log("data not valid", error);
                    setExerciseDataNotValid(true);
                    dispatch(
                      ExerciseDataNotValidAction({
                        id: currentQuiz.id,
                        title: currentQuiz.title,
                        type: currentQuiz.type,
                        error: JSON.stringify(error.message),
                        data: JSON.stringify(currentQuiz.exerciseAndAnswers),
                      })
                    );
                  }
                }

                // listen and repeat
                if (currentQuiz.type === "LISTEN") {
                  /// remove content
                  localStorage.removeItem("content");

                  try {
                    // store data
                    const listenData = ListenRepeat(
                      filteredObjects[0].exerciseAndAnswers,
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
                    console.log("data notf valid", error);

                    setExerciseDataNotValid(true);
                    dispatch(
                      ExerciseDataNotValidAction({
                        id: currentQuiz.id,
                        title: currentQuiz.title,
                        type: currentQuiz.type,
                        error: JSON.stringify(error.message),
                        data: JSON.stringify(currentQuiz.exerciseAndAnswers),
                      })
                    );
                  }
                }

                // listen and repeat
                if (currentQuiz.type === "MATCH") {
                  try {
                    const wordMatchData1 =
                      filteredObjects[0].exerciseAndAnswers;

                    const wordMatchData = filteredObjects[0].exerciseAndAnswers;

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
                  } catch (error) {
                    setExerciseDataNotValid(true);
                    dispatch(
                      ExerciseDataNotValidAction({
                        id: currentQuiz.id,
                        title: currentQuiz.title,
                        type: currentQuiz.type,
                        error: JSON.stringify(error.message),
                        data: JSON.stringify(currentQuiz.exerciseAndAnswers),
                      })
                    );
                  }
                }

                // translate
                if (currentQuiz.type === "TRANSLATE") {
                  try {
                    localStorage.removeItem("content");

                    const translateData = filteredObjects[0].exerciseAndAnswers;

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
                  } catch (error) {
                    setExerciseDataNotValid(true);
                    dispatch(
                      ExerciseDataNotValidAction({
                        id: currentQuiz.id,
                        title: currentQuiz.title,
                        type: currentQuiz.type,
                        error: JSON.stringify(error.message),
                        data: JSON.stringify(currentQuiz.exerciseAndAnswers),
                      })
                    );
                  }
                }
                if (currentQuiz.type === "MEMORY") {
                  try {
                    const memoryGameData =
                      filteredObjects[0].exerciseAndAnswers;
                    console.log(
                      "memory game found!",
                      MemoryGameData(memoryGameData)
                    );
                    localStorage.setItem(
                      "memoryGame",
                      JSON.stringify(
                        MemoryGameData(memoryGameData, currentQuiz.id)
                      )
                    );

                    // navigate("/lessons/section/quiz/game");
                    dispatch(QuizValidationAction(true));
                  } catch (error) {
                    setExerciseDataNotValid(true);
                    dispatch(
                      ExerciseDataNotValidAction({
                        id: currentQuiz.id,
                        title: currentQuiz.title,
                        type: currentQuiz.type,
                        error: JSON.stringify(error.message),
                        data: JSON.stringify(currentQuiz.exerciseAndAnswers),
                      })
                    );
                  }
                }
                if (currentQuiz.type === "PUT_IN_ORDER") {
                  try {
                    localStorage.removeItem("content");

                    const putInOrderData =
                      filteredObjects[0].exerciseAndAnswers;

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
                  } catch (error) {
                    setExerciseDataNotValid(true);
                    dispatch(
                      ExerciseDataNotValidAction({
                        id: currentQuiz.id,
                        title: currentQuiz.title,
                        type: currentQuiz.type,
                        error: JSON.stringify(error.message),
                        data: JSON.stringify(currentQuiz.exerciseAndAnswers),
                      })
                    );
                  }
                }
                if (currentQuiz.type === "DIALOGUE") {
                  try {
                    localStorage.removeItem("content");

                    const dialoguedata = filteredObjects[0];

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
                  } catch (error) {
                    setExerciseDataNotValid(true);
                    dispatch(
                      ExerciseDataNotValidAction({
                        id: currentQuiz.id,
                        title: currentQuiz.title,
                        type: currentQuiz.type,
                        error: JSON.stringify(error.message),
                        data: JSON.stringify(currentQuiz.exerciseAndAnswers),
                      })
                    );
                  }
                }
                if (currentQuiz.type === "DIALOGUE") {
                  try {
                    localStorage.removeItem("content");

                    const dialoguedata = filteredObjects[0];

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
                  } catch (error) {
                    setExerciseDataNotValid(true);
                    dispatch(
                      ExerciseDataNotValidAction({
                        id: currentQuiz.id,
                        title: currentQuiz.title,
                        type: currentQuiz.type,
                        error: JSON.stringify(error.message),
                        data: JSON.stringify(currentQuiz.exerciseAndAnswers),
                      })
                    );
                  }
                }
                if (currentQuiz.type === "TEXT_ZONE") {
                  try {
                    localStorage.removeItem("content");

                    const textZone = filteredObjects[0].exerciseAndAnswers;
                    const textZoneQuizData = [
                      {
                        questions: [
                          {
                            format: "textZone",
                            questionText: filteredObjects[0].title,
                            sentence: textZone,
                            textZone: "textZone",
                          },
                        ],
                      },
                    ];
                    localStorage.setItem("textZone", JSON.stringify(textZone));
                    localStorage.setItem(
                      "currentQuiz",
                      JSON.stringify(textZoneQuizData)
                    );

                    // hide navber and navigate
                    dispatch(QuizValidationAction(true));
                    // navigate("/lessons/section/quiz/dialogue");
                  } catch (error) {
                    setExerciseDataNotValid(true);
                    dispatch(
                      ExerciseDataNotValidAction({
                        id: currentQuiz.id,
                        title: currentQuiz.title,
                        type: currentQuiz.type,
                        error: JSON.stringify(error.message),
                        data: JSON.stringify(currentQuiz.exerciseAndAnswers),
                      })
                    );
                  }
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
        )
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



// add timer//

const [isAdsPage,setIsAdsPage] = useState(false)

useEffect(() => {
  const AdsTimer = async () => {


    const saveDate = localStorage.getItem("adsDate");
    if (saveDate) {
      console.log("saveDate___________", saveDate);
    }
    // Create a new date object with the current date and time
    let date = new Date();

    // Define the number of minutes you want to add
    let minutesToAdd = 7; // Example: adding 30 minutes

    // Calculate total minutes from the Unix epoch to the current date
    let initialTotalMinutes = Math.floor(date.getTime() / (1000 * 60));

    // Add the minutes
    date.setMinutes(date.getMinutes() + minutesToAdd);

    // Calculate total minutes from the Unix epoch to the updated date
    let updatedTotalMinutes = Math.floor(date.getTime() / (1000 * 60));

    // Calculate the added minutes for verification
    let addedMinutes = updatedTotalMinutes - initialTotalMinutes;

    // Log the updated total minutes
    console.log(
      `Total minutes since Unix epoch after adding ${minutesToAdd} minutes: ${updatedTotalMinutes}`
    );

    // Log the added minutes for verification
    // console.log(`Added minutes: ${addedMinutes}`);

    const storeUsersMe = async () => {
      try {
      localStorage.setItem(
          "adsDate",
          JSON.stringify({
            date: updatedTotalMinutes,
          })
        );

        console.log(":::ads minutes updated_____", updatedTotalMinutes);
      } catch (error) {
       console.log(error)
      }
    };
    if (adsInfo) {
      if (saveDate) {
        console.log("time found")
    let  prevDate = JSON.parse(saveDate);

        if (prevDate?.date <= initialTotalMinutes) {
          setIsAdsPage(true);
          storeUsersMe();
        }
      } else {
        console.log("time over")
        setIsAdsPage(true);
        storeUsersMe();
      }
    }
  };
  setInterval(() => {
    AdsTimer();
  }, 5000);
}, [ adsInfo,isAdsPage]);



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
    currentExercise.type === "TEXT_ZONE" ||
    (currentExercise.type === "LISTEN" && !exerciseDataNotValid)
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
          <div>
            {adsInfo && isAdsPage &&  (currentExercise.type === "TEXT_ZONE") === false && (
              <AdsPage setIsAdsPage={setIsAdsPage}  adsInfo={adsInfo} />
            )}
            <Quizzes />
          </div>
        )}
      </div>
    );
  }
  if (isPageLoading) {
    return (
      <Loading full={true} page={true} message={"S'il vous plaît, attendez!"} />
    );
  }
  if (currentExercise.type === "MEMORY" && !exerciseDataNotValid) {
    return (
      <div>
        {isPageLoading ? (
          <Loading
            full={true}
            page={true}
            message={"S'il vous plaît, attendez!"}
          />
        ) : (
          <div>
            {adsInfo && isAdsPage && <AdsPage setIsAdsPage={setIsAdsPage} adsInfo={adsInfo} />}
            <Game />
          </div>
        )}
      </div>
    );
  }
  if (currentExercise.type === "DIALOGUE" && !exerciseDataNotValid) {
    return (
      <div>
        {isPageLoading ? (
          <Loading
            full={true}
            page={true}
            message={"S'il vous plaît, attendez!"}
          />
        ) : (
          <div>
            <Dialogue
            isAdsPage={isAdsPage}
              adsInfo={adsInfo}
              handlePrevQuestion={handlePrevQuestion}
            />
          </div>
        )}
      </div>
    );
  }

  if (exerciseDataNotValid) {
    return <ExerciseDataNotValid />;
  }
  if (exercuseNotFound) {
    return (
      <ErrorModal
        open={true}
        error="Cette section est vide pour l'instant. Continuez et revenez plus tard.        "
        title={"SECTION VIDE"}
        actionText={"Continuer"}
        setOpen={toggleModal}
      />
    );
  }
}

import React, { useEffect, useState } from "react";
import "../styles/GrettingLesson.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { API_URL } from "../../../api";
import Loading from "../../Loading";
import { useDispatch } from "react-redux";
import { QuizValidationAction } from "../services/actions/QuizValidationAction";
import ErrorModal from "../../ErrorModal";
import { TestFunction } from "./functions/TestFunction";
import { ListenRepeat } from "./functions/ListenRepeat";
import { MatchWord } from "./functions/WordMatch";
import { Translate } from "./functions/Translate";
import { MemoryGameData } from "./functions/MemoryGameData";
import { FormatPutInOrder } from "./functions/FormatPutInOrder";
import { FormatMatchTheWordsData } from "./functions/FormatMatchTheWordsData";
import { FormatDialogueData } from "./functions/FormatDialogueData";

export default function LearnGrettingLession() {
  // get current section date from session storage

  //
  const demoQuiz = [
    {
      lessonTitle: "Lesson 4: Fill in the Blank",
      questions: [
        {
          questionText: "The capital of France is ________.",
          format: "fillInBlank",
          options: ["Paris", "Berlin", "London", "Madrid"],
          correctAnswer: "Paris",
        },
        {
          questionText: "Who is the world's richest man ________.",
          format: "fillInBlank",
          options: ["Elon Mush", "Jeff Bezos", "Bill Gates"],
          correctAnswer: "Elon Mush",
        },
        {
          questionText:
            "Complete the sentence: Water is composed of ________ and hydrogen.",
          format: "fillInBlank",
          options: ["oxygen", "carbon", "nitrogen"],
          correctAnswer: "oxygen",
        },
      ],
    },
  ];
  //
  const [sectionExercise, setSectinExercise] = useState([]);
  const userToken = Cookies.get("token");
  const navigate = useNavigate();
  const getAllSectionExerciseData = localStorage.getItem("allSectionExercise");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [currentLessonSection, setCurrentLessonSection] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(true); // Start with loading state
  // get lesson and section
  const getCurrentLesson = localStorage.getItem("currentLesson");
  const getLesson = localStorage.getItem("lesson");
  const getLessonSection = localStorage.getItem("lessonsection");

  const exercise = localStorage.getItem("exercise");
  const [allExercise, setAllExercise] = useState([]);
  const [errorMessage, setErrorMessage] = useState(
    "Veuillez d'abord terminer la leçon précédente!"
  );

  useEffect(() => {
    const GetSectionData = async () => {
      //
      if (userToken) {
        if (exercise) {
          // store exercise data in state
          setAllExercise(JSON.parse(exercise));

          if (getCurrentLesson && getLessonSection) {
            try {
              console.log("hello i am okay");
              const currentLesson = JSON.parse(getCurrentLesson);
              const lessonsection = JSON.parse(getLessonSection);
              console.log("currentlesson", currentLesson);
              const sectionData = lessonsection.filter(
                (item) => item.lesson.id === currentLesson.id
              );
              if (sectionData[0]) {
                setCurrentLessonSection(sectionData);
                //
                setIsPageLoading(false);
              } else {
                console.log("lessonsnto found!");
                setIsPageLoading(false);
              }
              // // store section data in state
              // setCurrentLessonSection(sectionData);
              // setIsPageLoading(false);
            } catch (error) {
              console.log(error);
            }
          } else {
            console.log("hello not working");
            navigate("/dashboard");
          }
        }

        if (!getLessonSection) {
          navigate("/dashboard");
        } else {
          // store section

          const currentLesson = JSON.parse(getCurrentLesson);
          const lessonsection = JSON.parse(getLessonSection);
          console.log("currentlesson", currentLesson);
          const sectionData = lessonsection.filter(
            (item) => item.lesson.id === currentLesson.id
          );
          if (sectionData[0]) {
            setCurrentLessonSection(sectionData);
            //
          } else {
            console.log("lessonsnto found!");
          }
          console.log("exercise data");
          // set exercise data
          const config = {
            headers: {
              Authorization: `Bearer ${JSON.parse(userToken)}`,
            },
          };
          // get exercise
          const getExercise = await axios.get(`${API_URL}/exercise/`, config);

          console.log("exercisedata:", getExercise.data);
          // store exercise data in state
          setAllExercise(getExercise.data);
          //store exercise data in session storage

          localStorage.setItem("exercise", JSON.stringify(getExercise.data));
          setIsPageLoading(false);
        }
      } else {
        navigate("/auth/login");
      }
    };
    GetSectionData();
    console.log("data", TestFunction());
  }, []);
  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  // handle section with onclick

  const handleSection = (result) => {
    // console section data
    console.log(result.id);
    console.log("match", FormatMatchTheWordsData());

    const filteredObjects = allExercise.filter(
      (item) => item.lessonSection.id === result.id
    );
    console.log(Translate());

    if (filteredObjects[0]) {
      const currentQuiz = filteredObjects[filteredObjects.length - 1];
      console.log("cr", currentQuiz.id);

      // MULTIPLE_CHOICE
      if (
        currentQuiz.type === "MULTIPLE_CHOICE" ||
        currentQuiz.type === "BASIC_QCM" ||
        currentQuiz.type === "IMAGE_QCM" ||
        currentQuiz.type === "AUDIO_QCM"
      ) {
        console.log("this is quiz");
        /// remove content
        localStorage.removeItem("content");
        const quizQuestionsUpdated = JSON.parse(
          JSON.stringify(
            filteredObjects[filteredObjects.length - 1].exerciseAndAnswers
          )
        );

        quizQuestionsUpdated.forEach((question) => {
          question.mediaQuestion = question.mediaQuestion[0];
          question.answers.forEach((answer) => {
            if (answer.mediaResponse) {
              answer.mediaResponse = answer.mediaResponse[0];
            }
          });
        });
        try {
          localStorage.setItem(
            "currentQuiz",
            JSON.stringify(TestFunction(quizQuestionsUpdated, currentQuiz.id))
          );
          dispatch(QuizValidationAction(true));
          navigate("/lessons/section/quiz");
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
            filteredObjects[filteredObjects.length - 1].exerciseAndAnswers,
            currentQuiz.id
          );
          localStorage.setItem("currentQuiz", JSON.stringify(listenData));

          // hide navber and navigate
          dispatch(QuizValidationAction(true));
          navigate("/lessons/section/quiz");
        } catch (error) {
          console.log("data not valid");
        }
      }

      // listen and repeat
      if (currentQuiz.type === "ASSOCIATE") {
        const wordMatchData =
          filteredObjects[filteredObjects.length - 1].exerciseAndAnswers;
        console.log("wrod", wordMatchData);
        localStorage.setItem(
          "currentQuiz",
          JSON.stringify(FormatMatchTheWordsData(wordMatchData, currentQuiz.id))
        );

        // hide navber and navigate
        dispatch(QuizValidationAction(true));
        navigate("/lessons/section/quiz");
      }

      // translate
      if (currentQuiz.type === "TRANSLATE") {
        localStorage.removeItem("content");

        const translateData =
          filteredObjects[filteredObjects.length - 1].exerciseAndAnswers;

        console.log("data:", translateData);

        localStorage.setItem(
          "currentQuiz",
          JSON.stringify(Translate(translateData, currentQuiz.id))
        );

        // hide navber and navigate
        dispatch(QuizValidationAction(true));
        navigate("/lessons/section/quiz");
      }
      if (currentQuiz.type === "MEMORY") {
        const memoryGameData =
          filteredObjects[filteredObjects.length - 1].exerciseAndAnswers;
        console.log("memory game found!", MemoryGameData(memoryGameData));
        localStorage.setItem(
          "memoryGame",
          JSON.stringify(MemoryGameData(memoryGameData, currentQuiz.id))
        );

        navigate("/lessons/section/quiz/game");
        dispatch(QuizValidationAction(true));
      }
      if (currentQuiz.type === "ORDERED") {
        localStorage.removeItem("content");

        const putInOrderData =
          filteredObjects[filteredObjects.length - 1].exerciseAndAnswers;

        console.log(FormatPutInOrder(putInOrderData, currentQuiz.id));
        localStorage.setItem(
          "currentQuiz",
          JSON.stringify(FormatPutInOrder(putInOrderData, currentQuiz.id))
        );

        // hide navber and navigate
        dispatch(QuizValidationAction(true));
        navigate("/lessons/section/quiz");
      }
      if (currentQuiz.type === "DIALOGUE") {
        localStorage.removeItem("content");

        const dialoguedata = filteredObjects[filteredObjects.length - 1];

        console.log(FormatDialogueData(dialoguedata, currentQuiz.id));
        localStorage.setItem(
          "currentQuiz",
          JSON.stringify(FormatDialogueData(dialoguedata, currentQuiz.id))
        );
        // hide navber and navigate
        dispatch(QuizValidationAction(true));
        navigate("/lessons/section/quiz/dialogue");
      }

      // quiz condition end
    }

    if (result.content.length > 10) {
      console.log("data found");
      localStorage.setItem("content", JSON.stringify(result.content));
      localStorage.setItem("currentQuiz", JSON.stringify(demoQuiz));
      /// hide navber
      dispatch(QuizValidationAction(true));
      navigate("/lessons/section/quiz");
    }

    if (!(result.content.length > 10) && !filteredObjects[0]) {
      setErrorMessage("Aucun quiz trouvé !");
      setShowModal(true);
    }
  };

  return (
    <div>
      {isPageLoading ? (
        <Loading page={true} message={"S'il vous plaît, attendez!"} />
      ) : (
        <div id="lgl">
          <div>
            <div className="row d-flex justify-content-center justify-content-lg-between">
              {currentLessonSection.map((result) => (
                <div
                  onClick={() => handleSection(result)}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-sm-start mt-4"
                  key={result.id}
                >
                  <div>
                    <div className="card truncate">
                      <div className="d-flex justify-content-center">
                        <div className="inner-icon">
                          <img
                            src={`${API_URL}/mediaObject/download/${result.image}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <h2 className="text-wrap text-center">
                          {result.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {showModal && (
            <ErrorModal
              open={showModal}
              error={errorMessage}
              actionText={"Continuer"}
              setOpen={toggleModal}
            />
          )}
        </div>
      )}
    </div>
  );
}

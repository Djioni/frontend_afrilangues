import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Howl } from "howler";
import {
  MultipleChoiceQuestion,
  MatchWordsQuestion,
  Lesson,
  QuizProgressBar,
  ImageMultipleChoiceQuestion,
  AudioMultipleChoiceQuestion,
  TrueFalseImageQuestion,
  ListenRepeatQuestion,
  FillInBlankQuestion,
  PutInOrderQuestion,
  TranslatingWordsQuestion,
} from "./components/index";
import { IoSettingsOutline } from "react-icons/io5";
import close_icon from "../../assets/close_icon_2.png";
import quiz_avatar from "../../assets/quiz_avatar.png";
import quiz_avatar_2 from "../../assets/quiz_avatar_2.png";
import quiz_avatar_3 from "../../assets/quiz_avatar_3.png";
import apple_icon from "../../assets/apple-icon.png";
import car_icon from "../../assets/car-icon.png";
import fish_icon from "../../assets/fish-icon.png";
import tiger_icon from "../../assets/tiger-icon.png";
import dog_sound from "../../assets/dog-sound.mp3";
import cat_sound from "../../assets/cat-sound.mp3";
import cow_sound from "../../assets/cow-sound.mp3";
import good_morning_sound from "../../assets/good-morning.mp3";
import horse_sound from "../../assets/horse-sound.mp3";
import true_false_1 from "../../assets/true-false-1.jpg";
import "./QuizPage.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { QuizValidationAction } from "../LearningDashboard/services/actions/QuizValidationAction";
import Loading from "../Loading";
import { createSearchParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { API_URL, AUTH_NAME } from "../../api";
import axios from "axios";
// lesson quiz

let quizData1 = [
  {
    lessonTitle: "Lesson 1: Multiple Choice",
    questions: [
      {
        questionText: "What is the capital of France?",
        format: "multipleChoice",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswerIndex: 0,
      },
      {
        questionText: "Which planet is known as the Red Planet?",
        format: "multipleChoice",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswerIndex: 1,
      },
      {
        questionText: "Which fruit is shown in the image?",
        format: "multipleChoice",
        imageOptions: [
          { imageURL: apple_icon, text: "Apple" },
          { imageURL: car_icon, text: "Car" },
          { imageURL: fish_icon, text: "Fish" },
          { imageURL: tiger_icon, text: "Tiger" },
        ],
        correctAnswerIndex: 0,
      },
      {
        questionText: "Listen to the audio. Which animal sound like a Cat?",
        format: "multipleChoice",
        audioOptions: [
          {
            audioURL: "",
            text: "Dog",
          },
          { audioURL: cat_sound, text: "Cat" },
          { audioURL: cow_sound, text: "Cow" },
          { audioURL: horse_sound, text: "Horse" },
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    lessonTitle: "Lesson 2: True or False",
    questions: [
      // ... existing questions ...
      {
        questionText: "Is she smiling?",
        format: "trueFalse",
        imageQuestion: true,
        imageUrl: true_false_1,
        correctAnswer: true,
      },
    ],
  },

  {
    lessonTitle: "Lesson 3: Listen and Repeat",
    questions: [
      {
        questionText: "Listen and repeat the word:",
        format: "listenRepeat",
        audioSrc:
          "http://95.111.234.161:5001/api/mediaObject/download/64fc8112d43dc93fd06cfc9a",
        options: ["Good Morning", "Good afternoon"],
        correctAnswer: "Good Morning",
      },
    ],
  },

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

  {
    lessonTitle: "Lesson 5: Put Words in Order",
    questions: [
      {
        questionText: "Put Words in Order:",
        format: "putInOrder",
        sentence: [
          "Water",
          "is",
          "composed",
          "of",
          "oxygen",
          "and",
          "hydrogen",
        ],
        correctOrder: [
          "Water",
          "is",
          "composed",
          "of",
          "oxygen",
          "and",
          "hydrogen",
        ],
      },
      // Add more questions in the same format
    ],
  },

  {
    lessonTitle: "Lesson 6: Translating Words",
    questions: [
      {
        format: "translatingWords",
        word: "Bonjour comment allez-vous? Comment vont tes études?",
        correctTranslation:
          "Good morning, how are you doing? How are your studies going?",
      },
      // ... (other questions)
    ],
  },

  {
    lessonTitle: "Lesson 7: Words Matching",

    questions: [
      {
        questionText: "Match the words with their meanings:",
        format: "wordsMatching",
        leftWords: ["Apple", "Banana", "Cherry", "Grapes"],
        rightWords: [
          "A sweet fruit",
          "Yellow and curved",
          "Small and red",
          "Clusters of small round fruits",
        ],
        correctMatches: [0, 1, 2, 3],
      },
    ],
  },

  // Add more lessons
];
const quizData = [
  {
    lessonTitle: "Lesson 5: Put Words in Order",
    questions: [
      {
        questionText: "Put Words in Order:",
        format: "putInOrder",
        sentence: [
          "Water",
          "is",
          "composed",
          "of",
          "oxygen",
          "and",
          "hydrogen",
        ],
        correctOrder: "",
      },
      // Add more questions in the same format
    ],
  },
];

const Quizzes = () => {
  // scrolling handle
  const [removeSmPadding, setRemoveSmPadding] = useState("");

  useEffect(() => {
    // console.log("Adding event listeners");
    // const updateScreenSize = () => {
    //   setScreenWidth(window.innerWidth);
    //   setScreenHeight(window.innerHeight);
    // };
    // const handleScroll = () => {
    //   console.log("Hello");
    //   setRemoveSmPadding("quiz_footer_add");
    // };
    // // Add a resize event listener to update screen size when the window is resized
    // window.addEventListener("resize", updateScreenSize);
    // // Check if the scroll event listener is already attached
    // if (!window.scrollListenerAdded) {
    //   console.log("Adding scroll event listener");
    //   window.addEventListener("scroll", handleScroll);
    //   window.scrollListenerAdded = true;
    // }
    // Rest of your code...
  }, []);

  // handle scrolling end
  const currentQuiz = useSelector((state) => state.currentQuiz);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress, setProgress] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showVerifyButton, setShowVerifyButton] = useState(true);
  const [answerCorrect, setAnswerCorrect] = useState(null);
  const lessonName = useSelector((state) => state.lessonName);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const dispatch = useDispatch();
  const [contentData, setContentData] = useState("");
  const quizData = JSON.parse(localStorage.getItem("currentQuiz"));
  const [disableLeftIndex, setDisableLeftIndex] = useState([]);
  const [disableRightIndex, setDisableRightIndex] = useState([]);
  const [wrongRightIndex, setWrongRightIndex] = useState([]);
  const [wrongLeftIndex, setWrongLeftIndex] = useState([]);
  const [correntWordMatch, setCorrentWordMatch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rightMultipleAnswer, setRightMultipleAnswer] = useState("");
  const [successAlert, setSuccessAlert] = useState(null);
  // quizData = quizData[0];
  const content = JSON.parse(localStorage.getItem("content"));
  const navigate = useNavigate();
  // souonds
  const [wrongSound] = useState(
    new Howl({
      src: ["/sounds/wrong.mp3"],
    })
  );
  const [successSound] = useState(
    new Howl({
      src: ["/sounds/success.mp3"],
    })
  );

  //
  if (!quizData) {
    navigate("/dashboard");
  }
  console.log(lessonName);
  const currentLessonData = quizData ? quizData[currentLesson] : "";
  const currentQuestionData = currentLessonData
    ? currentLessonData.questions[currentQuestion]
    : "";

  //
  useEffect(() => {
    //
    dispatch(QuizValidationAction(true));
    if (content) {
      setIsPageLoading(false);
      setIsQuizOpen(true);
    } else {
      setIsPageLoading(false);
    }
    //
    return () => {
      dispatch(QuizValidationAction(false));
    };
  }, []);
  // Find the lesson object with the specified lesson title
  // console.log(currentQuiz);
  // const lessonTitleToFind = "Lesson 6: Translating Words";

  // const lessonObject = quizData.find(
  //   (lesson) => lesson.lessonTitle === lessonTitleToFind
  // );
  // console.log("essonObject", lessonObject);
  // quizData = [lessonObject];

  // PUT IN ORDER STATE
  const [sentence, setSentence] = useState([]);
  const [wordOrder, setWordOrder] = useState([]);
  const [selectedTranslation, setSelectedTranslation] = useState("");
  const [selectedWordMatchingAnswer, setSelectedWordMatchingAnswer] = useState(
    []
  );
  const [isVerified, setIsVerified] = useState(false);

  const [selectedPairs, setSelectedPairs] = useState([]);
  const [isWordMatchingComplete, setIsWordMatchingComplete] = useState(false);
  const [putInOrderVerifyWrongCounter, setPutInOrderVerifyWrongCounter] =
    useState(1);
  const [putWordBg, setPutWordBG] = useState(false);
  const handleWordClick = (word) => {
    // setWordOrder((prevOrder) => [...prevOrder, word]);

    if (wordOrder.includes(word)) {
      // Remove word from wordOrder
      setWordOrder((prevOrder) => prevOrder.filter((w) => w !== word));
    } else {
      // Add word to wordOrder
      setWordOrder((prevOrder) => [...prevOrder, word]);
    }

    // if (sentence.includes(word)) {
    //   // Remove word from sentence and add it to wordOrder
    //   setSentence((prevSentence) => prevSentence.filter((w) => w !== word));
    //   setWordOrder((prevOrder) => [...prevOrder, word]);

    //   console.log(sentence);
    // } else if (wordOrder.includes(word)) {
    //   // Remove word from wordOrder and add it to sentence
    //   setWordOrder((prevOrder) => prevOrder.filter((w) => w !== word));
    //   setSentence((prevSentence) => [...prevSentence, word]);
    //   console.log(sentence);
    // }
  };

  const handleTranslationChange = (event) => {
    setSelectedTranslation(event.target.value);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setIsVerified(true);
  };

  // HANDLE ALERT
  const handleDelete = () => {
    // Swal.fire({
    //   title: "Success!",
    //   text: "Quiz completed successfully.",
    //   icon: "success",
    //   confirmButtonText: "OK",
    // });
    navigate(-1);
  };

  const handleNext = () => {
    setRightMultipleAnswer("");

    const currentQuestionData =
      quizData[currentLesson].questions[currentQuestion];
    const isCorrect =
      selectedAnswer === currentQuestionData.correctAnswerIndex ||
      JSON.stringify(selectedAnswer) ===
        JSON.stringify(currentQuestionData.correctAnswers);

    if (isCorrect) {
      setProgress(progress + 1);
    }

    if (currentQuestion < quizData[currentLesson].questions.length - 1) {
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentLesson < quizData.length - 1) {
      setSelectedAnswer(null);
      setCurrentLesson(currentLesson + 1);
      setCurrentQuestion(0);
    } else {
      setQuizCompleted(true);
      handleDelete();
    }
  };

  // FUNCTION FOR WORD MATCHING VERIFY
  const handleClick = () => {
    setRightMultipleAnswer("");
    const correctMatches = currentQuestionData.correctMatches;
    const selectedPairs = selectedWordMatchingAnswer.filter(
      (pair) => pair.right !== null
    );

    const isCorrect = selectedPairs.every(
      ({ left, right }) => correctMatches[left] === right
    );

    setSelectedWordMatchingAnswer((prevSelectedPairs) =>
      prevSelectedPairs.map((pair) =>
        pair.right !== null && correctMatches[pair.left] === pair.right
          ? // ? { ...pair, allow: true } // Set 'allow' property to true for verified pairs
            // : pair

            { ...pair, allow: true } // Set 'allow' property to true for verified pairs
          : pair
      )
    );

    // console.log("Is Correct: ", isCorrect);
    // console.log("Selected Pairs: ", selectedPairs);
    // console.log("Correct Matches: ", currentQuestionData.correctMatches);
  };

  const handleVerify = async (answer) => {
    setShowVerifyButton(false);

    // Get the data of the current question
    const currentQuestionData =
      quizData[currentLesson].questions[currentQuestion];

    // Initialize a variable to track if the answer is correct
    let isCorrect = false;
    let isEveryWordMatch;

    // Check the question format to determine the verification logic
    if (currentQuestionData.format === "multipleChoice") {
      setShowVerifyButton(true);

      // Hide the verify button
      const currentQuizID = quizData[0].id;
      const userID = Cookies.get("id") ? JSON.parse(Cookies.get("id")) : "";
      const userToken = Cookies.get("id")
        ? JSON.parse(Cookies.get("token"))
        : "";
      const sentence = currentQuestionData.questionText;
      console.log("fdf", selectedAnswer);
      const content =
        currentQuestionData.options?.filter(
          (value, index) => index === selectedAnswer
        )[0] ||
        currentQuestionData.audioOptions?.filter(
          (value, index) => index === selectedAnswer
        )[0].text ||
        currentQuestionData.imageOptions?.filter(
          (value, index) => index === selectedAnswer
        )[0].text;
      console.log("content", content);
      if (content && (selectedAnswer === 0 || selectedAnswer)) {
        setIsLoading(true);
        // assessment schma
        const AssessmentSchma = {
          userId: userID,
          exerciseId: currentQuizID,
          type: "MULTIPLE_CHOICE",
          sentence: sentence,
          order: 1,
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
        try {
          const assessment = await axios.post(
            `${API_URL}/assessment/`,
            AssessmentSchma,
            config
          );
          console.log("ass", assessment.data);
          if (assessment.data.status === "RIGHT") {
            successSound.play();
            setIsLoading(false);
            isCorrect = true;
            setShowVerifyButton(false);
          } else {
            wrongSound.play();
            setIsLoading(false);
            isCorrect = false;
            setShowVerifyButton(true);
            console.log(
              "right answer:",
              assessment.data.answerValidation[0].content
            );
            setPutInOrderVerifyWrongCounter((prev) => prev + 1);
            if (putInOrderVerifyWrongCounter >= 3) {
              setPutInOrderVerifyWrongCounter(1);
              console.log("ready for redirect to next question");
              setShowVerifyButton(false);
              setRightMultipleAnswer(
                assessment.data.answerValidation[0].content
              );
              isCorrect = true;
              successSound.play();
            }
          }
        } catch (error) {
          console.log(error.message);
          if (error.message === "Request failed with status code 401") {
            Cookies("token", "");
            Cookies("id", "");
            localStorage.clear();
            navigate("/auth/login");
          }
        }
      }
      // For multiple choice, compare the selected answer index or answers with correct options
      // isCorrect =
      //   selectedAnswer === currentQuestionData.correctAnswerIndex ||
      //   JSON.stringify(selectedAnswer) ===
      //     JSON.stringify(currentQuestionData.correctAnswers);
    } else if (currentQuestionData.format === "trueFalse") {
      // For true/false, compare the selected answer with the correct answer
      isCorrect = selectedAnswer === currentQuestionData.correctAnswer;

      // Hide the verify button
      setShowVerifyButton(false);
    } else if (currentQuestionData.format === "wordsMatching") {
      // Check if all words are matched to determine completion status
      const correctMatches = currentQuestionData.correctMatches;
      console.log("currentMath", correctMatches);
      const allWordsMatched =
        selectedWordMatchingAnswer.length ===
        currentQuestionData.correctMatches.length;
      console.log("selected world match answer", selectedWordMatchingAnswer);

      const newdata = selectedWordMatchingAnswer.filter((value) => value.allow);
      console.log("truedata", newdata);

      // Check if all matches are correct
      const leftindex = [];
      const rightindex = [];
      // wrong
      const wrongleftindex = [];
      const wrongrightindex = [];
      let selectedLeftIndex = NaN;
      let selectedRightIndex = NaN;
      const allMatchesCorrect = selectedWordMatchingAnswer.every(
        ({ left, right }) => {
          selectedLeftIndex = left;
          selectedRightIndex = right;
          if (currentQuestionData.correctMatches[left] === right) {
            // setAnswerCorrect(true);

            // successSound.play();
            // setTimeout(() => {
            //   setAnswerCorrect(null);
            // }, 3000);

            console.log(`Current match: Left: ${left}, Right: ${right}`);
            leftindex.push(left);
            rightindex.push(right);

            return currentQuestionData.correctMatches[left] === right;
          } else {
            // setAnswerCorrect(false);
            // wrongSound.play();
            // setTimeout(() => {
            //   setAnswerCorrect(null);
            // }, 3000);

            console.log(` wrong Current match: Left: ${left}, Right: ${right}`);
            wrongleftindex.push(left);
            wrongrightindex.push(right);
          }
        }
      );
      console.log("right left and right", leftindex, rightindex);

      //
      console.log("selected p", selectedLeftIndex, selectedRightIndex);
      const currentLeftWords = currentQuestionData.leftWords[selectedLeftIndex];
      const currentRightWords =
        currentQuestionData.rightWords[selectedRightIndex];
      // ASSESSEMENT START
      // assessment start
      // Hide and show the verify button

      const currentQuizID = quizData[0].id;
      const userID = Cookies.get("id") ? JSON.parse(Cookies.get("id")) : "";
      const userToken = Cookies.get("id")
        ? JSON.parse(Cookies.get("token"))
        : "";
      const sentence = currentLeftWords;
      console.log("fdf", selectedAnswer);
      const content = currentRightWords;
      console.log("content", currentQuizID);

      const DataMatch = () => {
        console.log("currant wrod", currentLeftWords, currentRightWords);
        //
        //wrong
        setWrongLeftIndex(wrongleftindex);
        setWrongRightIndex(wrongrightindex);

        console.log("wrongleft", wrongleftindex[0]);
        console.log("wrongright", wrongrightindex);
        if (wrongLeftIndex[0] === 0 || wrongLeftIndex[0]) {
          console.log("selection incurrent");
        }
        // left and right word start

        console.log(allMatchesCorrect);

        if (allMatchesCorrect || !allMatchesCorrect) {
          isEveryWordMatch = null;
        }

        if (allMatchesCorrect) {
          // setCorrentWordMatch(true);
          // successSound.play();
          // console.log("data", allMatchesCorrect);
          // toast.success("Correct Answer!", {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          // });
        } else {
          // setCorrentWordMatch(false);
          // wrongSound.play();
          // toast.error("Wrong Answer!", {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          // });
        }

        // setIsWordMatchingComplete(allWordsMatched);
        setShowVerifyButton(true);
        handleClick();
      };
      if (true) {
        DataMatch();
        setIsLoading(true);

        // assessment schma
        const AssessmentSchma = {
          userId: userID,
          exerciseId: currentQuizID,
          type: "LISTEN",
          sentence: sentence,
          order: 1,
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
        try {
          const assessment = await axios.post(
            `${API_URL}/assessment/`,
            AssessmentSchma,
            config
          );
          console.log("ass", assessment.data);
          if (assessment.data.status === "RIGHT") {
            successSound.play();
            setIsLoading(false);
            setDisableLeftIndex(rightindex);
            setDisableRightIndex(leftindex);
            setAnswerCorrect(true);
            // Set the state to indicate whether all words are matched
            setIsWordMatchingComplete(allWordsMatched && allMatchesCorrect);

            // Check if all word matching is correct
            if (allWordsMatched && allMatchesCorrect) {
              // Calculate the total number of questions completed across all lessons
              const totalQuestionsCompleted =
                progress +
                currentLessonData.questions.length -
                currentQuestion +
                (currentLessonData.questions.length === 1 ? 0 : 1);

              // Update the progress state
              isCorrect = true;
              setProgress(totalQuestionsCompleted);
              isEveryWordMatch = true;
            }
            // // Hide the verify button
            setShowVerifyButton(allWordsMatched === false ? true : false);
            handleClick();
          } else {
            wrongSound.play();
            setIsLoading(false);
            setAnswerCorrect(false);

            console.log(
              "right answer:",
              assessment.data.answerValidation[0].content
            );
            setRightMultipleAnswer(assessment.data.answerValidation[0].content);
          }
        } catch (error) {
          console.log(error.message);
          if (error.message === "Request failed with status code 401") {
            Cookies("token", "");
            Cookies("id", "");
            localStorage.clear();
            navigate("/auth/login");
          }

          if (error.message === "Request failed with status code 500") {
            setIsLoading(false);
          }
        }
      }
      // assessment end
      // ASSESSEMNT END
    } else if (currentQuestionData.format === "listenRepeat") {
      setShowVerifyButton(true);
      // For listen and repeat, compare the selected answer with the correct answer
      // isCorrect = selectedAnswer === currentQuestionData.correctAnswer;

      // assessment start
      // Hide and show the verify button

      const currentQuizID = quizData[0].id;
      const userID = Cookies.get("id") ? JSON.parse(Cookies.get("id")) : "";
      const userToken = Cookies.get("id")
        ? JSON.parse(Cookies.get("token"))
        : "";
      const sentence = currentQuestionData.questionText;
      console.log("fdf", selectedAnswer);
      const content = currentQuestionData.options?.filter(
        (value, index) => value === selectedAnswer
      )[0];
      console.log("content", currentQuizID);
      if (content) {
        setIsLoading(true);
        // assessment schma
        const AssessmentSchma = {
          userId: userID,
          exerciseId: currentQuizID,
          type: "LISTEN",
          sentence: sentence,
          order: 1,
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
        try {
          const assessment = await axios.post(
            `${API_URL}/assessment/`,
            AssessmentSchma,
            config
          );
          console.log("ass", assessment.data);
          if (assessment.data.status === "RIGHT") {
            successSound.play();
            setIsLoading(false);
            isCorrect = true;
            setShowVerifyButton(false);
          } else {
            wrongSound.play();

            setIsLoading(false);
            isCorrect = false;
            setShowVerifyButton(true);
            console.log(
              "right answer:",
              assessment.data.answerValidation[0].content
            );
            setPutInOrderVerifyWrongCounter((prev) => prev + 1);
            if (putInOrderVerifyWrongCounter >= 3) {
              setPutInOrderVerifyWrongCounter(1);
              console.log("ready for redirect to next question");
              setShowVerifyButton(false);
              setRightMultipleAnswer(
                assessment.data.answerValidation[0].content
              );

              isCorrect = true;
              successSound.play();
            }
          }
        } catch (error) {
          console.log(error.message);
          if (error.message === "Request failed with status code 401") {
            Cookies("token", "");
            Cookies("id", "");
            localStorage.clear();
            navigate("/auth/login");
          }
        }
      }
      // assessment end
    } else if (currentQuestionData.format === "fillInBlank") {
      // For fill in the blank, compare the selected answer with the correct answer (case-insensitive)
      isCorrect =
        selectedAnswer.trim().toLowerCase() ===
        currentQuestionData.correctAnswer.trim().toLowerCase();

      // Hide the verify button
      setShowVerifyButton(false);
    } else if (currentQuestionData.format === "putInOrder") {
      // For put in order, compare the selected order with the correct order
      setShowVerifyButton(true);
      console.log(wordOrder.join(" "));

      // assessment start
      // Hide and show the verify button

      const currentQuizID = quizData[0].id;
      const userID = Cookies.get("id") ? JSON.parse(Cookies.get("id")) : "";
      const userToken = Cookies.get("id")
        ? JSON.parse(Cookies.get("token"))
        : "";
      const sentence = currentQuestionData.correctOrder;
      const order = currentQuestionData.order;
      console.log("fdf", userToken);
      const content = wordOrder.join(" ");

      if (content) {
        setIsLoading(true);
        // assessment schma
        const AssessmentSchma = {
          userId: userID,
          exerciseId: currentQuizID,
          type: "ORDERED",
          sentence: sentence,
          order: 1,
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
        try {
          const assessment = await axios.post(
            `${API_URL}/assessment/`,
            AssessmentSchma,
            config
          );
          console.log("ass", assessment.data);
          if (assessment.data.status === "RIGHT") {
            successSound.play();
            setIsLoading(false);
            isCorrect = true;
            setShowVerifyButton(false);
          } else {
            wrongSound.play();
            setIsLoading(false);
            isCorrect = false;

            console.log("wrong number ", putInOrderVerifyWrongCounter);
            setPutInOrderVerifyWrongCounter((prev) => prev + 1);
            if (putInOrderVerifyWrongCounter >= 3) {
              setPutInOrderVerifyWrongCounter(1);
              console.log("ready for redirect to next question");
              setShowVerifyButton(false);
              setWordOrder(
                assessment.data.answerValidation[0].content.split(" ")
              );
              isCorrect = true;
              setPutWordBG(true);
              successSound.play();
            }

            console.log(
              "right answer:",
              assessment.data.answerValidation[0].content.split(" ")
            );

            setRightMultipleAnswer(assessment.data.answerValidation[0].content);
          }
        } catch (error) {
          console.log(error.message);
          if (error.message === "Request failed with status code 401") {
            Cookies("token", "");
            Cookies("id", "");
            localStorage.clear();
            navigate("/auth/login");
          }
        }
      }
      //assessment end

      // isCorrect =
      //   JSON.stringify(wordOrder) ===
      //   JSON.stringify(currentQuestionData.correctOrder);

      // // Hide the verify button
      // setShowVerifyButton(false);
    } else if (currentQuestionData.format === "translatingWords") {
      // For translating words, compare the selected translation with the correct translation (case-insensitive)
      // isCorrect =
      //   selectedTranslation.trim().toLowerCase() ===
      //   currentQuestionData.correctTranslation.trim().toLowerCase();

      // // // Hide the verify button

      setShowVerifyButton(true);
      // assessment start
      // Hide and show the verify button

      const currentQuizID = quizData[0].id;
      const userID = Cookies.get("id") ? JSON.parse(Cookies.get("id")) : "";
      const userToken = Cookies.get("id")
        ? JSON.parse(Cookies.get("token"))
        : "";
      const sentence = currentQuestionData.word;

      console.log("fdf", selectedTranslation);
      const content = selectedTranslation;
      console.log("content", currentQuizID);
      if (content) {
        setIsLoading(true);
        // assessment schma
        const AssessmentSchma = {
          userId: userID,
          exerciseId: currentQuizID,
          type: "BASIC_QCM",
          sentence: sentence,
          order: 0,
          answerLetter: [
            {
              content: selectedTranslation,
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
        try {
          const assessment = await axios.post(
            `${API_URL}/assessment/`,
            AssessmentSchma,
            config
          );
          console.log("ass", assessment.data);
          if (assessment.data.status === "RIGHT") {
            successSound.play();
            setIsLoading(false);
            isCorrect = true;
            setShowVerifyButton(false);
          } else {
            wrongSound.play();
            setIsLoading(false);
            isCorrect = false;
            setShowVerifyButton(true);
            console.log(
              "right answer:",
              assessment.data.answerValidation[0].content
            );

            setPutInOrderVerifyWrongCounter((prev) => prev + 1);
            if (putInOrderVerifyWrongCounter >= 3) {
              setPutInOrderVerifyWrongCounter(1);
              console.log("ready for redirect to next question");
              setSelectedTranslation(
                assessment.data.answerValidation[0].content
              );

              setShowVerifyButton(false);

              isCorrect = true;

              successSound.play();
            }
          }
        } catch (error) {
          console.log(error.message);
          if (error.message === "Request failed with status code 401") {
            Cookies("token", "");
            Cookies("id", "");
            localStorage.clear();
            navigate("/auth/login");
          }
        }
      }
      // assessment end
    }

    // // Update progress and answer correctness state
    if (currentQuestionData.format === "wordsMatching") {
      return "";
    } else {
      if (isCorrect) {
        setProgress(progress + 1);
        setAnswerCorrect(true);
      } else if (correntWordMatch === true) {
        setAnswerCorrect(true);
      } else if (correntWordMatch === false) {
        setAnswerCorrect(false);
      } else if (isEveryWordMatch === null) {
        setAnswerCorrect(null);
      } else if (isEveryWordMatch) {
        setAnswerCorrect(true);
      } else {
        setAnswerCorrect(false);
      }
    }

    // Update selectedWordMatchingAnswer
    // setSelectedWordMatchingAnswer(selectedPairs);
  };

  const handleContinue = () => {
    if (currentQuestion < currentLessonData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowVerifyButton(true);
      setAnswerCorrect(null); // Reset the answer correctness
    } else if (currentLesson < quizData.length - 1) {
      setSelectedAnswer(null);
      setCurrentLesson(currentLesson + 1);
      setCurrentQuestion(0);
      setShowVerifyButton(true);
      setAnswerCorrect(null); // Reset the answer correctness
    } else {
      handleNext();
    }
    // Reset selectedWordMatchingAnswer and selectedPairs
    // setSelectedWordMatchingAnswer([]);
    // setSelectedPairs([]);
  };

  const renderQuestionFormat = () => {
    const currentQuestionData =
      quizData[currentLesson].questions[currentQuestion];

    console.log("______________");
    console.log(currentQuestionData);
    console.log("____________");

    if (currentQuestionData.format === "multipleChoice") {
      if (currentQuestionData.imageOptions) {
        return (
          <ImageMultipleChoiceQuestion
            rightMultipleAnswer={rightMultipleAnswer}
            options={currentQuestionData.imageOptions}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
          />
        );
      } else if (currentQuestionData.audioOptions) {
        return (
          <AudioMultipleChoiceQuestion
            rightMultipleAnswer={rightMultipleAnswer}
            options={currentQuestionData.audioOptions}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
          />
        );
      } else {
        return (
          <MultipleChoiceQuestion
            rightMultipleAnswer={rightMultipleAnswer}
            options={currentQuestionData.options}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
          />
        );
      }
    } else if (currentQuestionData.format === "trueFalse") {
      if (currentQuestionData.imageQuestion) {
        return (
          <TrueFalseImageQuestion
            questionText={currentQuestionData.questionText}
            imageUrl={currentQuestionData.imageUrl}
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswer}
          />
        );
      }
    } else if (currentQuestionData.format === "listenRepeat") {
      return (
        <ListenRepeatQuestion
          audioSrc={currentQuestionData.audioSrc}
          options={currentQuestionData.options}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          rightMultipleAnswer={rightMultipleAnswer}
        />
      );
    } else if (currentQuestionData.format === "fillInBlank") {
      return (
        <FillInBlankQuestion
          questionText={currentQuestionData.questionText}
          options={currentQuestionData.options}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
        />
      );
    } else if (currentQuestionData.format === "putInOrder") {
      return (
        <PutInOrderQuestion
          // sentence={currentQuestionData.sentence}
          // correctOrder={currentQuestionData.correctOrder}
          // setAnswerCorrect={setAnswerCorrect}
          // onVerify={handleVerify}
          // handleWordClick={handleWordClick}
          // wordOrder={wordOrder}
          putWordBg={putWordBg}
          sentence={currentQuestionData.sentence}
          correctOrder={currentQuestionData.correctOrder}
          onVerify={handleVerify}
          setAnswerCorrect={setAnswerCorrect}
          wordOrder={wordOrder}
          handleWordClick={handleWordClick}
        />
      );
    } else if (currentQuestionData.format === "translatingWords") {
      return (
        <TranslatingWordsQuestion
          word={currentQuestionData.word}
          correctTranslation={currentQuestionData.correctTranslation}
          onAnswerSelect={handleAnswerSelect}
          selectedTranslation={selectedTranslation}
          handleTranslationChange={handleTranslationChange}
        />
      );
    } else if (currentQuestionData.format === "wordsMatching") {
      console.log("clicked");
      return (
        <MatchWordsQuestion
          // leftWords={currentQuestionData.leftWords}
          // rightWords={currentQuestionData.rightWords}
          // setSelectedWordMatchingAnswer={setSelectedWordMatchingAnswer}
          // selectedWordMatchingAnswer={selectedWordMatchingAnswer}
          // onAnswerSelect={handleAnswerSelect}
          // currentQuestionData={currentQuestionData}
          // onVerify={handleVerify}

          leftWords={
            quizData[currentLesson].questions[currentQuestion].leftWords
          }
          rightWords={
            quizData[currentLesson].questions[currentQuestion].rightWords
          }
          onAnswerSelect={handleAnswerSelect}
          selectedWordMatchingAnswer={selectedWordMatchingAnswer}
          setSelectedWordMatchingAnswer={setSelectedWordMatchingAnswer}
          currentQuestionData={
            quizData[currentLesson].questions[currentQuestion]
          }
          onVerify={handleVerify}
          setSelectedPairs={setSelectedPairs}
          selectedPairs={selectedPairs}
          disableRightIndex={disableLeftIndex}
          disableLeftIndex={disableRightIndex}
          wrongLeftIndex={wrongLeftIndex}
          wrongRightIndex={wrongRightIndex}
        />
      );
    }
  };

  return (
    <div>
      {isPageLoading ? (
        <Loading page={true} message={"S'il vous plaît, attendez!"} />
      ) : (
        <div>
          {isQuizOpen ? (
            <div className=" text-quiz-box" style={{ marginTop: "180px" }}>
              <h5>{content}</h5>
            </div>
          ) : (
            <div className={`quiz_container`}>
              {/* QUIZ HEADER */}
              <div className="quiz_header">
                <button
                  className="close_btn"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  <img src={close_icon} alt="" className="img-fluid" />
                </button>
                <QuizProgressBar
                  progress={progress}
                  totalQuestions={quizData.reduce(
                    (total, lesson) => total + lesson.questions.length,
                    0
                  )}
                />
                <button className="setting_btn">
                  <IoSettingsOutline />
                </button>
              </div>

              {quizCompleted ? (
                <div className="test-finished-message">Test Finished!</div>
              ) : (
                <>
                  {/* QUIZ BODY */}
                  <div className="quiz_body">
                    {/* <Lesson
              lessonData={quizData[currentLesson]}
              currentQuestion={currentQuestion}
            /> */}
                    {renderQuestionFormat()}
                  </div>

                  {/* QUIZ FOOTER */}
                  <div
                    className={`quiz_footer ${removeSmPadding} ${
                      answerCorrect === true || successAlert === true
                        ? "correct"
                        : answerCorrect === false
                        ? "wrong"
                        : ""
                    }`}
                  >
                    <div className="container verification_box">
                      <div className="quiz_avatar_box">
                        {answerCorrect === null ? (
                          <>
                            <div className="avatar_img_cont">
                              <img
                                src={quiz_avatar}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="quiz_avatar_ques">
                              {quizData[currentLesson].questions[
                                currentQuestion
                              ].questionText === undefined ||
                              quizData[currentLesson].questions[currentQuestion]
                                .format === "wordsMatching" ? (
                                <p>
                                  Sélectionnez <span>“la femme”</span>{" "}
                                </p>
                              ) : (
                                <span>
                                  {
                                    quizData[currentLesson].questions[
                                      currentQuestion
                                    ].questionText
                                  }
                                </span>
                              )}
                            </div>
                          </>
                        ) : answerCorrect || successAlert ? (
                          <>
                            <div className="avatar_img_cont">
                              <img
                                src={quiz_avatar_2}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="quiz_avatar_ques">
                              <div className="cong_text">
                                Bravo ! C'est la bonne réponse !
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="avatar_img_cont">
                              <img
                                src={quiz_avatar_3}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="quiz_avatar_ques">
                              <div className="wrong_text">
                                Oups ! Mauvaise réponse !
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {showVerifyButton && !isWordMatchingComplete ? (
                        <button
                          className="verify_button"
                          onClick={handleVerify}
                        >
                          Vérifier
                          {isLoading && (
                            <div className="px-1 d-inline-block">
                              <div
                                class="spinner-border spinner-border-sm"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                            </div>
                          )}
                        </button>
                      ) : !quizCompleted ? (
                        <button
                          className="next_button"
                          onClick={() => {
                            setWordOrder([]);
                            setRightMultipleAnswer(null);
                            handleContinue();
                            setPutInOrderVerifyWrongCounter(1);
                            setAnswerCorrect(null);
                            setSelectedTranslation("");
                            setPutWordBG(false);
                          }}
                        >
                          {currentQuestion <
                          quizData[currentLesson].questions.length - 1
                            ? "Continue"
                            : currentLesson < quizData.length - 1
                            ? "Next Lesson"
                            : "Continue"}
                        </button>
                      ) : (
                        <div className="test-finished-message">
                          L'exercice est fini ! Bravo!
                        </div>
                      )}
                    </div>
                  </div>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                  {/* Same as */}
                  <ToastContainer />
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quizzes;

// Get the correct matches from currentQuestionData
// const correctMatches = currentQuestionData.correctMatches;

// // Create an array to store the selected pair indices
// const selectedPairs = [];

// // Iterate through selectedWordMatchingAnswer to get selected pairs
// for (const pair of selectedWordMatchingAnswer) {
//   if (pair.right !== null) {
//     selectedPairs.push([pair.left, pair.right]);
//   }
// }

// // Check if selected pairs match the correct matches
// isCorrect =
//   selectedPairs.length === correctMatches.length &&
//   selectedPairs.every(
//     ([leftIndex, rightIndex]) =>
//       correctMatches.includes(leftIndex) &&
//       correctMatches[rightIndex] === leftIndex
//   );

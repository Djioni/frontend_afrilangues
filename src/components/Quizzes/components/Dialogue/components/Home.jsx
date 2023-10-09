import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiChevronLeft } from "react-icons/fi";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlertOctagon } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";

import { HiSpeakerWave } from "react-icons/hi2";
import { DiAndroid } from "react-icons/di";
import Question from "./Question";
import ErrorModal from "./ErrorModal";
import QuizProgressBar from "./QuizProgressBar";
import { Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { API_URL, AUTH_NAME } from "../../../../../api";
import { Howl } from "howler";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../QuizPage.css";
import "../Dialogue.css";

const Home = () => {
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
  const questionsData1 = [
    {
      question: "Question1",
      keywords: ["Ǹba!", "Hɛ́rɛ!", "sɔ̀gɔma", "ní", "Hɛ́rɛ"],
      audio: "/audio/q1.mp3",
      iconRight: true,
      inputs: 5,
      questions: [
        {
          id: 1,
          inputs: 1,
          inputFirst: false,
          inputMiddle: true,
          input1Name: "blank1",
          text1: "Seriba, í ní",
        },
        {
          id: 2,
          inputs: 2,
          input1Name: "blank2",
          input2Name: "blank3",
          text1: "Í",
          text2: "sɔ̀gɔma.",
        },
        {
          id: 3,
          inputs: 1,
          inputFirst: true,
          input1Name: "blank4",
          text1: "sìra wà?",
        },
        {
          id: 4,
          inputs: 1,
          inputFirst: true,
          input1Name: "blank5",
        },
        {
          id: 5,
          inputs: 1,
          inputFirst: true,
          input1Name: "blank1",
        },
      ],
    },
    {
      question: "Question2",
      keywords: ["sìra", "Ǹse!", "Áw", "ní"],
      audio: "/audio/q2.mp3",
      inputs: 4,
      iconRight: false,
      questions: [
        {
          id: 1,
          inputs: 1,
          inputFirst: true,
          input1Name: "blank1",
          text1: "ní sɔ̀gɔma.",
        },
        {
          id: 2,
          inputs: 1,
          inputFirst: true,
          input1Name: "blank2",
          text1: "ní sɔ̀gɔma.",
        },
        {
          id: 3,
          inputs: 1,
          inputFirst: false,
          input1Name: "blank3",
          text1: "Ǹba! Á",
          text2: "sɔ̀gɔma..",
          inputMiddle: true,
        },
        {
          id: 4,
          inputs: 1,
          inputFirst: false,
          input1Name: "blank4",
          text1: "Hɛ́rɛ",
          text2: "wà?",
          inputMiddle: true,
        },
      ],
    },
    // Add more question objects here if needed.
  ];

  //
  const [isRightShowRightBoxOpen, setIsRightShowBoxOpen] =
    useState("hide-r-box");
  const [isRightShowCloseOpen, setIsRightShowCloseOpen] =
    useState("hide-r-box ");
  const [isOpenQuizFooter, setIsFooterOpen] = useState("");
  const [rightSentence, setRightSentence] = useState("");
  // Now 'updatedQuestionsData' contains the updated question objects with the 'icon' property added based on your condition.

  const [buttonClickCounter, setButtonClickCounter] = useState(0);
  const navigate = useNavigate();
  let quizData = localStorage.getItem("currentQuiz")
    ? JSON.parse(localStorage.getItem("currentQuiz"))
    : "";

  const questionsData = quizData?.map((questionGroup) => {
    const updatedQuestions = questionGroup.questions.map((question, index) => {
      if (index % 2 === 0) {
        question.icon = (
          <DiAndroid
            className=" flex-shrink-0 "
            style={{ color: "#df5411" }}
            size={30}
          />
        );
      } else {
        question.icon = <BiSolidUser style={{ color: "#df5411" }} size={30} />;
      }
      return question;
    });

    return { ...questionGroup, questions: updatedQuestions };
  });

  const [qInputs, setQInputs] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: "",
    blank5: "",
    blank6: "",
    blank7: "",
    blank8: "",
    blank9: "",
    blank10: "",
    blank11: "",
    blank12: "",
    blank13: "",
    blank14: "",
    blank15: "",
    blank16: "",
    blank17: "",
    blank18: "",
    blank19: "",
    blank20: "",
  });

  // const [q1Inputs, setQ1Inputs] = useState<Blanks>({
  //   blank1: "",
  //   blank2: "",
  //   blank3: "",
  //   blank4: "",
  //   blank5: "",
  // });
  // const [q2Inputs, setQ2Inputs] = useState<Blanks>({
  //   blank1: "",
  //   blank2: "",
  //   blank3: "",
  //   blank4: "",
  //   blank5: "",
  // });
  // const handleQ2Inputs = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setQ2Inputs({ ...q2Inputs, [name]: value });
  // };
  // const handleQ1Inputs = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setQ1Inputs({ ...q1Inputs, [name]: value });

  // test data
  const [removeSmPadding, setRemoveSmPadding] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(null);
  const [successAlert, setSuccessAlert] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showVerifyButton, setShowVerifyButton] = useState(true);
  const [isWordMatchingComplete, setIsWordMatchingComplete] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Define quizData as an example (replace with your actual data)
  // const quizData = [
  //   {
  //     questions: [
  //       { questionText: "Question 1" },
  //       { questionText: "Question 2" },
  //       // Add more questions here
  //     ],
  //   },
  //   // Add more lessons here
  // ];

  // test data end
  // };
  const questionsData2 = [
    {
      question: "Question1",

      keywords: ["Ǹba!", "Hɛ́rɛ!", "sɔ̀gɔma", "ní", "Hɛ́rɛ"],
      audio: "/audio/q1.mp3",
      iconRight: true,
      inputs: 5,
      questions: [
        {
          id: 1,
          inputs: 1,
          inputFirst: false,
          inputMiddle: true,
          input1Name: "blank1",
          text1: "Seriba, í ní",
          icon: <BiSolidUser className="text-warning" size={30} />,
        },
        {
          id: 2,

          inputs: 2,
          input1Name: "blank2",
          input2Name: "blank3",
          text1: "Í",
          text2: "sɔ̀gɔma.",
          icon: <DiAndroid className="text-warning flex-shrink-0 " size={30} />,
        },
        {
          id: 3,

          inputs: 1,
          inputFirst: true,
          input1Name: "blank4",
          text1: "sìra wà?",
          icon: <BiSolidUser className="text-warning" size={30} />,
        },
        {
          id: 4,
          inputs: 1,
          inputFirst: true,
          input1Name: "blank5",
          icon: <DiAndroid className="text-warning" size={30} />,
        },
      ],
    },
    {
      question: "Question2",
      keywords: ["sìra", "Ǹse!", "Áw", "ní"],
      audio: "/audio/q2.mp3",
      inputs: 4,
      iconRight: false,
      questions: [
        {
          id: 1,
          inputs: 1,
          inputFirst: true,
          input1Name: "blank1",
          text1: "ní sɔ̀gɔma.",
          icon: <DiAndroid className="text-warning" size={30} />,
        },
        {
          id: 2,

          inputs: 1,
          inputFirst: true,
          input1Name: "blank2",
          text1: "ní sɔ̀gɔma.",
          icon: <DiAndroid className="text-warning" size={30} />,
        },
        {
          id: 3,

          inputs: 1,
          inputFirst: false,
          input1Name: "blank3",
          text1: "Ǹba! Á",
          text2: "sɔ̀gɔma..",
          inputMiddle: true,
          icon: <DiAndroid className="text-warning" size={30} />,
        },
        {
          id: 4,

          inputs: 1,
          inputFirst: false,
          input1Name: "blank4",
          text1: "Hɛ́rɛ",
          text2: "wà?",
          inputMiddle: true,
          icon: <DiAndroid className="text-warning" size={30} />,
        },
      ],
    },

    // {
    //   id: 0,

    //   inputs: 0,
    //   inputFirst: false,
    //   text1: "Hɛ́rɛ ! ",
    //   icon: <BiSolidUser className="text-warning" size={30} />,
    // },
    // {
    //   question: "Question3",
    //   iconRight: true,
    //   inputs: 0,
    //   audio: "/audio/q3.mp3",
    //   questions: [
    //     {
    //       question: "qustion31",
    //       icon: <BiSolidUser className="text-warning" size={30} />,
    //     },
    //     {
    //       question: "qustion32",
    //       icon: <BiSolidUser className="text-warning" size={30} />,
    //     },
    //     {
    //       question: "qustion33",
    //       icon: <BiSolidUser className="text-warning" size={30} />,
    //     },
    //     {
    //       question: "qustion34",
    //       icon: <DiAndroid className="text-warning" size={30} />,
    //     },
    //   ],
    // },
  ];

  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isContinueOpen, setIsContinueOpen] = useState(false);
  const [isFinishTestOpen, setIsFinishTestOpen] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const incrementProgressBar = () => {
    setProgress((prevvalue) => prevvalue + 1);
  };
  const handleErrorModalToggle = () => {
    setErrorModal((prevvalue) => !prevvalue);
  };

  const toggleDialouge = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };

  const [activeQuestion, setActiveQuestion] = useState(
    questionsData[activeQuestionIndex]
  );

  const [activeQuestionKeyWords, setActiveQuestionKeyWords] = useState(
    activeQuestion.keywords
  );

  const goToNextQuestion = () => {
    if (activeQuestionIndex < questionsData.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex(activeQuestionIndex - 1);
    }
  };

  const playAudio = () => {
    const audio = new Audio(activeQuestion.audio);
    audio.play();
  };

  const [currentBlankIndex, setCurrentBlankIndex] = useState(1);
  const [footerBoxClass, setClassBoxClass] = useState("");
  useEffect(() => {
    const newActiveQuestion = questionsData[activeQuestionIndex];
    setActiveQuestion(newActiveQuestion);
    setActiveQuestionKeyWords(newActiveQuestion.keywords);
    setProgress(0);
    setQInputs({
      blank1: "",
      blank2: "",
      blank3: "",
      blank4: "",
      blank5: "",
      blank6: "",
      blank7: "",
      blank8: "",
      blank9: "",
      blank10: "",
      blank11: "",
      blank12: "",
      blank13: "",
      blank14: "",
      blank15: "",
      blank16: "",
      blank17: "",
      blank18: "",
      blank19: "",
      blank20: "",
    });
    setCurrentBlankIndex(1);
  }, [activeQuestionIndex]);

  const [currentQuestionID, setCurrentQuestionID] = useState(1);
  const [doubleInputNumber, setDoubleInputNumber] = useState(0);
  const [questionLength, setQuestionLength] = useState(1);
  let sentence = "";
  let content = "";
  let currentQuestionOrder = 0;
  console.log("render secound");
  const handleReset = () => {
    setCurrentQuestionID(1);
    setDoubleInputNumber(0);
    setQuestionLength(1);
    currentQuestionOrder = 0;
  };
  const [wrongCounter, setWrongCounter] = useState(1);
  const [twoInputsByKey, setTwoInputByKey] = useState(1);
  const handleSubmit = async () => {
    if (currentQuestionID < activeQuestion.questions.length + 1) {
      const input = qInputs;
      // Get the current question's keywords, input values, and question data
      const currentQuestionObject = activeQuestion.questions.filter(
        (value) => value.id === currentQuestionID
      )[0];

      console.log("curentquestion", currentQuestionID);

      console.log(activeQuestion.questions.length);
      console.log(activeQuestion);
      let currentInput = {};
      console.log(currentQuestionObject);
      // check input box
      if (currentQuestionObject.inputs === 1) {
        currentQuestionOrder = currentQuestionObject.order;
        console.log("input1");
        let currentInput =
          input[`blank${currentQuestionID + doubleInputNumber}`];
        console.log("currant input", input);
        //update id
        if (currentInput) {
          // setCurrentQuestionID((prev) => prev + 1);
          console.log(currentQuestionID);
          // extract current question object
          if (currentQuestionObject.inputMiddle) {
            console.log(
              "input fast found!",
              `${
                currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
              } ... ${
                currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
              }`
            );
            sentence = `${
              currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
            } ... ${
              currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
            }`;
            // content
            content = `${
              currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
            } ${input[`blank${currentQuestionID + doubleInputNumber}`]} ${
              currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
            }`;
          }
          if (currentQuestionObject.inputFirst) {
            console.log(
              "middle input found!",
              `... ${
                currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
              }`
            );
            sentence = `... ${
              currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
            }`;
            //content
            content = `${
              input[`blank${currentQuestionID + doubleInputNumber}`]
            } ${
              currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
            }`;
          }
        }
      }

      const currentInput2 =
        input[`blank${currentQuestionID + doubleInputNumber + 1}`];
      if (currentQuestionObject.inputs === 2) {
        currentQuestionOrder = currentQuestionObject.order;
        let currentInput =
          input[`blank${currentQuestionID + doubleInputNumber}`];

        console.log("input2");

        console.log("doubleinput", doubleInputNumber);

        // update id
        if (currentInput && currentInput2) {
          console.log("input1:", currentInput, "input22:", currentInput2);
          // setCurrentQuestionID((prev) => prev + 1);
          console.log(currentQuestionID);
          // setDoubleInputNumber((prev) => prev + 1);
          //
          console.log(
            "2 input found:",
            `... ${
              currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
            } ... ${
              currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
            }
            `
          );
          sentence = `... ${
            currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
          } ... ${
            currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
          }`;
          // content
          content = `${currentInput} ${
            currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
          } ${currentInput2} ${
            currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
          }
          `;
        }
      }
      // assessment start //
      const quizID = quizData[0].quizid;
      const userID = Cookies.get("id") ? JSON.parse(Cookies.get("id")) : "";
      const userToken = Cookies.get("token")
        ? JSON.parse(Cookies.get("token"))
        : "";
      console.log("sentence", sentence);
      console.log("content", content);
      console.log("id", quizID);
      /// implement
      if (sentence && content) {
        setIsLoading(true);
        // assessment schma
        const AssessmentSchma = {
          userId: userID,
          exerciseId: quizID,
          type: "DIALOGUE",
          sentence: sentence,
          order: currentQuestionOrder,
          answerLetter: [
            {
              content: content.trim(),
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
            // point store
            const points = assessment.data.isNumberPoint;
            console.log("userpoints", points);
            localStorage.setItem("exercisePoints", JSON.stringify(points));
            setClassBoxClass("");
            if (activeQuestion.questions.length === currentQuestionID) {
              // setActiveQuestionIndex(activeQuestionIndex + 1);
              // setIsContinueOpen(true);
              setIsFinish(true);
            }
            //
            else {
              console.log("no more question");
            }
            setWrongCounter(1);

            // update input
            if (currentInput && currentInput2) {
              setTwoInputByKey((prev) => Math.min(prev + 1, 20));
              setCurrentQuestionID((prev) => Math.min(prev + 1, 20));
              setCurrentBlankIndex((prev) => Math.min(prev + 1, 20));
              incrementProgressBar();

              setDoubleInputNumber((prev) => Math.min(prev + 1, 20));
            } else {
              setTwoInputByKey((prev) => Math.min(prev + 1, 20));
              setCurrentBlankIndex((prev) => Math.min(prev + 1, 20));

              setCurrentQuestionID((prev) => Math.min(prev + 1, 20));
            }
            // update input end
            successSound.play();
            setAnswerCorrect(true);
            setIsLoading(false);
          } else {
            // point store
            const points = assessment.data.isNumberPoint;
            console.log("userpoints", points);
            localStorage.setItem("exercisePoints", JSON.stringify(points));
            setClassBoxClass("");
            setAnswerCorrect(false);

            setWrongCounter((prev) => prev + 1);

            if (wrongCounter >= 3) {
              setClassBoxClass("verification_box_add");

              if (activeQuestion.questions.length === currentQuestionID) {
                // setActiveQuestionIndex(activeQuestionIndex + 1);
                // setIsContinueOpen(true);
                setIsFinish(true);
              }
              //
              else {
                console.log("no more question");
              }
              setRightSentence(assessment.data.answerValidation[0].content);
              setIsRightShowBoxOpen("");
              setIsRightShowCloseOpen("");
              setIsFooterOpen("quiz_footer_hide");
              setWrongCounter(1);
              successSound.play();
              console.log("okay for showing next ");
              console.log(
                "right answer:",
                assessment.data.answerValidation[0].content
              );
              // update input
              if (currentInput && currentInput2) {
                setTwoInputByKey((prev) => Math.min(prev + 1, 20));
                setCurrentQuestionID((prev) => Math.min(prev + 1, 20));
                setCurrentBlankIndex((prev) => Math.min(prev + 1, 20));
                incrementProgressBar();

                setDoubleInputNumber((prev) => Math.min(prev + 1, 20));
              } else {
                setTwoInputByKey((prev) => Math.min(prev + 1, 20));
                setCurrentBlankIndex((prev) => Math.min(prev + 1, 20));

                setCurrentQuestionID((prev) => Math.min(prev + 1, 20));
              }
              // update input end
            }
            wrongSound.play();
            setIsLoading(false);

            setRightMultipleAnswer(assessment.data.answerValidation[0].content);
          }
        } catch (error) {
          console.log(error.message);
          if (error.message === "Request failed with status code 401") {
            navigate("/auth/login");
            localStorage.clear();
            Cookies.set("token");
            Cookies.set("id");
          }
        }
      }
      // assessment end //

      //
      if (
        currentBlankIndex === 5 &&
        activeQuestionIndex <= questionsData.length
      ) {
        // You can also add further validation or scoring logic here
        // Move to the next question if available
        // setActiveQuestionIndex(activeQuestionIndex + 1);
        console.log("question not found");
      }
      console.log(activeQuestion.questions.length < currentQuestionID + 1);
    } else {
      console.log("more question not found!");
      navigate(-1);
    }
    // check end
    const inputKeyword = [];
    const [cInputs, setCInputs] = useState([]);
    const [keyCounter, setKeyCounter] = useState(1);
    console.log("render");
  };
  const handleKeyWord = (item) => {
    if (currentQuestionID < activeQuestion.questions.length + 1) {
      const currentQuestionObject = activeQuestion.questions.filter(
        (value) => value.id === currentQuestionID
      )[0];
      console.log(currentBlankIndex);
      setQInputs((prevInputs) => {
        const currentQuestionInputs = { ...prevInputs };
        const inputName = `blank${currentBlankIndex}`;
        const inputName1 = `blank${currentBlankIndex - 1}`;

        console.log(
          "current input",
          currentQuestionInputs[inputName1],
          "current value",
          item
        );

        // Check if the keyword is in the input
        console.log("current inputp index,");
        if (
          currentQuestionInputs[inputName1] === item &&
          currentQuestionObject.inputs === 2
        ) {
          if (currentBlankIndex >= twoInputsByKey + 1) {
            console.log("okay hello i am hceking");
            currentQuestionInputs[inputName1] = "";
            currentQuestionInputs[inputName1 + 1] = "";
            console.log("curent index", currentBlankIndex);
            setCurrentBlankIndex((prev) => prev - 2);
          }
          // Remove the keyword from the input

          console.log(
            "current input",
            currentQuestionInputs[inputName1],
            "current value",
            item
          );
          // setCurrentBlankIndex((prev) => Math.min(prev + 1, 5));
        }
        if (currentQuestionObject.inputs === 2) {
          console.log("2 input found");
          // Add the keyword to the input
          currentQuestionInputs[inputName] = item;
          setCurrentBlankIndex((prev) =>
            Math.min(prev + 1, twoInputsByKey + 1)
          );
          incrementProgressBar();
        } else {
          currentQuestionInputs[inputName] = item;
          incrementProgressBar();
        }

        return currentQuestionInputs; // Return the updated state
      });
      const handleSubmitK = async () => {
        const inputActive = () => {
          const prevInputs = qInputs;
          const currentQuestionInputs = { ...prevInputs };
          const inputName = `blank${currentBlankIndex}`;
          const inputName1 = `blank${currentBlankIndex - 1}`;

          console.log(
            "current input",
            currentQuestionInputs[inputName1],
            "current value",
            item
          );

          // Check if the keyword is in the input
          console.log("current inputp index,");
          if (
            currentQuestionInputs[inputName1] === item &&
            currentQuestionObject.inputs === 2
          ) {
            if (currentBlankIndex >= twoInputsByKey + 1) {
              console.log("okay hello i am hceking");
              currentQuestionInputs[inputName1] = "";
              currentQuestionInputs[inputName1 + 1] = "";
              console.log("curent index", currentBlankIndex);
              setCurrentBlankIndex((prev) => prev - 1);
            }
            // Remove the keyword from the input

            console.log(
              "current input",
              currentQuestionInputs[inputName1],
              "current value",
              item
            );
            // setCurrentBlankIndex((prev) => Math.min(prev + 1, 5));
          }
          if (currentQuestionObject.inputs === 2) {
            console.log("2 input found");
            // Add the keyword to the input
            currentQuestionInputs[inputName] = item;
            setCurrentBlankIndex((prev) =>
              Math.min(prev + 1, twoInputsByKey + 1)
            );
            incrementProgressBar();
          } else {
            currentQuestionInputs[inputName] = item;
            incrementProgressBar();
          }

          return currentQuestionInputs; // Return the updated state
        };
        console.log("inputactive", inputActive());

        if (currentQuestionID < activeQuestion.questions.length + 1) {
          const input = inputActive();
          setQInputs(input);
          console.log("value:", input);
          // Get the current question's keywords, input values, and question data
          const currentQuestionObject = activeQuestion.questions.filter(
            (value) => value.id === currentQuestionID
          )[0];

          console.log("curentquestion", currentQuestionID);

          console.log(activeQuestion.questions.length);
          console.log(activeQuestion);
          let currentInput = {};
          console.log(currentQuestionObject);
          // check input box
          if (currentQuestionObject.inputs === 1) {
            currentQuestionOrder = currentQuestionObject.order;
            console.log("input1");
            let currentInput =
              input[`blank${currentQuestionID + doubleInputNumber}`];
            console.log("currant input", input);
            //update id
            if (currentInput) {
              // setCurrentQuestionID((prev) => prev + 1);
              console.log(currentQuestionID);
              // extract current question object
              if (currentQuestionObject.inputMiddle) {
                console.log(
                  "input fast found!",
                  `${
                    currentQuestionObject.text1
                      ? currentQuestionObject.text1
                      : ""
                  } ... ${
                    currentQuestionObject.text2
                      ? currentQuestionObject.text2
                      : ""
                  }`
                );
                sentence = `${
                  currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
                } ... ${
                  currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
                }`;
                // content
                content = `${
                  currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
                } ${input[`blank${currentQuestionID + doubleInputNumber}`]} ${
                  currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
                }`;
              }
              if (currentQuestionObject.inputFirst) {
                console.log(
                  "middle input found!",
                  `... ${
                    currentQuestionObject.text1
                      ? currentQuestionObject.text1
                      : ""
                  }`
                );
                sentence = `... ${
                  currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
                }`;
                //content
                content = `${
                  input[`blank${currentQuestionID + doubleInputNumber}`]
                } ${
                  currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
                }`;
              }
            }
          }

          const currentInput2 =
            input[`blank${currentQuestionID + doubleInputNumber + 1}`];
          if (currentQuestionObject.inputs === 2) {
            currentQuestionOrder = currentQuestionObject.order;
            let currentInput =
              input[`blank${currentQuestionID + doubleInputNumber}`];

            console.log("input2");

            console.log("doubleinput", doubleInputNumber);

            // update id
            if (currentInput && currentInput2) {
              console.log("input1:", currentInput, "input22:", currentInput2);
              // setCurrentQuestionID((prev) => prev + 1);
              console.log(currentQuestionID);
              // setDoubleInputNumber((prev) => prev + 1);
              //
              console.log(
                "2 input found:",
                `... ${
                  currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
                } ... ${
                  currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
                }
                `
              );
              sentence = `... ${
                currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
              } ... ${
                currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
              }`;
              // content
              content = `${currentInput} ${
                currentQuestionObject.text1 ? currentQuestionObject.text1 : ""
              } ${currentInput2} ${
                currentQuestionObject.text2 ? currentQuestionObject.text2 : ""
              }
              `;
            }
          }
          // assessment start //
          const quizID = quizData[0].quizid;
          const userID = Cookies.get("id") ? JSON.parse(Cookies.get("id")) : "";
          const userToken = Cookies.get("token")
            ? JSON.parse(Cookies.get("token"))
            : "";
          console.log("sentence", sentence);
          console.log("content", content);
          console.log("id", quizID);
          /// implement
          if (sentence && content) {
            setIsLoading(true);
            // assessment schma
            const AssessmentSchma = {
              userId: userID,
              exerciseId: quizID,
              type: "DIALOGUE",
              sentence: sentence,
              order: currentQuestionOrder,
              answerLetter: [
                {
                  content: content.trim(),
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
                setClassBoxClass("");
                if (activeQuestion.questions.length === currentQuestionID) {
                  // setActiveQuestionIndex(activeQuestionIndex + 1);
                  // setIsContinueOpen(true);
                  setIsFinish(true);
                }
                //
                else {
                  console.log("no more question");
                }
                setWrongCounter(1);

                // update input
                if (currentInput && currentInput2) {
                  setTwoInputByKey((prev) => Math.min(prev + 1, 20));
                  setCurrentQuestionID((prev) => Math.min(prev + 1, 20));
                  setCurrentBlankIndex((prev) => Math.min(prev + 1, 20));
                  incrementProgressBar();

                  setDoubleInputNumber((prev) => Math.min(prev + 1, 20));
                } else {
                  setTwoInputByKey((prev) => Math.min(prev + 1, 20));
                  setCurrentBlankIndex((prev) => Math.min(prev + 1, 20));

                  setCurrentQuestionID((prev) => Math.min(prev + 1, 20));
                }
                // update input end
                successSound.play();
                setAnswerCorrect(true);
                setIsLoading(false);
              } else {
                setClassBoxClass("");
                setAnswerCorrect(false);

                setWrongCounter((prev) => prev + 1);

                if (wrongCounter >= 3) {
                  setClassBoxClass("verification_box_add");

                  if (activeQuestion.questions.length === currentQuestionID) {
                    // setActiveQuestionIndex(activeQuestionIndex + 1);
                    // setIsContinueOpen(true);
                    setIsFinish(true);
                  }
                  //
                  else {
                    console.log("no more question");
                  }
                  setRightSentence(assessment.data.answerValidation[0].content);
                  setIsRightShowBoxOpen("");
                  setIsRightShowCloseOpen("");
                  setIsFooterOpen("quiz_footer_hide");
                  setWrongCounter(1);
                  successSound.play();
                  console.log("okay for showing next ");
                  console.log(
                    "right answer:",
                    assessment.data.answerValidation[0].content
                  );
                  // update input
                  if (currentInput && currentInput2) {
                    setTwoInputByKey((prev) => Math.min(prev + 1, 20));
                    setCurrentQuestionID((prev) => Math.min(prev + 1, 20));
                    setCurrentBlankIndex((prev) => Math.min(prev + 1, 20));
                    incrementProgressBar();

                    setDoubleInputNumber((prev) => Math.min(prev + 1, 20));
                  } else {
                    setTwoInputByKey((prev) => Math.min(prev + 1, 20));
                    setCurrentBlankIndex((prev) => Math.min(prev + 1, 20));

                    setCurrentQuestionID((prev) => Math.min(prev + 1, 20));
                  }
                  // update input end
                }
                wrongSound.play();
                setIsLoading(false);

                setRightMultipleAnswer(
                  assessment.data.answerValidation[0].content
                );
              }
            } catch (error) {
              console.log(error.message);
              if (error.message === "Request failed with status code 401") {
                navigate("/auth/login");
                localStorage.clear();
                Cookies.set("token");
                Cookies.set("id");
              }
            }
          }
          // assessment end //

          //
          if (
            currentBlankIndex === 5 &&
            activeQuestionIndex <= questionsData.length
          ) {
            // You can also add further validation or scoring logic here
            // Move to the next question if available
            // setActiveQuestionIndex(activeQuestionIndex + 1);
            console.log("question not found");
          }
          console.log(activeQuestion.questions.length < currentQuestionID + 1);
        } else {
          console.log("more question not found!");
          navigate(-1);
        }
        // check end
        const inputKeyword = [];
        const [cInputs, setCInputs] = useState([]);
        const [keyCounter, setKeyCounter] = useState(1);
        console.log("render");
      };

      handleSubmitK();
    }
  };
  const handleNext = () => {
    setQuestionLength((prev) => Math.min(prev + 1, 20));
    if (questionLength > questionsData.length) {
      console.log("question not found!");
    }
    setCurrentQuestionID(1);
    setDoubleInputNumber(0);
    setIsContinueOpen(false);

    if (
      activeQuestion.questions.length < currentQuestionID + 1 &&
      questionLength < questionsData.length
    ) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    } else {
      console.log("more question not found");
      setIsContinueOpen(false);
      setIsFinishTestOpen(true);
    }
  };
  const handleFinish = () => {
    console.log("finish");
    navigate(-1);
  };
  const HandleWrongClose = () => {
    setClassBoxClass("");

    setIsRightShowBoxOpen("hide-r-box ");
    setIsRightShowCloseOpen("hide-r-box");
    setIsFooterOpen("");
  };

  return (
    <div className="dia-home w-100 min-h-100 d-flex flex-column  align-items-center justify-content-center">
      {/* Header here */}

      {/* Dialouge here */}
      <Modal show={true} onHide={toggleDialouge} fullscreen={true}>
        <div>
          {" "}
          <div className="w-100">
            <QuizProgressBar
              progress={progress}
              totalQuestions={activeQuestion.inputs}
            />
          </div>
        </div>
        <div className="w-100 d-flex flex-column align-items-center justify-content-start gap-4 overflow-y-auto ">
          <div className="w-100 d-flex flex-column  gap-4 align-items-center justify-content-start ">
            {/* Dialogue title here */}
            {/* <div className="dialogue-title">
              <h5 className="text-white fw-medium ">
                Ecoutez et completez ce dialogue
              </h5>
            </div> */}
            {/* Quiz questions here */}
            <div className="d-quiz-container d-flex flex-column align-items-center justify-content-start rounded-3 ">
              <div className="w-100 d-flex align-items-center justify-content-center py-3 ">
                <button
                  onClick={playAudio}
                  className="d-flex align-items-center justify-content-center rounded-circle border-0 p-2 audio-btn"
                >
                  <HiSpeakerWave size={20} />
                </button>
              </div>
              {/* Quiz questions main div */}
              <div className="w-100 d-flex flex-column align-items-center justify-content-start overflow-y-auto d-quiz-questions-container px-lg-4 px-1">
                {activeQuestion.questions.map((item, index) => (
                  <Question
                    key={index}
                    icon={item.icon}
                    inputFirst={item?.inputFirst}
                    inputMiddle={item?.inputMiddle}
                    input1Name={item?.input1Name}
                    input2Name={item?.input2Name}
                    text1={item?.text1}
                    text2={item?.text2}
                    inputs={item?.inputs}
                    state={qInputs}
                    iconRight={index % 2 == 0 || index == 0}
                  />
                ))}
              </div>
              {/* Keywords div here */}
            </div>
            {/* <div className="d-flex align-items-center justify-content-between next-prev-btns">
              <button
                onClick={goToPreviousQuestion}
                disabled={activeQuestionIndex === 0}
                className="p-3 rounded-circle bg-warning border-0 text-white fw-semibold navigation-btn"
              >
                Préc
              </button>
              <button
                onClick={goToNextQuestion}
                disabled={activeQuestionIndex === questionsData.length - 1}
                className="p-3 rounded-circle bg-warning border-0 text-white fw-semibold navigation-btn"
              >
                Suiv
              </button>
            </div> */}
          </div>
          {/* verify button here */}
        </div>
        <div className=" my-4 pb-2 keywords-container">
          <div className="w-100 d-flex flex-column align-items-center justify-content-start   px-3 py-1">
            {activeQuestionKeyWords?.length > 0 ? (
              <p className="fw-semibold">Compléter avec ces mots :</p>
            ) : (
              <button
                className="text-white w-100 rounded-2 py-2 bg-warning  border-0 fw-semibold "
                onClick={() => {
                  handleReset();
                  setActiveQuestionKeyWords(activeQuestion.keywords);
                  setQInputs({
                    blank1: "",
                    blank2: "",
                    blank3: "",
                    blank4: "",
                    blank5: "",
                    blank6: "",
                    blank7: "",
                    blank8: "",
                    blank9: "",
                    blank10: "",
                    blank11: "",
                    blank12: "",
                    blank13: "",
                    blank14: "",
                    blank15: "",
                    blank16: "",
                    blank17: "",
                    blank18: "",
                    blank19: "",
                    blank20: "",
                  });
                  setCurrentBlankIndex(1);
                  setProgress(0);
                }}
              >
                {" "}
                Renitialiser Préc
              </button>
            )}

            <div className="w-100 d-flex flex-wrap  align-items-center justify-content-center gap-2">
              {activeQuestionKeyWords?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleKeyWord(item)}
                  className=" border-0  py-2 px-3  fw-semibold  keyword-option"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <ErrorModal open={errorModal} setOpen={handleErrorModalToggle} />

        {/* QUIZ FOOTER */}
        <div
          className={`quiz_footer  ${removeSmPadding} ${
            answerCorrect === true || successAlert === true
              ? "correct"
              : answerCorrect === false
              ? "wrong"
              : ""
          }`}
        >
          <div
            className={`wrong-close ${isRightShowCloseOpen}`}
            onClick={HandleWrongClose}
          >
            <AiOutlineClose className="icon" />
          </div>
          <div className={`container verification_box ${footerBoxClass}`}>
            <div className="quiz_avatar_box">
              {answerCorrect === null ? (
                <>
                  <div className="avatar_img_cont">
                    <img
                      src={"/assets/quiz_avatar.png"}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="quiz_avatar_ques">
                    {quizData[currentLesson].questions[currentQuestion]
                      .questionText === undefined ||
                    quizData[currentLesson].questions[currentQuestion]
                      .format === "wordsMatching" ? (
                      <p>{quizData[0] ? quizData[0].title : ""} </p>
                    ) : (
                      <span>
                        {
                          quizData[currentLesson].questions[currentQuestion]
                            .questionText
                        }
                      </span>
                    )}
                  </div>
                </>
              ) : answerCorrect || successAlert ? (
                <>
                  <div className="avatar_img_cont">
                    <img
                      src={"/assets/quiz_avatar_2.png"}
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
                      src={"/assets/quiz_avatar_3.png"}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="quiz_avatar_ques">
                    <div className="wrong_text">Oups ! Mauvaise réponse !</div>
                  </div>
                </>
              )}
            </div>

            <div className={`${isOpenQuizFooter} `}>
              {" "}
              {true ? (
                <button
                  className="verify_button "
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <div className="d-flex">
                    {isFinish ? "Continue" : "Vérifier"}
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
                  </div>
                </button>
              ) : currentQuestionID < 6 ? (
                <button
                  className="next_button"
                  onClick={() => {
                    isContinueOpen ? handleNext() : handleFinish();
                  }}
                >
                  Continue
                </button>
              ) : (
                <div className="test-finished-message">
                  L'exercice est fini ! Bravo!
                </div>
              )}
            </div>
            <div
              className={`mx-2 w-md-100 bg-white show-r-box ${isRightShowRightBoxOpen}`}
            >
              <div className="w-100 py-2 ">
                <h4 className="md-py-3 header">
                  <FiAlertOctagon />
                  Vous avez donné la mauvaise réponse 3 fois!
                </h4>
                <p className="">
                  <div className=" ">
                    <p className="d-inline-block right-sentence mt-3">
                      <div className="d-inline-block text-black">
                        {" "}
                        <GiCheckMark /> Bonne réponse:
                      </div>{" "}
                      &nbsp;
                      {rightSentence}
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="quiz_footer">
        <div className="container verification_box">
          <div className="quiz_avatar_box">
            <div className="avatar_img_cont">
              <img src="assets/quiz_avatar.png" alt="" className="img-fluid" />
            </div>
            <div className="quiz_avatar_ques">
              <p>
                Sélectionnez <span>“la femme”</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FiChevronLeft } from "react-icons/fi";
import { BiSolidUser } from "react-icons/bi";
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
          <DiAndroid className="text-warning flex-shrink-0 " size={30} />
        );
      } else {
        question.icon = <BiSolidUser className="text-warning" size={30} />;
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

  const handleKeyWord = (item) => {
    const currentQuestionInputs = qInputs;

    const newInputs = { ...currentQuestionInputs };
    const inputName = `blank${currentBlankIndex}`;

    newInputs[inputName] = item;

    const nextBlankIndex = Math.min(currentBlankIndex + 1, 5);
    setCurrentBlankIndex(nextBlankIndex);
    setQInputs(newInputs);

    const filteredKeywords = activeQuestionKeyWords?.filter(
      (keyword) => keyword !== item
    );
    setActiveQuestionKeyWords(filteredKeywords);
    incrementProgressBar();
  };

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
    });
    setCurrentBlankIndex(1);
  }, [activeQuestionIndex]);

  const [currentQuestionID, setCurrentQuestionID] = useState(1);
  const [doubleInputNumber, setDoubleInputNumber] = useState(0);
  const [questionLength, setQuestionLength] = useState(1);
  let sentence = "";
  let content = "";
  let currentQuestionOrder = 0;

  const handleReset = () => {
    setCurrentQuestionID(1);
    setDoubleInputNumber(0);
    setQuestionLength(1);
    currentQuestionOrder = 0;
  };
  const handleSubmit = async () => {
    console.log("question length:", questionsData.length);
    const input = qInputs;
    // Get the current question's keywords, input values, and question data
    const currentQuestionObject = activeQuestion.questions.filter(
      (value) => value.id === currentQuestionID
    )[0];
    console.log(activeQuestion);
    let currentInput = {};
    console.log(currentQuestionObject);
    // check input box
    if (currentQuestionObject.inputs === 1) {
      currentQuestionOrder = currentQuestionObject.order;
      console.log("input1");
      const currentInput =
        input[`blank${currentQuestionID + doubleInputNumber}`];
      console.log(currentInput);
      //update id
      if (currentInput) {
        setCurrentQuestionID((prev) => prev + 1);
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
          } ${currentQuestionObject.text1 ? currentQuestionObject.text1 : ""}`;
        }
      }
    }
    if (currentQuestionObject.inputs === 2) {
      currentQuestionOrder = currentQuestionObject.order;

      console.log("input2");

      console.log("doubleinput", doubleInputNumber);
      const currentInput =
        input[`blank${currentQuestionID + doubleInputNumber}`];
      const currentInput2 =
        input[`blank${currentQuestionID + doubleInputNumber + 1}`];

      // update id
      if (currentInput && currentInput2) {
        console.log("input1:", currentInput, "input22:", currentInput2);
        setCurrentQuestionID((prev) => prev + 1);
        console.log(currentQuestionID);
        setDoubleInputNumber((prev) => prev + 1);
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
          successSound.play();
          setIsLoading(false);
        } else {
          wrongSound.play();
          setIsLoading(false);

          console.log(
            "right answer:",
            assessment.data.answerValidation[0].content
          );
          setRightMultipleAnswer(assessment.data.answerValidation[0].content);
        }
      } catch (error) {
        console.log(error.message);
        if (error.message === "Request failed with status code 401") {
          navigate("/auth/login");
        }
      }
    }
    // assessment end //
    //
    if (activeQuestionIndex < questionsData.length - 1) {
      // You can also add further validation or scoring logic here
      // Move to the next question if available
      // setActiveQuestionIndex(activeQuestionIndex + 1);
    }
    console.log(activeQuestion.questions.length < currentQuestionID + 1);
    if (activeQuestion.questions.length < currentQuestionID + 1) {
      // setActiveQuestionIndex(activeQuestionIndex + 1);
      setIsContinueOpen(true);
    }
    //
  };
  // check end
  const handleNext = () => {
    setQuestionLength((prev) => prev + 1);
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
    navigate("/lessons/section");
  };

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="w-100 min-h-100 d-flex flex-column  align-items-center justify-content-center"
    >
      {/* Dialouge here */}
      <Modal show={true} onHide={toggleDialouge} fullscreen={true}>
        <div
          style={{ maxHeight: "100vh" }}
          className="w-100 d-flex flex-column align-items-center justify-content-start gap-4 overflow-y-auto "
        >
          {/* Header here */}
          <div className="w-100">
            <QuizProgressBar
              progress={progress}
              totalQuestions={activeQuestion.inputs}
            />
          </div>

          <div className="w-100 d-flex flex-column  gap-4 align-items-center justify-content-start ">
            {/* Dialogue title here */}
            <div className="dialogue-title">
              <h5 className="text-white fw-medium ">
                Ecoutez et completez ce dialogue
              </h5>
            </div>
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
              <div className="w-100 py-4 px-2">
                <div className="w-100 d-flex flex-column align-items-center justify-content-start gap-1 keywords-container px-3 py-1">
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
                        });
                        setCurrentBlankIndex(1);
                        setProgress(0);
                      }}
                    >
                      {" "}
                      Renitialiser Préc
                    </button>
                  )}

                  <div className="w-100 d-flex flex-wrap  align-items-center justify-content-start gap-2">
                    {activeQuestionKeyWords?.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleKeyWord(item)}
                        className="rounded-2 border-0  py-2 px-3 text-white fw-semibold  bg-orange-seconday"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
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
          <div className="next-prev-btns d-flex justify-content-start align-items-center mb-4 ">
            <button
              onClick={() => {
                isContinueOpen
                  ? handleNext()
                  : isFinishTestOpen
                  ? handleFinish()
                  : handleSubmit();
              }}
              className="drawer-close-btn"
            >
              {isContinueOpen
                ? "Continue"
                : isFinishTestOpen
                ? "Finish Test"
                : "Vérifier"}
              {isLoading && (
                <div className="px-1 d-inline-block">
                  <div class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
        <ErrorModal open={errorModal} setOpen={handleErrorModalToggle} />
      </Modal>
    </div>
  );
};

export default Home;

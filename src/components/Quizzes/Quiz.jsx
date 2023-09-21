import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import close_icon from "../../assets/close_icon_2.png";
import quiz_avatar from "../../assets/quiz_avatar.png";
import quiz_avatar_2 from "../../assets/quiz_avatar_2.png";
import quiz_avatar_3 from "../../assets/quiz_avatar_3.png";
import {
  MultipleChoiceQuestion,
  MatchWordsQuestion,
  Lesson,
} from "./components/index";
import "./QuizPage.css";
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: 1,
  },
  {
    question: "What is the full form of USA?",
    options: ["America", "United States", "United States of America", "U.S.A"],
    correctAnswer: 2,
  },
  {
    question: "Who is the founder of Tesla?",
    options: ["Elon Musk", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    correctAnswer: 0,
  },

  {
    question: "Who is the f of Tesla?",
    options: ["Elon usk", "Bill Gaes", "Stev Jobs", "Mark Zuckeberg"],
    correctAnswer: 1,
  },
  {
    question: "What is my name?",
    options: ["Elon usk", "Bill Gaes", "Stev Jobs", "Mark Zuckeberg"],
    correctAnswer: 2,
  },
  // Add more questions here
];
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [answerStatus, setAnswerStatus] = useState("");
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
  };

  const handleVerify = () => {
    console.log(progress);
    console.log(quizData[currentQuestion]);
    const isCorrect =
      selectedAnswer === quizData[currentQuestion].correctAnswer;
    if (isCorrect) {
      setAnswerStatus("correct");
      setProgress((prevProgress) => prevProgress + 1);
    } else {
      setAnswerStatus("incorrect");
    }
  };

  const handleNext = () => {
    setSelectedAnswer(-1);
    setAnswerStatus("");
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      // Quiz is finished
      setAnswerStatus("...");
      setQuizFinished(true);
    }
  };

  const renderOptions = () => {
    return quizData[currentQuestion].options.map((option, index) => (
      <div
        key={index}
        className={`option ${selectedAnswer === index ? "selected" : ""}`}
        onClick={() => handleAnswerSelect(index)}
      >
        <div
          className={
            selectedAnswer === index
              ? "circle_checkbox active"
              : "circle_checkbox"
          }
        ></div>
        {option}
      </div>
    ));
  };

  return (
    <div className="quiz_container">
      {/* QUIZ HEADER */}
      <div className="quiz_header">
        <button className="close_btn">
          <img src={close_icon} alt="" className="img-fluid" />
        </button>
        <div className="progress_bar">
          <div
            className="progress_track"
            style={{
              "--progress-width": `${(progress / quizData.length) * 100}%`,
            }}
          ></div>
        </div>
        <button className="setting_btn">
          <IoSettingsOutline />
        </button>
      </div>

      {/* QUIZ BODY */}
      <div className="quiz_body">
        <div className="question">{quizData[currentQuestion].question}</div>
        <div className="options">{renderOptions()}</div>
      </div>

      {/* QUIZ FOOTER */}
      <div
        className={
          answerStatus === "" || answerStatus === "..."
            ? "quiz_footer"
            : answerStatus === "correct"
            ? "quiz_footer correct"
            : "quiz_footer wrong"
        }
      >
        <div className="container verification_box">
          <div className="quiz_avatar_box">
            {answerStatus === "" || answerStatus === "..." ? (
              <>
                <img src={quiz_avatar} alt="" className="img-fluid" />
                <div className="quiz_avatar_ques">
                  Sélectionnez <span>“la femme”</span>
                </div>
              </>
            ) : answerStatus === "correct" ? (
              <>
                <img src={quiz_avatar_2} alt="" className="img-fluid" />
                <div className="quiz_avatar_ques">
                  <div className="cong_text">Bonne réponse</div>
                </div>
              </>
            ) : (
              <>
                <img src={quiz_avatar_3} alt="" className="img-fluid" />
                <div className="quiz_avatar_ques">
                  <div className="wrong_text">Mauvaise réponse</div>
                </div>
              </>
            )}
          </div>

          {answerStatus === "" ? (
            <button className="verify_button" onClick={handleVerify}>
              Vérifier
            </button>
          ) : !quizFinished ? (
            <button className="next_button" onClick={handleNext}>
              Continuer
            </button>
          ) : (
            <div className="test-finished-message">Test Finished!</div>
          )}

          {/* {!quizFinished ? (
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <div className="test-finished-message">Test Finished!</div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

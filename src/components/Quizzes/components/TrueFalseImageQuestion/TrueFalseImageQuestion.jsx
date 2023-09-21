import React from "react";

const TrueFalseImageQuestion = ({
  questionText,
  imageUrl,
  onAnswerSelect,
  selectedAnswer,
}) => {
  return (
    <div className="true_false_image_question">
      <div className="box">
        <img
          src={imageUrl}
          alt="Question"
          className="question-image img-fluid"
        />
      </div>
      <div className="true_false_btns">
        <button
          className={`option ${selectedAnswer && "active"}`}
          onClick={() => onAnswerSelect(true)}
        >
          True
        </button>
        <button
          className={`option ${!selectedAnswer && "active"}`}
          onClick={() => onAnswerSelect(false)}
        >
          False
        </button>
      </div>
    </div>
  );
};

export default TrueFalseImageQuestion;

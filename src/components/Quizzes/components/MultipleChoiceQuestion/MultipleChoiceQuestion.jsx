// MultipleChoiceQuestion.js
import React from "react";

const MultipleChoiceQuestion = ({
  options,
  selectedAnswer,
  onAnswerSelect,
  rightMultipleAnswer,
}) => {
  console.log("right multiple answer", rightMultipleAnswer);
  return (
    <div className="multiple_choice_question">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${selectedAnswer === index ? "selected" : ""}
          ${option === rightMultipleAnswer ? "selected-right" : ""}
          
          `}
          onClick={() => onAnswerSelect(index)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;

import React from "react";

const ImageMultipleChoiceQuestion = ({
  options,
  selectedAnswer,
  onAnswerSelect,
  rightMultipleAnswer,
}) => {
  return (
    <div className="image_multiple_choice_question">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option img_box ${
            selectedAnswer === index ? "selected" : ""
          }
          ${option.text === rightMultipleAnswer ? "selected-right" : ""}
          
          `}
          onClick={() => onAnswerSelect(index)}
        >
          <img src={option.imageURL} alt={`Option ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageMultipleChoiceQuestion;

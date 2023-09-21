import "./FillInBlankQuestion.css";

const FillInBlankQuestion = ({
  questionText,
  options,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <div className="fill_in_blank_question">
      <div className="fill_in_blank-options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`fill_in_blank_option ${
              selectedAnswer === option ? "selected" : ""
            }`}
            onClick={() => onAnswerSelect(option)}
          >
            <div className="circle"></div>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FillInBlankQuestion;

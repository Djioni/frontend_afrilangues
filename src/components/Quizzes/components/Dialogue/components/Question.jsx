import React from "react";

const Question = ({
  iconRight = true,
  icon,
  inputs,
  inputFirst = false,
  inputMiddle = false,
  input1Name,
  input2Name,
  text1,
  text2,
  state,
}) => {
  const renderQuestion = () => {
    if (inputs === 1) {
      return (
        <div
          className={`w-100 dia-q  d-flex ${
            iconRight
              ? "flex-row justify-content-between"
              : "flex-row-reverse justify-content-end"
          } align-items-center py-4 px-2 rounded-2 shadow-lg question my-2`}
        >
          {inputFirst && (
            <div className="d-flex  align-items-center justify-content-start gap-1">
              <input
                name={input1Name}
                value={state[input1Name]}
                readOnly
                type="text"
              />
              <p>{text1}</p>
            </div>
          )}
          {!inputFirst && !inputMiddle && (
            <div className="d-flex  align-items-center justify-content-start gap-1">
              <p>{text1}</p>
              <input
                name={input1Name}
                value={state[input1Name]}
                readOnly
                type="text"
              />
            </div>
          )}
          {!inputFirst && inputMiddle && (
            <div className="d-flex align-items-center justify-content-start gap-1">
              <p>{text1}</p>
              <input
                name={input1Name}
                value={state[input1Name]}
                readOnly
                type="text"
              />
              <p>{text2}</p>
            </div>
          )}
          {icon}
        </div>
      );
    } else if (inputs === 2) {
      return (
        <div
          className={`dia-q w-100 d-flex ${
            iconRight
              ? "flex-row justify-content-between"
              : "flex-row-reverse justify-content-end"
          } align-items-center py-4 px-2 rounded-2 shadow-lg question my-2`}
        >
          <div className="d-flex flex-wrap align-items-center justify-content-start gap-1">
            <input
              name={input1Name}
              value={state[input1Name]}
              readOnly
              type="text"
            />
            <p>{text1}</p>
            <input
              name={input2Name}
              value={state[input2Name]}
              readOnly
              type="text"
            />
            <p>{text2}</p>
          </div>

          {icon}
        </div>
      );
    } else {
      return (
        <div
          className={`w-100 d-flex ${
            iconRight
              ? "flex-row justify-content-between"
              : "flex-row-reverse justify-content-end"
          } align-items-center py-4 px-2 rounded-2 shadow-lg question my-2`}
        >
          <p>{text1}</p>
          {icon}
        </div>
      );
    }
  };

  return renderQuestion();
};

export default Question;

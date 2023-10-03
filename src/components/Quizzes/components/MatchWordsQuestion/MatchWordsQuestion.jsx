import React, { useState } from "react";
import "./MatchWordsQuestion.css";

const MatchWordsQuestion = ({
  leftWords,
  rightWords,
  onAnswerSelect,
  currentQuestionData,
  verifyCallback,
  setSelectedWordMatchingAnswer,
  selectedWordMatchingAnswer,
  disableRightIndex,
  disableLeftIndex,
  wrongRightIndex,
  wrongLeftIndex,
}) => {
  console.log("leftindex", wrongLeftIndex); // disableLeftIndex will be like [0,1] and more
  console.log("rightindex", wrongRightIndex); // disableRightIndex will be like [0,1] and more

  const isLeftDisabled = (leftIndex) => disableLeftIndex.includes(leftIndex);
  const isRightDisabled = (rightIndex) =>
    disableRightIndex.includes(rightIndex);

  const isRightWrongOption = (rightIndex) =>
    wrongRightIndex.includes(rightIndex);

  const isLeftWrongOption = (rightIndex) => wrongLeftIndex.includes(rightIndex);

  const handlePairSelect = (leftIndex, rightIndex, e) => {
    console.log("event", e.classList);
    if (isLeftDisabled(leftIndex)) {
      // If the left option is disabled, do nothing
      return;
    }

    const existingPairIndex = selectedWordMatchingAnswer.findIndex(
      (pair) => pair.left === leftIndex
    );

    if (existingPairIndex !== -1) {
      // If the option is already selected, deselect it
      setSelectedWordMatchingAnswer((prevSelectedPairs) => {
        const updatedSelectedPairs = [...prevSelectedPairs];
        const rightIndex = updatedSelectedPairs[existingPairIndex].right;

        // Deselect the right option if it was previously selected
        if (rightIndex !== null) {
          const rightPairIndex = updatedSelectedPairs.findIndex(
            (pair) => pair.right === rightIndex
          );
          if (rightPairIndex !== -1) {
            updatedSelectedPairs.splice(rightPairIndex, 1);
          }
        }

        // Remove the left option from the selected pairs
        updatedSelectedPairs.splice(existingPairIndex, 1);
        return updatedSelectedPairs;
      });
    } else {
      // If the option is not selected and not disabled, add it
      setSelectedWordMatchingAnswer((prevSelectedPairs) => [
        ...prevSelectedPairs,
        { left: leftIndex, right: null },
      ]);
    }
  };

  const handleRightSelect = (rightIndex) => {
    if (isRightDisabled(rightIndex)) {
      // If the right option is disabled, do nothing
      return;
    }

    const unmatchedPairIndex = selectedWordMatchingAnswer.findIndex(
      (pair) => pair.right === null
    );

    if (unmatchedPairIndex !== -1) {
      // Check if the right option is already selected, deselect it
      if (selectedWordMatchingAnswer[unmatchedPairIndex].right === rightIndex) {
        setSelectedWordMatchingAnswer((prevSelectedPairs) => {
          const updatedSelectedPairs = [...prevSelectedPairs];
          updatedSelectedPairs[unmatchedPairIndex].right = null;
          return updatedSelectedPairs;
        });
      } else {
        // If the right option is not selected, select it
        setSelectedWordMatchingAnswer((prevSelectedPairs) => {
          const updatedSelectedPairs = [...prevSelectedPairs];
          updatedSelectedPairs[unmatchedPairIndex].right = rightIndex;
          return updatedSelectedPairs;
        });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      {" "}
      <div className="match_words_question">
        <div className="left_column">
          {leftWords.map((word, leftIndex) => (
            <div
              key={leftIndex}
              className={`word_option ${
                isLeftDisabled(leftIndex) ? "disabled correntoption" : "" // Add a disabled class for styling
              }
        ${isLeftWrongOption(leftIndex) ? " " : ""}
        ${
          selectedWordMatchingAnswer.some((pair) => pair.left === leftIndex)
            ? "selected"
            : ""
        } `}
              onClick={(e) =>
                handlePairSelect(
                  leftIndex,
                  selectedWordMatchingAnswer.length,
                  e
                )
              }
            >
              {word}
            </div>
          ))}
        </div>
        <div className="right_column">
          {rightWords.map((word, rightIndex) => (
            <div
              key={rightIndex}
              className={`word_option ${
                isRightDisabled(rightIndex) ? " correntoption" : "" // Add a disabled class for styling
              }${isRightWrongOption(rightIndex) ? " " : ""} ${
                selectedWordMatchingAnswer.some(
                  (pair) => pair.right === rightIndex
                )
                  ? "selected "
                  : ""
              }`}
              onClick={() => handleRightSelect(rightIndex)}
              id={`${isRightDisabled(rightIndex) ? " " : ""}`}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchWordsQuestion;

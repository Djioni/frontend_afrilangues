import React, { useEffect, useState } from "react";
import "./MatchWordsQuestion.css";
import { API_URL } from "../../../../api";
import axios from "axios";

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
  handleVerify,
  leftAudio,
}) => {
  let sentence = { text: "text", audio: "" };
  console.log("leftindex", wrongLeftIndex); // disableLeftIndex will be like [0,1] and more
  console.log("rightindex", wrongRightIndex); // disableRightIndex will be like [0,1] and more
  console.log("disabler", disableRightIndex);
  const isLeftDisabled = (leftIndex) => disableLeftIndex.includes(leftIndex);
  const isRightDisabled = (rightIndex) =>
    disableRightIndex.includes(rightIndex);

  console.log(sentence);
  const [leftOption, setLeftOption] = useState("");
  const [rightOption, setRightOption] = useState("");
  const [selectedLeftWord, setSelectedLeftWord] = useState("");
  const [selectedRightWord, setSelectedRightWord] = useState("");
  let leftop = "";
  let rightop = "";
  const handleOptionLeft = (value, indexleft) => {
    const allLeftIndex = disableLeftIndex;
    if (allLeftIndex.includes(indexleft)) {
      console.log("word found.............");
      sessionStorage.setItem("eMatchLeftSelectedOption", "");
      setSelectedLeftWord("");
    } else {
      if (indexleft === 0 || indexleft) {
        setSelectedRightWord("");
      }
      // set left selected word in local storage
      sessionStorage.setItem(
        "eMatchLeftSelectedOption",
        JSON.stringify(indexleft)
      );
      const eMatchLeftSelectedOption = JSON.parse(
        sessionStorage.getItem("eMatchLeftSelectedOption")
      );
      if (eMatchLeftSelectedOption || eMatchLeftSelectedOption == 0) {
        leftop = JSON.parse(eMatchLeftSelectedOption);
      }
    }
  };
  const handleOptionRight = (value, inlexright) => {
    const allLeftIndex = disableRightIndex;
    /// if not right anser
    // get right option data and show
    const eMatchLeftSelectedOption = JSON.parse(
      sessionStorage.getItem("eMatchLeftSelectedOption")
    );
    if (eMatchLeftSelectedOption || eMatchLeftSelectedOption === 0) {
      leftop = JSON.parse(eMatchLeftSelectedOption);
    }
    rightop = inlexright;
  };
  useEffect(() => {
    // empty ematch left selected word
    sessionStorage.setItem("eMatchLeftSelectedOption", "");
  }, []);
  const [leftIndex, setLeftIndex] = useState(null);
  const handleOption = (word) => {
    setLeftIndex(leftop);
    const leftWord = leftWords.filter((value, index) => {
      if (index === leftop) return value;
    });
    if (leftWord[0]) {
      setSelectedLeftWord(leftWord[0]);
      console.log("sleft word", selectedLeftWord);
      // handle right just word
      const rightWord = rightWords.filter((value, index) => {
        if (index === rightop) return value;
      });
      if (rightWord[0]) {
        setSelectedRightWord(rightWord[0]);
        console.log("right word", rightWord[0]);
      }
    }
    console.log("clidked", leftIndex, rightop, "left value", leftWord);
    console.log("words");
    if (
      (leftIndex === 0 && rightop === 0) ||
      (leftIndex && rightop) ||
      (leftIndex == 0 && rightop) ||
      (rightop === 0 && leftIndex)
    ) {
      handleVerify(leftIndex, rightop);
      // leftop = "";
      // rightop = "";
    }
  };

  const isRightWrongOption = (rightIndex) =>
    wrongRightIndex.includes(rightIndex);

  const isLeftWrongOption = (rightIndex) => wrongLeftIndex.includes(rightIndex);

  const handlePairSelect = (leftIndex, rightIndex, e) => {
    console.log("left", leftIndex);
    if (isLeftDisabled(leftIndex)) {
      // If the left option is disabled, do nothing
      return;
    }

    const existingPairIndex = selectedWordMatchingAnswer.findIndex(
      (pair) => pair.left === leftIndex
    );

    if (existingPairIndex !== -1) {
      console.log("fdfdf", leftIndex);
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
          if (rightPairIndex == -1) {
            console.log("paire updated..............");
          } else {
          }
        }

        // Remove the left option from the selected pairs
        updatedSelectedPairs.splice(existingPairIndex, 1);
        console.log("selected paires", updatedSelectedPairs);
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

  // audio control
  console.log("left audio", leftAudio);
  let currentAudioURL = "";

  const changeAudioID = (word) => {
    const currentLeftWord = leftAudio.filter((item) => item.text === word);

    if (currentLeftWord[0]) {
      currentAudioURL = currentLeftWord[0].audio[0].media;
    }
  };
  const audioPlay = () => {
    console.log("currentid:");
    console.log("hellllllllfldlfld");
    const audio = document.getElementById("audioElement");
    if (audio && currentAudioURL) {
      audio.src = `${API_URL}/mediaObject/download/${currentAudioURL}`;

      audio.load();
      audio.currentTime = 0; // Reset playback to the beginning
      audio.play(); // Play the audio
    }
    console.log("word", word);
    const currentLeftWord = leftAudio.filter((item) => item.text === word);
    currentAudioURL = "fdf";
    console.log("currentleftword", currentLeftWord);
    // if (currentLeftWord[0]) {
    //   currentAudioURL = currentLeftWord[0].audio[0].media;
    //   console.log("id", currentAudioURL);
    //   const audio = document.getElementById("audioElement");
    //   if (audio) {
    //     audio.play();
    //     //   if (!isPlaying) {
    //     //     audio.play();
    //     //   } else {
    //     //     audio.pause();
    //     //   }
    //     //   setIsPlaying(!isPlaying);
    //   }
    // }
  };
  useEffect(() => {
    const audio = document.getElementById("audioElement");
    if (audio && currentAudioURL) {
      audio.load(); // Reload the audio element when audioSrc changes
    }
  }, [currentAudioURL]);
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      {" "}
      <div className="match_words_question">
        <audio id="audioElement" controls>
          <source
            src={`${API_URL}/mediaObject/download/${currentAudioURL}`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        <div className="left_column">
          {leftWords.map((word, leftIndex) => (
            <div
              key={leftIndex}
              className={`word_option ${
                isLeftDisabled(leftIndex) ? "disabled correntoption " : "" // Add a disabled class for styling
              }
        ${isLeftWrongOption(leftIndex) ? " " : ""}
        ${word === selectedLeftWord ? "selected" : ""}
        ${
          selectedWordMatchingAnswer.some((pair) => pair.left === leftIndex)
            ? "selected"
            : ""
        } `}
              onClick={(e) => {
                changeAudioID(word);
                handleOptionLeft(word, leftIndex);
                handleOption();
                audioPlay();

                handlePairSelect(
                  leftIndex,
                  selectedWordMatchingAnswer.length,
                  e
                );
              }}
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
                isRightDisabled(rightIndex) ? "correntoption" : "" // Add a disabled class for styling
              }${isRightWrongOption(rightIndex) ? " " : ""}
              
        ${word === selectedRightWord ? "selected" : ""}
            
              
              ${
                selectedWordMatchingAnswer.some(
                  (pair) => pair.right === rightIndex
                )
                  ? "selected "
                  : ""
              }`}
              onClick={() => {
                handleOptionRight(word, rightIndex);
                handleOption();
                handleRightSelect(rightIndex);
              }}
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

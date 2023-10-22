// MultipleChoiceQuestion.js
import React, { useEffect, useState } from "react";
import speaker_icon from "../../../../assets/speaker-icon.png";
import { API_URL } from "../../../../api";
const MultipleChoiceQuestion = ({
  options,
  selectedAnswer,
  onAnswerSelect,
  rightMultipleAnswer,
  sentence,
}) => {
  console.log("right multiple answer", sentence);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const audio = document.getElementById("audioElement");
    if (audio) {
      audio.load(); // Reload the audio element when audioSrc changes
    }
  }, [sentence]);

  const audioPlay = () => {
    const audio = document.getElementById("audioElement");
    if (audio) {
      audio.play();
      //   if (!isPlaying) {
      //     audio.play();
      //   } else {
      //     audio.pause();
      //   }
      //   setIsPlaying(!isPlaying);
    }
  };
  return (
    <div>
      <div className="multiple_choice_question">
        <div>
          <div className="audio_container">
            <audio id="audioElement" controls key={"fdf"}>
              <source
                src={`${API_URL}/mediaObject/download/${
                  sentence.audio[0] ? sentence.audio[0].media : ""
                }`}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>

            <div className="audio_box_icon d-flex justify-content-start mb-3">
              <div>
                <h2 className="d-inline-block">{sentence.text}</h2>
              </div>
              <img
                onClick={audioPlay}
                style={{ marginLeft: "10px", cursor: "pointer" }}
                src={speaker_icon}
                alt=""
              />
            </div>
          </div>
        </div>
        {options.map((option, index) => (
          <div
            key={index}
            className={`option d-flex justify-content-center ${
              selectedAnswer === index ? "selected" : ""
            }
          ${option === rightMultipleAnswer ? "selected-right" : ""}
          
          `}
            onClick={() => onAnswerSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;

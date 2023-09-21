import { useEffect, useRef, useState } from "react";
import { PiSpeakerHigh } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import { IoPauseOutline } from "react-icons/io5";

const AudioMultipleChoiceQuestion = ({
  options,
  selectedAnswer,
  onAnswerSelect,
  rightMultipleAnswer,
}) => {
  console.log("from audio", rightMultipleAnswer);
  const [activeIndex, setActiveIndex] = useState(null);
  options.map((value) => {
    console.log(value);
  });
  const togglePlay = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const audioElements = document.querySelectorAll("audio");

    if (activeIndex !== null) {
      audioElements.forEach((audioElement, index) => {
        if (index !== activeIndex) {
          audioElement.pause();
        }
      });

      const currentAudio = audioElements[activeIndex];
      if (currentAudio.paused) {
        currentAudio.play();
      } else {
        currentAudio.pause();
      }
    } else {
      audioElements.forEach((audioElement) => {
        audioElement.pause();
      });
    }
  }, [activeIndex]);

  return (
    <div className="audio_multiple_choice_question">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option audio_box ${
            selectedAnswer === index ? "selected " : ""
          }
          ${option.text === rightMultipleAnswer ? "selected-right" : ""}
          `}
          onClick={() => {
            onAnswerSelect(index);
            togglePlay(index);
          }}
        >
          <audio controls className="audio_control">
            <source src={option.audioURL} type="audio/mpeg" />
            Your browser does not support the audio element.
            <PiSpeakerHigh className="audio_icon" />
          </audio>

          <div className="audio_box_icon">
            {activeIndex !== index ? (
              <FaPlayCircle
                className={`audio-icon ${
                  activeIndex === index ? "playing" : ""
                }`}
              />
            ) : (
              <IoPauseOutline
                className={`audio-icon ${
                  activeIndex === index ? "playing" : ""
                }`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AudioMultipleChoiceQuestion;

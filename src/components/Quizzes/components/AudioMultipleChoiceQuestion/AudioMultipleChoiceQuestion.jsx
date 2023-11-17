import { useEffect, useRef, useState } from "react";
import { PiSpeakerHigh } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import { IoPauseOutline } from "react-icons/io5";
import { API_URL } from "../../../../api";
import shuffleArray from "../../../LearningDashboard/components/functions/ShuffleArray";
import { HiSpeakerWave } from "react-icons/hi2";

const AudioMultipleChoiceQuestion = ({
  options,
  selectedAnswer,
  onAnswerSelect,
  rightMultipleAnswer,
  sentenceText,
}) => {
  console.log("from audio", rightMultipleAnswer);
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    setActiveIndex(null);
  }, [sentenceText]);

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

  console.log("option", options);

  return (
    <div>
      <div className="d-block">
        <h2 className="text-center " style={{ marginBottom: "30px" }}>
          {sentenceText}
        </h2>
      </div>
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
              <source
                src={`${API_URL}/mediaObject/download/${option.audioURL}`}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.{" "}
              <HiSpeakerWave size={20} />
            </audio>

            <div className="audio_box_icon">
              {activeIndex !== index ? (
                <HiSpeakerWave
                  style={{
                    backgroundColor: "#df3d15",
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                    borderRadius: "50%",
                    color: "white",
                  }}
                  size={20}
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
    </div>
  );
};

export default AudioMultipleChoiceQuestion;

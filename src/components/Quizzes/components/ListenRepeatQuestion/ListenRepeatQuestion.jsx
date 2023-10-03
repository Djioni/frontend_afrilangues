import React, { useRef, useState } from "react";
import speaker_icon from "../../../../assets/speaker-icon.png";

const ListenRepeatQuestion = ({
  audioSrc,
  options,
  selectedAnswer,
  onAnswerSelect,
  rightMultipleAnswer,
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log("right", rightMultipleAnswer);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="listen_repeat_container">
      <div className="audio_container">
        <audio ref={audioRef} controls>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div
          className="audio_box_icon d-flex justify-content-center"
          onClick={togglePlay}
        >
          <img src={speaker_icon} alt="" />
        </div>
      </div>
      <div className="listen_repeat_options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedAnswer === option ? "selected" : ""}

            ${rightMultipleAnswer === option ? "selected-right" : ""}
            
            `}
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListenRepeatQuestion;

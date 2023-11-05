import React, { useState, useEffect } from "react";
import speaker_icon from "../../../../assets/speaker-icon.png";

const ListenRepeatQuestion = ({
  audioSrc,
  options,
  selectedAnswer,
  onAnswerSelect,
  rightMultipleAnswer,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("audioElement");
    if (audio) {
      audio.load(); // Reload the audio element when audioSrc changes
    }
  }, [audioSrc]);

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
    <div className="listen_repeat_container">
      <div className="audio_container">
        <audio id="audioElement" controls key={audioSrc}>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div
          className="audio_box_icon d-flex justify-content-center"
          onClick={audioPlay}
        >
          <img src={speaker_icon} alt="" />
        </div>
      </div>
      <div className="listen_repeat_options ">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedAnswer === option ? "" : ""}

            ${rightMultipleAnswer === option ? "" : ""}
            
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

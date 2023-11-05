import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../api";

const ImageMultipleChoiceQuestion = ({
  options,
  selectedAnswer,
  onAnswerSelect,
  rightMultipleAnswer,
  sentence,
}) => {
  const [option, setOption] = useState([]);
  const [counter, setCount] = useState(0);
  useEffect(() => {
    // console.log("fdfdf", option);
    // setCount((prev) => prev + 1);
    // const matchingObject = options.find(
    //   (item) => item.text === options[counter].text
    // );

    // if (matchingObject) {
    //   const matchingIndex = options.indexOf(matchingObject);
    //   options.splice(matchingIndex, 1);
    //   options.unshift(matchingObject);

    //   setOption(options);
    // } else {
    //   console.log("No matching object found.");
    // }

    console.log("sentence text", sentence.text);

    const audio = document.getElementById("audioElement");
    if (audio) {
      audio.load(); // Reload the audio element when audioSrc changes
    }
  }, [sentence.text]);

  const [currentAudioID, setCurrentAudioID] = useState("");
  const audioPlay = (AudioID) => {
    console.log(AudioID);
    setCurrentAudioID(AudioID);

    const audio = document.getElementById("audioElement");
    if (audio) {
      audio.src = `${API_URL}/mediaObject/download/${AudioID}`;

      audio.currentTime = 0; // Reset playback to the beginning

      // Play the audio
      audio.play();
    }
  };
  return (
    <div>
      <div>
        <h2 className="text-center image_multiple_choice_question_sentence">
          {" "}
          {sentence.text}
        </h2>
      </div>
      <div className="image_multiple_choice_q row ">
        <audio id="audioElement" controls key={"fdf"}>
          <source
            // src={`${API_URL}/mediaObject/download/${currentAudioID}`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
        {options.map((option, index) => (
          // <div
          //   key={index}
          //   className={`option img_box col-6 ${
          //     selectedAnswer === index ? "selected" : ""
          //   }
          //   ${option.text === rightMultipleAnswer ? "selected-right" : ""}

          //   `}
          //   onClick={() => onAnswerSelect(index)}
          // >
          //   {/* <img src={option.imageURL} alt={`Option ${index + 1}`} /> */}

          // </div>

          <div className="col-6 d-flex justify-content-space col-md-3 ">
            <div
              className={`card  
        ${selectedAnswer === index ? "selected" : ""}
        `}
              onClick={() => {
                onAnswerSelect(index);
                audioPlay(option.audioURL);
              }}
            >
              <div className="d-flex justify-content-center">
                <img
                  className="card-img-top"
                  src={`${API_URL}/mediaObject/download/${option.imageURL}`}
                  alt="Loading..."
                />
              </div>
              <div className="card-body  mx-0 py-1 text-center ">
                <h5 className="card-title">
                  {" "}
                  <div className="circle"></div>
                  <span>{option.text} </span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMultipleChoiceQuestion;

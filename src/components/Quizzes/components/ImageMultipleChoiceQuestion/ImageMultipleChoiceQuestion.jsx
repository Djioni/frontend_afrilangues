import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../api";

const ImageMultipleChoiceQuestion = ({
  options,
  selectedAnswer,
  onAnswerSelect,
  rightMultipleAnswer,
  sentence,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentAudioID, setCurrentAudioID] = useState("");
  const [option, setOption] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const matchingObject = options.find((item) => item.text === sentence.text);

    if (matchingObject) {
      const matchingIndex = options.indexOf(matchingObject);
      options.splice(matchingIndex, 1);
      options.unshift(matchingObject);
      setOption(options);
    } else {
      console.log("No matching object found.");
    }

    // Preload images
    const imageElements = option.map((opt, index) => {
      const image = new Image();
      image.src = `${API_URL}/mediaObject/download/${
        opt.image ? opt.image.media : ""
      }`;
      image.onload = () => {
        setImagesLoaded((prevCount) => prevCount + 1);
      };
      return image;
    });

    if (imageElements.length === 0) {
      setIsLoading(false); // No images to load
    }
  }, [sentence.text]);

  useEffect(() => {
    if (imagesLoaded === option.length) {
      setIsLoading(false); // All images have loaded
    }
  }, [imagesLoaded, option]);

  // Rest of your component remains the same

  return (
    <div>
      <div>
        <h2 className="text-center image_multiple_choice_question_sentence">
          {" "}
          Select "{sentence.text}"
        </h2>
      </div>
      <div className="image_multiple_choice_q row">
        <audio id="audioElement" controls key={"fdf"}>
          <source type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {isLoading ? (
          <p>Loading images...</p>
        ) : (
          option.map((opt, index) => (
            <div
              className="col-6 d-flex justify-content-space col-md-3"
              key={index}
            >
              <div
                className={`card ${selectedAnswer === index ? "selected" : ""}`}
                onClick={() => {
                  onAnswerSelect(index);
                  audioPlay(opt.audio.media);
                }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    className="card-img-top"
                    src={`${API_URL}/mediaObject/download/${
                      opt.image ? opt.image.media : ""
                    }`}
                    alt="Loading..."
                  />
                </div>
                <div className="card-body mx-0 py-1 text-center">
                  <h5 className="card-title">
                    {" "}
                    <div className="circle"></div>
                    <span>{opt.text} </span>
                  </h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImageMultipleChoiceQuestion;

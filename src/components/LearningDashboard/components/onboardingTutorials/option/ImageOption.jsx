import React, { useEffect, useState } from "react";
import "./ImageOption.css";
export default function ImageOption({
  data,
  handleCurrentOption,
  callContinue,
  currentQuestionIndex,
}) {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(null);

  useEffect(() => {
    setCurrentOptionIndex(null);
    console.log("data colled");
  }, [callContinue, currentQuestionIndex]);
  console.log(data);
  const handleOption = (index) => {
    console.log(index);
    setCurrentOptionIndex(index);
    handleCurrentOption(true);
  };

  return (
    <div className="popup_image_option  w-100  ">
      <div className="row justify-content-center">
        {data.option.map((item, index) => (
          <div className="col-12 col-lg-3 col_option ">
            <div className="box ">
              <div
                className={`box_container ${
                  index === currentOptionIndex ? "active" : ""
                }`}
                onClick={() => handleOption(index)}
              >
                <div className="image">
                  <img src={item.media} alt="" />
                  <span className="title">{item.text}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

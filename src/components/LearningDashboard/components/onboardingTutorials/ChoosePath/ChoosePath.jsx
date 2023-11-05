import React, { useState } from "react";
// css
import "./ChoosePath";
export default function ChoosePath({ handleCurrentOption, data }) {
  const [activeOptionIndex, setActiveOptionIndex] = useState(null);
  const handleOption = (index) => {
    setActiveOptionIndex(index);
    handleCurrentOption(true);
  };
  return (
    <div id="pop1_choose_path">
      <div className="row">
        {data.option.map((item, index) => (
          <div
            className="col-9 col-md-6 choose_path_option_main"
            onClick={() => handleOption(index)}
          >
            <div
              className={`choose_path_option_container ${
                activeOptionIndex === index ? "active" : ""
              }`}
            >
              <div className="image">
                <img src={item.media} alt="" />
              </div>
              <div className="body">
                <div className="title">{item.title}</div>
                <div className="sub_title">{item.subTitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

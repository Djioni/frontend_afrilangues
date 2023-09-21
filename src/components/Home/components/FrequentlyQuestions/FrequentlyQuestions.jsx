import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./FrequentlyQuestions.css";

const FrequentlyQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [toggleTopic, setToggleTopic] = useState({
    value: true,
    id: 1, // Initial ID value, you can set it as needed
  });

  // HANDLE TOGGLE QUESTIONS BUTTON
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // HANDLE TOGGLE TOPIC
  const handleToggleQuestionBtn = (id) => {
    setToggleTopic((prevState) => ({
      value: !prevState.value,
      id: id,
    }));
  };

  return (
    <div className="frequently_questions_wrapper">
      <div className="frequently_questions_container container">
        <div className="heading_container">
          <h2>
            Frequently <span>asked</span> questions
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>

          <div className="toggle_questions">
            <button
              onClick={() => handleToggleQuestionBtn(1)}
              className={toggleTopic.id === 1 ? "active" : ""}
            >
              General
            </button>
            <button
              onClick={() => handleToggleQuestionBtn(2)}
              className={toggleTopic.id === 2 ? "active" : ""}
            >
              Support
            </button>
            <button
              onClick={() => handleToggleQuestionBtn(3)}
              className={toggleTopic.id === 3 ? "active" : ""}
            >
              Product
            </button>
          </div>
        </div>

        <div className="accordion_container">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="accordion_item" key={index}>
              <div
                className={`accordion_header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleItem(index)}
              >
                <span className="number">0{index + 1}.</span>
                <span>How does it work?</span>
                {activeIndex === index ? (
                  <IoIosArrowDown className="arrow_icon" />
                ) : (
                  <IoIosArrowUp className="arrow_icon" />
                )}
              </div>
              <div
                className={`accordion_content ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestions;

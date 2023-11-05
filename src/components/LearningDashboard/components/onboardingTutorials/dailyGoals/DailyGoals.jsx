import React, { useEffect, useState } from "react";
import "./DailyGoals.css";
export default function DailyGoals({
  data,
  handleCurrentOption,
  callContinue,
  currentQuestionIndex,
}) {
  const [isOptionActive, setIsOptionActive] = useState(null);

  useEffect(() => {
    setIsOptionActive(null);
  }, [callContinue]);
  const handleOption = (ID) => {
    setIsOptionActive(ID);
    handleCurrentOption(true);
  };
  useEffect(() => {
    return () => {
      setIsOptionActive(null);
    };
  }, [currentQuestionIndex]);
  return (
    <div id="pop1_daily_goal">
      <div className="row">
        {data.option.map((item, index) => (
          <div
            className="col-12 box_container_main"
            onClick={() => handleOption(index)}
          >
            <div
              className={`box_container ${
                index === isOptionActive ? "active" : ""
              }`}
            >
              <div>
                <span className="sub">{item.name}</span>
              </div>
              <div>
                <span className="time">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

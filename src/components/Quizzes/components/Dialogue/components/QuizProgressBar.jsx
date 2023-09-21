import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import ProgressBar from "react-bootstrap/ProgressBar";

const QuizProgressBar = ({ progress, totalQuestions }) => {
  const percent = ((progress / totalQuestions) * 100).toFixed(2);
  const percentNumber = parseFloat(percent);

  return (
    <div className="d-flex align-items-center justify-content-center gap-4 progress-bar-container">
      <button className="d-flex align-items-center justify-content-center rounded-circle bg-danger text-white p-2 border-0">
        <RxCross1 size={20} />
      </button>
      <div className="w-100">
        <ProgressBar variant="warning" now={percentNumber} />
      </div>
      <button className="d-flex align-items-center justify-content-center setting_btn border-0 bg-transparent">
        <IoSettingsOutline size={25} />
      </button>
    </div>
  );
};

export default QuizProgressBar;

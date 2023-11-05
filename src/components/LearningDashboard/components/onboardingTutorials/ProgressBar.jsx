import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";

const QuizProgressBar = ({ progress, totalQuestions, handleBackQuestion }) => {
  const percent = ((progress / totalQuestions) * 100).toFixed(2);
  const percentNumber = parseFloat(percent);
  const navigate = useNavigate();

  const handleBack = () => {
    console.log("handleback");
    handleBackQuestion();
  };
  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
      {/* <button
        onClick={() => {
          navigate(-1);
        }}
        className="d-flex align-items-center justify-content-center rounded-circle bg-danger text-white p-2 border-0"
      >
        <RxCross1 size={20} />
      </button> */}
      {progress > 0 ? (
        <img
          onClick={handleBack}
          src="/assets/leftarrow.svg"
          style={{ marginTop: "18px", cursor: "pointer", width: "20px" }}
          alt=""
        />
      ) : (
        <img
          src="/assets/close.svg"
          style={{ marginTop: "18px", cursor: "pointer", width: "17px" }}
          alt=""
        />
      )}
      <div className="w-100">
        <ProgressBar variant="#" className="mycolorname" now={percentNumber} />
      </div>
    </div>
  );
};

export default QuizProgressBar;

import React from "react";

const QuizProgressBar = ({ progress, totalQuestions }) => {
  const percent = ((progress / totalQuestions) * 100).toFixed(2);

  return (
    <div className="progress_bar">
      <div
        className="progress_track"
        style={{
          "--progress-width": `${percent}%`,
        }}
      ></div>
    </div>
  );
};

export default QuizProgressBar;

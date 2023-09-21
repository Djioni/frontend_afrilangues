// Lesson.js
import React from "react";

const Lesson = ({ lessonData, currentQuestion }) => {
  const question = lessonData.questions[currentQuestion];

  return (
    <div className="lesson">
      {/* <h2>{lessonData.lessonTitle}</h2> */}
      <div className="question">{question.questionText}</div>
    </div>
  );
};

export default Lesson;

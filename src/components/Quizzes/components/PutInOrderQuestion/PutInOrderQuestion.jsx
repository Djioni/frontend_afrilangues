// import React, { useState } from "react";
// import "./PutInOrderQuestion.css";

// const PutInOrderQuestion = ({
//   sentence,
//   correctOrder,
//   onVerify,
//   setAnswerCorrect,
//   wordOrder,
//   handleWordClick,
// }) => {
//   //   const [wordOrder, setWordOrder] = useState([]);

//   //   const handleWordClick = (word) => {
//   //     setWordOrder((prevOrder) => [...prevOrder, word]);
//   //   };

//   //   const handleReset = () => {
//   //     setWordOrder([]);
//   //   };

//   //   const handleVerify = () => {
//   //     const isCorrectOrder =
//   //       JSON.stringify(wordOrder) === JSON.stringify(correctOrder);
//   //     onVerify(isCorrectOrder);
//   //     setAnswerCorrect(isCorrectOrder);
//   //   };

//   return (
//     <div className="put_in_order_question">
//       <div className={`sentence ${wordOrder.length === 0 ? "active" : ""}`}>
//         {wordOrder.map((word, index) => (
//           <span key={index} className="word">
//             {word}
//           </span>
//         ))}
//       </div>
//       <div className="put_in_order_options">
//         {sentence.map((word, index) => (
//           <button
//             key={index}
//             className="word_option"
//             disabled={wordOrder.includes(word)}
//             onClick={() => handleWordClick(word)}
//           >
//             {word}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PutInOrderQuestion;

import React from "react";
import "./PutInOrderQuestion.css";

const PutInOrderQuestion = ({
  sentence,
  correctOrder,
  onVerify,
  setAnswerCorrect,
  wordOrder,
  handleWordClick,
}) => {
  const isWordSelected = (word) => wordOrder.includes(word);

  return (
    <div className="put_in_order_question">
      <div className={`sentence ${wordOrder.length === 0 ? "active" : ""}`}>
        {wordOrder.map((word, index) => (
          <span
            key={index}
            className={`word ${isWordSelected(word) ? "selected" : ""}`}
            onClick={() => handleWordClick(word)}
          >
            {word}
          </span>
        ))}
      </div>
      <div className="put_in_order_options">
        {sentence.map((word, index) => (
          <button
            key={index}
            className={`word_option ${isWordSelected(word) ? "selected" : ""}`}
            onClick={() => handleWordClick(word)}
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PutInOrderQuestion;

import "./TranslatingWordsQuestion.css";
const TranslatingWordsQuestion = ({
  word,
  correctTranslation,
  onAnswerSelect,
  selectedTranslation,
  handleTranslationChange,
}) => {
  //   const [selectedTranslation, setSelectedTranslation] = useState("");

  const handleVerify = () => {
    onAnswerSelect(selectedTranslation);
  };

  return (
    <div className="question- translating_words_container">
      {/* <div className="question-text">Translate the words:</div> */}

      <div className="translate_words_question">{word}</div>

      <textarea
        type="text"
        className="translation_input"
        value={selectedTranslation}
        onChange={handleTranslationChange}
      ></textarea>
    </div>
  );
};

export default TranslatingWordsQuestion;

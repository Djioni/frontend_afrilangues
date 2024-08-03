import React, { useEffect } from "react";
import Home from "./components/Home";
import "./Dialogue.css";

import { useDispatch } from "react-redux";
import { QuizValidationAction } from "../../../LearningDashboard/services/actions/QuizValidationAction";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
export default function Dialogue({ handlePrevQuestion, adsInfo,isAdsPage }) {
  console.log("dialouge handle prev question", handlePrevQuestion);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(QuizValidationAction(false));
    };
  }, []);
  // const handlePrevQuestion = () => {
  //   console.log("prev");
  // };

  const handleNextQuestion = () => {
    console.log("next");
  };
  return (
    <div>
      <Home isAdsPage={isAdsPage} adsInfo={adsInfo} handlePrevQuestion={handlePrevQuestion} />
    </div>
  );
}

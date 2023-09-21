import React from "react";
import Quizzes from "../../Quizzes/Quizzes";
import { useDispatch, useSelector } from "react-redux";
import { QuizValidationAction } from "../services/actions/QuizValidationAction";
import { useState } from "react";
import LessonSection from "./LessonSection";
import { useNavigate } from "react-router-dom";

export default function LessonsSectionQuiz() {
  const { currentLesson } = useSelector((state) => state.currentLesson);

  const [currentQuiz, setCurrentQuiz] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(QuizValidationAction(true));
  // params
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  const value = urlParam.get("id");
  console.log(value);
  console.log(currentLesson);

  if (currentLesson) {
    if (value === "2") {
      return (
        <div>
          <Quizzes datalesson={"Lesson 3: Listen and Repeat"} />
        </div>
      );
    } else {
      return (
        <div>
          <LessonSection />
        </div>
      );
    }
  } else {
    navigate("/lessons");
  }
}

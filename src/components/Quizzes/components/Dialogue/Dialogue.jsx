import React, { useEffect } from "react";
import Home from "./components/Home";
import "./Dialogue.css";
import { useDispatch } from "react-redux";
import { QuizValidationAction } from "../../../LearningDashboard/services/actions/QuizValidationAction";
export default function Dialogue() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(QuizValidationAction(false));
    };
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
}

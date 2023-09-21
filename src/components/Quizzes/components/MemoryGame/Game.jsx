import React, { useContext, useEffect } from "react";
import MemoryGame from "./MemoryGame";
import { MemoryProvider as MemoryContext } from "./contexts/MemoryContext";
import { useDispatch } from "react-redux";
import { QuizValidationAction } from "../../../LearningDashboard/services/actions/QuizValidationAction";
import { MemoryGameDataAction } from "./services/actions/MemoryGameDataAction";

export default function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(QuizValidationAction(true));
    return () => {
      dispatch(QuizValidationAction(false));
    };
  }, []);
  return (
    <MemoryContext>
      <MemoryGame />
    </MemoryContext>
  );
}

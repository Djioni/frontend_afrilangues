import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { AuthAction } from "./auth/services/actions/AuthAction";
import { ID_LENGTH, TOKEN_LENGTH } from "./auth/length";
import Layout from "./Layout";
import { Home, LearningDashboard, Quizzes } from "./components";
import Game from "./components/Quizzes/components/MemoryGame/Game";
import { store } from "./store";
import { MemoryGameDataAction } from "./components/Quizzes/components/MemoryGame/services/actions/MemoryGameDataAction";

const App = () => {
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const quizData = [
    {
      lessonTitle: "Lesson 1: Multiple Choice",
      questions: [
        {
          format: "multipleChoice",
          questionText: "What is the capital of France?",
          options: ["Paris", "Berlin", "London", "Madrid"],
          correctAnswerIndex: 0,
        },
        // Add more questions
      ],
    },
    {
      lessonTitle: "Lesson 2: Match Words",
      questions: [
        {
          format: "matchWords",
          questionText: "Match the country with its capital:",
          options: {
            France: "Paris",
            Germany: "Berlin",
            UK: "London",
            Spain: "Madrid",
          },
          correctAnswers: {
            France: "Paris",
            Germany: "Berlin",
            UK: "London",
            Spain: "Madrid",
          },
        },
        // Add more questions
      ],
    },
    // Add more lessons
  ];
  console.log("hello i am from app");

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;

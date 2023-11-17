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
import CoursePlan from "./components/Home/components/plan-section/CoursePlan";
import axios from "axios";
import { API_URL } from "./api";
import TextZone from "./components/Quizzes/components/TextZone/TextZone";

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

  //
  useEffect(() => {}, []);

  //

  return (
    <BrowserRouter>
      <Layout />
      {/* <TextZone /> */}
      {/* <LearningDashboard /> */}
      {/* <Home /> */}
      {/* <CoursePlan /> */}
      {/* <Quizzes /> */}
    </BrowserRouter>
  );
};

export default App;

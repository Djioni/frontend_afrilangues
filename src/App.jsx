import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./Layout";
import ReactGA from "react-ga4";
const App = () => {
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

  console.log("meta env", import.meta.env);
  // google analytics
  useEffect(() => {
    ReactGA.initialize("G-MTQB1HZN9F");

    ReactGA.event({
      category: "USER",
      action: "VisitorEngaged",
      label: "africalangues.com",
    });
  }, []);
  //

  return (
    <BrowserRouter style="bg-red">
      <Layout />
      {/* <TextZone /> */}
      {/* <LearningDashboard />  */}
      {/* <Home /> */}
      {/* <CoursePlan /> */}
      {/* <Quizzes /> */}
    </BrowserRouter>
  );
};

export default App;

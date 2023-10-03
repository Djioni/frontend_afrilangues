import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Languages from "./components/Languages/Languages";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ErrorModal from "./components/ErrorModal";
import { Home, LearningDashboard, Quizzes } from "./components";
import Navber from "./components/LearningDashboard/components/Navber";
import GrettingLesson from "./components/LearningDashboard/components/Lessons";
import LessonSection from "./components/LearningDashboard/components/LessonSection";
import { useDispatch, useSelector } from "react-redux";
import LessonsSectionQuiz from "./components/LearningDashboard/components/LessonsSectionQuiz";
import Cookies from "js-cookie";
import axios from "axios";
import { API_URL } from "./api";
import Process from "./components/LearningDashboard/components/Process";
import Game from "./components/Quizzes/components/MemoryGame/Game";
import TestParams from "./components/test/TestParams";
import Dialogue from "./components/Quizzes/components/Dialogue/Dialogue";
import ForgetPasswd from "./components/ForgetPasswd";
import Exercise from "./components/LearningDashboard/components/Exercise";

export default function Layout() {
  const [showModal, setShowModal] = useState(true);
  const [isLearningDashboardOpen, setIsDashBoardOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);
  const quizValidate = useSelector((state) => state.quizValidate);
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");

  useEffect(() => {
    //

    try {
      // Retrieve token and id from cookies
      const token = JSON.parse(Cookies.get("token"));
      const id = JSON.parse(Cookies.get("id"));

      // Check if token and id are valid
      if (token && id && token.length > TOKEN_LENGTH && id.length > ID_LENGTH) {
        // Dispatch AuthAction if token and id are valid
        dispatch(AuthAction({ id: id, token: token }));
      } else {
        // Redirect to login if token and id are not valid
        // navigate("/auth/login");
      }
    } catch (error) {
      // Redirect to login on error
      // navigate("/auth/login");
    }

    // Log questions to the console
    // console.log("questions: ", questions);
  }, []);

  // useEffect(() => {
  //   // This effect will run only once when the component mounts.
  //   navigate("/home");
  // }, []);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
    navigate("/");
  };
  // console.log(quizValidate);
  // get current time
  const currentTime = new Date();
  useEffect(() => {
    // expires time
    const expireTime = new Date(currentTime.getTime() + 60000 * 1440);
    // console.log(new Date(currentTime.getTime() + 180000));
    // This effect will run whenever 'isLearningDashboardOpen' changes or location.pathname changes.

    const userToken = Cookies.get("token");
    const userID = Cookies.get("id");
    if (userToken && userID) {
      // console.log("auth user.....");
      Cookies.set("token", userToken, { expires: expireTime });
      Cookies.set("id", userID, { expires: expireTime });
    } else {
      // localStorage.clear();
      // console.log("data not found!");
      Cookies.set("token", "");
      Cookies.set("id", "");
      localStorage.clear();
    }

    if (
      !location.pathname.includes("home") &&
      !location.pathname.includes("auth") &&
      !location.pathname.includes("register") &&
      !quizValidate
    ) {
      setIsDashBoardOpen(true);
    } else {
      setIsDashBoardOpen(false);
    }
  }, [location.pathname, setIsDashBoardOpen, quizValidate]);

  return (
    <div>
      {isLearningDashboardOpen && (
        <section className="sec-nav">
          <Navber />
        </section>
      )}

      <Routes>
        {/* public routes */}

        <Route
          path="/"
          element={
            <Navigate
              to={userToken && usertID ? "/dashboard" : "/home"}
              replace
            />
          }
        />

        <Route path="/home" element={<Home />} />

        {/* auth routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/languages" element={<Languages />} />
        <Route path="/auth/register" element={<Languages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPasswd />} />

        {/* dashboard routes */}
        <Route path="/dashboard" element={<LearningDashboard />} />
        <Route
          path="/process"
          element={
            <div className="container">
              <section
                className="sec-m-process "
                style={{ marginTop: "120px" }}
              >
                <Process />
              </section>
            </div>
          }
        ></Route>

        <Route
          path="/lessons"
          element={
            <div className="layout">
              <div className="container">
                <GrettingLesson />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/lessons/section/"
          element={
            <div className="container">
              <LessonSection />
            </div>
          }
        ></Route>
        <Route
          path="/lessons/section/exercise/"
          element={
            <div className="">
              <Exercise />
            </div>
          }
        ></Route>
        <Route
          path="/lessons/section/quiz/"
          element={
            <div className="">
              <Quizzes />
            </div>
          }
        ></Route>
        <Route
          path="/lessons/section/quiz/game"
          element={
            <div className="">
              <Game />
            </div>
          }
        ></Route>
        <Route
          path="/lessons/section/quiz/dialogue"
          element={
            <div className="">
              <Dialogue />
            </div>
          }
        ></Route>
        <Route
          path="/topic/:title"
          element={
            <div className="">
              <TestParams />
            </div>
          }
        ></Route>

        {/* * routes  */}
        {/* <Route path="*" element={<Register />} /> */}

        {/* This route will match any unknown route */}
        <Route
          path="*"
          element={
            <ErrorModal
              open={showModal}
              error={"Page non trouvée!"}
              actionText={"retour à la home"}
              setOpen={toggleModal}
            />
          }
        />
      </Routes>
    </div>
  );
}

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
import ForgetPasswd from "./components/forgerPassword/ForgetPasswd";
import Exercise from "./components/LearningDashboard/components/Exercise";
import NewPassword from "./components/forgerPassword/NewPassword";
import Profile from "./components/Profile/Profile";
import MonProfil from "./components/Profile/Components/MonProfil";
import EditMonProfil from "./components/Profile/Components/EditMonProfil";
import Propos from "./components/Profile/Components/Propos";
import OnboardingTotorials from "./components/LearningDashboard/components/onboardingTutorials/OnboardingTotorials";

// import {
//   ConditionOfSale,
//   Confidentiality,
//   Pricing,
//   TermsOfUse,
// } from "./components/Home/components";

import ChangeLanguage from "./components/LearningDashboard/components/changeLanguage/ChangeLanguage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import AdsPage from "./components/ads/AdsPage";
import ConditionOfSale from "./components/Home/pages/ConditionOfSale";
import Confidentiality from "./components/Home/pages/Confidentiality";
import TermsOfUse from "./components/Home/pages/TermsOfUse";
import Pricing from "./components/Home/components/Pricing/Pricing";
import { HomeFormation } from "./components/Formation/HomeFormation";
import { Navigation } from "./components/Home";
import Reservation from "./components/Home/Reservation";
import Devis from "./components/Home/components/Devis";
export default function Layout() {
  const [showModal, setShowModal] = useState(true);
  const [isLearningDashboardOpen, setIsDashBoardOpen] = useState(true);
  const [isHomeNav, setIsHomeNav] = useState(false);
  const [isHomePageNavigation, setIsHomePageNavigation] = useState(false);
  const [isdashNav, setisdashNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.questions);
  const quizValidate = useSelector((state) => state.quizValidate);

  const [isPageLoading, setIsPageLoading] = useState(true);
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");

  useEffect(() => {
    //

    try {
      const token = JSON.parse(Cookies.get("token"));
      const id = JSON.parse(Cookies.get("id"));

      // Check if token and id are valid
      if (token && id && token.length > TOKEN_LENGTH && id.length > ID_LENGTH) {
        // Dispatch AuthAction if token and id are valid
        dispatch(AuthAction({ id: id, token: token }));
      } else {
      }
    } catch (error) {}
  }, []);

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
      location.pathname.includes("condition-of-sale") ||
      location.pathname.includes("terms-of-use") ||
      location.pathname.includes("confidentiality")
    ) {
      setIsHomeNav(true);
    }

    if (
      location.pathname.length === 1 ||
      location.pathname.includes("register") ||
      location.pathname.includes("auth") ||
      location.pathname.includes("forgetpassword") ||
      location.pathname.includes("reset") ||
      quizValidate
    ) {
      setIsDashBoardOpen(false);
      setIsPageLoading(false);
      setIsHomePageNavigation(true);
    }

    if (
      location.pathname.includes("reservation") ||
      location.pathname.includes("devis")
    ) {
      setisdashNav(true);
    } else {
      if (location.pathname.includes("checkout")) {
        return null;
      } else {
        if (location.pathname.includes("formation")) {
          return null;
        } else {
          setIsDashBoardOpen(true);
          setIsPageLoading(false);
          setIsHomePageNavigation(false);
          setIsHomeNav(false);
        }
      }
    }
  }, [location.pathname, setIsDashBoardOpen, quizValidate]);

  return (
    <div>
      {isLearningDashboardOpen && !isPageLoading && !isHomePageNavigation ? (
        <section className="sec-nav">
          {isHomeNav ? <Navigation /> : !isdashNav ? <Navber /> : null}
        </section>
      ) : isHomeNav ? (
        <section className="sec-nav"></section>
      ) : null}

      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />

        <Route
          path="/"
          element={<Navigate to={userToken && usertID ? "/dashboard" : "/"} />}
        />

        {/* // home others */}
        <Route path="/formation" element={<HomeFormation />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/reservation" element={<Reservation />} />

        {/* auth routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/languages" element={<Languages />} />
        <Route path="/auth/register" element={<Languages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPasswd />} />
        <Route path="/password/reset/:passToken" element={<NewPassword />} />
        {/* profile */}
        <Route path="/user/profile" element={<Profile />} />

        <Route path="/monProfil" element={<MonProfil />} />
        <Route path="/editMonProfil" element={<EditMonProfil />} />
        <Route
          path="/propos"
          element={
            <div>
              <div
                className="w-100 h-100 d-flex flex-column justify-content-center  align-items-center rounded-4 "
                style={{ minHeight: "100vh", background: "#F6F6F6" }}
              >
                <Propos />
              </div>
            </div>
          }
        />
        {/* dashboard routes */}
        <Route path="/dashboard" element={<LearningDashboard />} />
        <Route path="/change-language" element={<ChangeLanguage />} />

        <Route path="/onboarding-tutorials" element={<OnboardingTotorials />} />

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
        <Route path="/ads" element={<AdsPage />}></Route>
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
          path="/checkout"
          element={
            <div className="">
              <CheckoutPage />
            </div>
          }
        ></Route>
        <Route
          path="/pricing"
          element={
            <div className="" style={{ paddingTop: "30px" }}>
              <Pricing />
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
        <Route
          path="/condition-of-sale"
          element={
            <div className="">
              <ConditionOfSale />
            </div>
          }
        ></Route>
        <Route
          path="/confidentiality"
          element={
            <div className="">
              <Confidentiality />
            </div>
          }
        ></Route>
        <Route
          path="/terms-of-use"
          element={
            <div className="">
              <TermsOfUse />
            </div>
          }
        ></Route>

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

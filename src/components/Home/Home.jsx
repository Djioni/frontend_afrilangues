import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
// ======= IMPORTING COMPONENTS FROM components FOLDER =======
import { useEffect } from "react";
import { Footer, Navigation } from "../index";

// ======= IMPORTING COMPONENTS FROM HOME PAGE FOLDER =======
import {
  Banner,
  DownloadApp,
  ReferenceAfricanLanguage,
  Pricing,
  Testimonials,
  FrequentlyQuestions,
  Media,
  Subscribe,
  CoursePlan,
} from "./components/index";
import { useDispatch } from "react-redux";
import { CurrentPathAction } from "../LearningDashboard/services/actions/CurrentPathAction";
import NewsLetter from "./components/newsletter/NewsLetter";
import ConditionOfSale from "./pages/ConditionOfSale";

const Home = () => {
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(CurrentPathAction(""));
  });
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navigation />
      <Banner />
      {/* <CoursePlan /> */}
      <ReferenceAfricanLanguage />
      <DownloadApp />
      <br />
      <br />
      <Pricing />
      <Testimonials />
      <FrequentlyQuestions />
      <Media />
      {/* <Subscribe /> */}
      <Footer />
      <NewsLetter />
    </div>
  );
};

export default Home;

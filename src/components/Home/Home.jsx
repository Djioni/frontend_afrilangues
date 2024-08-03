import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { CurrentPathAction } from "../LearningDashboard/services/actions/CurrentPathAction";
import HomeApp from "./App";

const Home = () => {
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(CurrentPathAction(""));
  });
  return (
    <div>
      <HomeApp />
    </div>
  );
};

export default Home;

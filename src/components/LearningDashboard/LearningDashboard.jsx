import { useEffect, useState } from "react";
import Layout from "./Layout";
import "./styles/bootstrap/custom.css";
import Loading from "../Loading";
function LearningDashboard() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div>
        {isLoading ? (
          <Loading page={true} message="S'il vous plaît, attendez" />
        ) : (
          <Layout />
        )}
      </div>
    </>
  );
}

export default LearningDashboard;

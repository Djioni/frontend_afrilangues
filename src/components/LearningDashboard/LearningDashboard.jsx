import { useEffect, useState } from "react";
import Layout from "./Layout";
import "./styles/bootstrap/custom.css";
import Loading from "../Loading";
import Cookies from "js-cookie";
import axios from "axios";
import { API_URL } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { GetLessonAction } from "./services/actions/GetLessonAction";
import { GetLessonSectionAction } from "./services/actions/GetLessonSectionAction";
import { GetExerciseAction } from "./services/actions/GetExerciseAction";
function LearningDashboard() {
  const lesson = useSelector((state) => state.lesson);
  const exercises = useSelector((state) => state.exercises);
  console.log("datae", exercises);

  const [isLoading, setIsLoading] = useState(false);
  const userToken = Cookies.get("token");
  const dispatch = useDispatch();
  const GetData = () => {
    if (userToken) {
      const config = {
        headers: {
          Authorization: `Bearer ${JSON.parse(userToken)}`,
        },
      };
      //
      axios
        .get(`${API_URL}/lesson/`, config)
        .then((result) => {
          console.log("dataf", result.data);
          dispatch(GetLessonAction(result.data));

          localStorage.setItem("lesson", JSON.stringify(result.data));
        })
        .catch((error) => {
          console.log(error);
        });
      // get lesson section
      axios
        .get(`${API_URL}/lessonsection/`, config)
        .then((result) => {
          console.log("datafsec", result.data);
          dispatch(GetLessonSectionAction(result.data));
          localStorage.setItem("lessonsection", JSON.stringify(result.data));
        })
        .catch((error) => {
          console.log(error);
        });

      // get exercise
      axios
        .get(`${API_URL}/exercise/`, config)
        .then((result) => {
          console.log("\n\n\n\n\n\n\n\n")
          console.log("Exercise : ", result.data);
          console.log("\n\n\n\n\n\n\n\n")
          dispatch(GetExerciseAction(result.data));
          localStorage.setItem("exercise", JSON.stringify(result.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    GetData();
  }, []);
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

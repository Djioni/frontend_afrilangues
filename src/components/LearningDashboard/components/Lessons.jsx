import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL, AUTH_NAME } from "../../../api";
import { useDispatch } from "react-redux";
import { CurrentPathAction } from "../services/actions/CurrentPathAction";
import Loading from "../../Loading";
import Cookies from "js-cookie";
import ErrorModal from "../../ErrorModal";
import { FaHourglassEnd } from "react-icons/fa";

export default function Lessons() {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const dispatch = useDispatch();
  const userToken = Cookies.get("token");
  const location = useLocation();
  const [lessonSectionData, setLessonSectionData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [lessonNotFound, setLessonNotFound] = useState(false);
  const getCurrentTheme = localStorage.getItem("currentTheme");
  const [currentLesson, setCurrentLesson] = useState([]);
  const [allSection, setAllSection] = useState([]);
  // get lesson and section
  const getGetCurrentTheme = localStorage.getItem("currentTheme");
  const getLesson = localStorage.getItem("lesson");
  const getLessonSection = localStorage.getItem("lessonsection");
  const [lesson, setLesson] = useState([]);
  useEffect(() => {
    const GetLessonAndSection = async () => {
      if (userToken) {
        if (getCurrentTheme && getLessonSection) {
          const currentTheme = JSON.parse(getGetCurrentTheme);
          const lesson = JSON.parse(getLesson);
          // lesson section
          const lessonsection = JSON.parse(getLessonSection);
          // store lesson section in state
          setAllSection(lessonsection);

          const lessonData = lesson.filter(
            (item) => item.theme && item.theme.id === currentTheme[0].id
          );
          if (lessonData[0]) {
            setCurrentLesson(lessonData);
            setIsPageLoading(false);
          }
          if (!lessonData[0]) {
            console.log("no lessons found");
            setIsPageLoading(false);
            setLessonNotFound(true);
          }
        }

        if (!getCurrentTheme) {
          navigate("/dashboard");
        } else {
          console.log("data getting start");

          const config = {
            headers: {
              Authorization: `Bearer ${JSON.parse(userToken)}`,
            },
          };
          // axios request
          // // // get lesson
          const lesson = await axios.get(`${API_URL}/lesson/`, config);
          // manage lesson
          console.log("hello", lesson.data[0].theme.id);
          //data finding
          const lessonData = lesson.data.filter(
            (item) =>
              item.theme &&
              item.theme.id === JSON.parse(getGetCurrentTheme)[0].id
          );
          if (lessonData[0]) {
            setCurrentLesson(lessonData);
          }
          if (!lessonData[0]) {
            console.log("no lessons found!");
            setIsPageLoading(false);

            setLessonNotFound(true);
          }
          localStorage.setItem("lesson", JSON.stringify(lesson.data));

          // get lesson section
          const lessonsection = await axios.get(
            `${API_URL}/lessonsection/`,
            config
          );
          setAllSection(lessonsection.data);
          // manage lesson section
          localStorage.setItem(
            "lessonsection",
            JSON.stringify(lessonsection.data)
          );
          if (lessonsection.data && lesson.data) {
            setIsPageLoading(false);
          }
          // end
        }
      } else {
        navigate("/auth/login");
      }
    };

    GetLessonAndSection();
  }, []);

  useEffect(() => {
    // Dispatch the current path action when location changes
    dispatch(CurrentPathAction(location.pathname));
  }, [location.pathname, dispatch]);

  useEffect(() => {}, []);

  const handleSection = (result) => {
    console.log("all section", allSection);
    console.log("lesson", result);

    const filteredObjects = allSection.filter(
      (item) => item.lesson && item.lesson.id === result.id
    );
    console.log("filtered data", filteredObjects);
    if (filteredObjects[0]) {
      console.log("lesson section found");
      console.log(filteredObjects);
      // store current section data in session storage
      localStorage.setItem("currentLesson", JSON.stringify(result));
      // redirect section page
      navigate("/lessons/section");
    } else {
      console.log("lesson section not found");
      setShowModal(true);
    }
  };

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };
  const handleLessonNotFound = () => {
    setLessonNotFound((prevvalue) => !prevvalue);
    navigate("/dashboard");
  };
  return (
    <div id={isPageLoading ? "" : "gt"}>
      {isPageLoading ? (
        <div>
          <Loading page={true} message={"S'il vous plaît, attendez!"} />
        </div>
      ) : (
        <div>
          <div className="row">
            {currentLesson.map((result) => (
              <div
                key={result.id}
                className="col-12 col-md-6 col-lg-4 col-xl-3"
              >
                <div
                  className="mt-5 card-box w-100 text-center align-self-center"
                  onClick={() => handleSection(result)}
                >
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={`${API_URL}/mediaObject/download/${result.image}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <h2>{result.name}</h2>
                      </div>
                      <div className="d-flex justify-content-center">
                        <span>{"Commencer la leçon"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showModal && (
            <ErrorModal
              open={showModal}
              error="Aucune rubrique trouvée !"
              actionText={"Continuer"}
              setOpen={toggleModal}
            />
          )}
        </div>
      )}
      <br />
      <br />
      {lessonNotFound && (
        <ErrorModal
          open={lessonNotFound}
          error="Aucune leçon trouvée !"
          actionText={"Continuer"}
          setOpen={handleLessonNotFound}
        />
      )}
    </div>
  );
}

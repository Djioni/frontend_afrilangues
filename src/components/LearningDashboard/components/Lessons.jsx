import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL, AUTH_NAME } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { CurrentPathAction } from "../services/actions/CurrentPathAction";
import Loading from "../../Loading";
import Cookies from "js-cookie";
import ErrorModal from "../../ErrorModal";
import { FaHourglassEnd } from "react-icons/fa";
import { GetLessonSectionAction } from "../services/actions/GetLessonSectionAction";
import { GetLessonAction } from "../services/actions/GetLessonAction";

export default function Lessons() {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const dispatch = useDispatch();
  const userToken = Cookies.get("token");
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);
  const [lessonNotFound, setLessonNotFound] = useState(false);
  const [currentLesson, setCurrentLesson] = useState([]);
  const [allSection, setAllSection] = useState([]);

  const lessons = useSelector((state) => state.lesson);
  const lessonsections = useSelector((state) => state.lessonsection);

  // get params
  const urlSearchParams = new URLSearchParams(window.location.search);

  // Access the 'id' parameter
  const id = urlSearchParams.get("id");

  // get params
  useEffect(() => {
    if (!userToken) {
      navigate("/auth/login");
    }
    //
    if (!id && userToken) {
      navigate("/dashboard");
    }

    if (userToken && id) {
      const config = {
        headers: {
          Authorization: `${AUTH_NAME} ${JSON.parse(userToken)}`,
        },
      };
      //

      axios
        .get(`${API_URL}/lesson/theme/${id}`, config)
        .then((result) => {
          console.log("dataf", result.data);

          if (result.data[0]) {
            setCurrentLesson(result.data);
            setIsPageLoading(false);
            dispatch(GetLessonAction(result.data));
          } else {
            setIsPageLoading(false);
            console.log("okay");
            setLessonNotFound(true);
          }
          //
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status === 401) {
            Cookies.set("token", "");
            Cookies.set("id", "");
            localStorage.clear();
            navigate("/auth/login");
          }
        });
    }

    //
  }, []);

  useEffect(() => {
    // Dispatch the current path action when location changes
    dispatch(CurrentPathAction(location.pathname));
  }, [location.pathname, dispatch]);

  const handleSection = (LessonID) => {
    console.log("hello handle section", LessonID);
    navigate(`/lessons/section?id=${LessonID}`);
  };

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };
  const handleLessonNotFound = () => {
    setLessonNotFound((prevvalue) => !prevvalue);
    navigate("/dashboard");
  };
  if (currentLesson[0]) {
    return (
      <div id={isPageLoading ? "" : "gt"}>
        {isPageLoading ? (
          <div>
            <Loading
              full={true}
              page={true}
              message={"S'il vous plaît, attendez!"}
            />
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
                    onClick={() => handleSection(result.id)}
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
          </div>
        )}
        <br />
        <br />
      </div>
    );
  } else {
    return (
      <div>
        {lessonNotFound ? (
          <ErrorModal
            open={lessonNotFound}
            error="Aucune leçon trouvée !"
            actionText={"Continuer"}
            setOpen={handleLessonNotFound}
          />
        ) : (
          <div>
            <Loading
              full={true}
              page={true}
              message={"S'il vous plaît, attendez!"}
            />
          </div>
        )}
      </div>
    );
  }
}

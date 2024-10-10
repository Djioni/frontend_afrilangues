/** @format */

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
import LessonAndSectionTitle from "./lessonAnd_SectionTitle/LessonAndSectionTitle";
import AdsPage from "../../ads/AdsPage";

export default function Lessons() {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const dispatch = useDispatch();
  const userToken = Cookies.get("token");
  const userId = Cookies.get("id");
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);
  const [lessonNotFound, setLessonNotFound] = useState(false);
  const [currentLesson, setCurrentLesson] = useState([]);
  const [adsInfo, setAdsInfo] = useState(null);
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [lessonCompletionState, setLessonCompletionState] = useState([]);

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
      // define request
      const result = axios.get(`${API_URL}/lesson/theme/${id}`, config);
      const adsInfo = axios.get(`${API_URL}/advertisement/`, config);
      const subscriptionData = axios.get(
        `${API_URL}/subscription/user/${userId && JSON.parse(userId)}/`,
        config
      );

      axios
        .all([result, adsInfo, subscriptionData])
        .then(
          axios.spread((result, adsInfo, subscriptionData) => {
            if (subscriptionData?.data[0]) {
              ("");
            } else {
              console.log("data______", adsInfo.data);
              setAdsInfo(adsInfo.data);
            }
            // set current in local storage
            localStorage.setItem(
              "currentAllLessons",
              JSON.stringify(result.data)
            );
            getLessonCompletionState(result.data);
            if (result.data[0]) {
              localStorage.setItem(
                "currentLessons",
                JSON.stringify(result.data)
              );
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
        )
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status === 401) {
            Cookies.set("token", "");
            Cookies.set("id", "");
            localStorage.clear();
            navigate("/auth/login");
          } else {
            window.alert(error.message);
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
    localStorage.setItem("currentLessonID", JSON.stringify(LessonID));
  };

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };
  const handleLessonNotFound = () => {
    setLessonNotFound((prevvalue) => !prevvalue);
    navigate("/dashboard");
  };

  const getLessonCompletionState = async (objectsArray) => {
    try {
      const token = JSON.parse(userToken);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const requests = objectsArray.map((obj) =>
        axios.post(
          API_URL + "/status/lesson/",
          {
            lessonId: obj.id,
            userId: JSON.parse(userId),
          },
          config
        )
      );
      const responses = await Promise.all(requests);
      const fetchedData = responses.map((response) => response.data);
      console.log("Fetched Data : ", fetchedData)
      setLessonCompletionState(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
            {/* {adsInfo && <AdsPage adsInfo={adsInfo} />} */}
            <LessonAndSectionTitle
              text={"Revenir aux thèmes"}
              title={currentLesson[0]?.theme?.name}
            />
            <div className="row">
              {currentLesson.map((result, lessonIndex) => (
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
                      <div className="card-body position-relative">
                        <div className="d-flex justify-content-center">
                          <h2>{result.name}</h2>
                        </div>
                        <div className="d-flex justify-content-center">
                          <span>{"Commencer la leçon"}</span>
                        </div>
                        {lessonCompletionState[lessonIndex]?.data != "En cours" && lessonCompletionState.length > 0 && (
                          <div className="position-absolute tickIcon">
                            <img
                              src="images/tick_icon.png"
                              className="tickImage"
                            />
                          </div>
                        )}
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

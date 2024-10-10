/** @format */

import React, { useEffect, useState } from "react";
import "../styles/Lessons.css";
import { NavLink, json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  bonusPointIncrement,
  lessonIncrement,
} from "../services/actions/LessonActions";
import Cookies from "js-cookie";
import axios from "axios";
import { API_URL } from "../../../api";
import { ThemeAction } from "../../services/actions/ThemeAction";
import ErrorModal from "../../ErrorModal";
import Loading from "../../Loading";
import OnboardingTotorials from "./onboardingTutorials/OnboardingTotorials";
import AdsPage from "../../ads/AdsPage";

export default function Topics() {
  const testTopicData = [{ title: "hello" }];
  const [showModal, setShowModal] = useState(false);

  const changeLessonState = useDispatch();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [userTheme, setUserTheme] = useState([]);
  const currentTheme = useSelector((state) => state.currentTheme);
  const [adsInfo, setAdsInfo] = useState(null);
  const [isSubscriptionData, setSubscriptionData] = useState(null);
  const dispatch = useDispatch();
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");
  const navigate = useNavigate();
  const [checkAuth, setCheckAuth] = useState(false);
  const [themeCompletionState, setThemeCompletionState] = useState([]);
  const theme = localStorage.getItem("theme");
  const lesson = localStorage.getItem("lesson");

  const lessonsection = localStorage.getItem("lessonsection");
  useEffect(() => {
    console.log("currenttheme", currentTheme);

    if (userToken && usertID) {
      const token = JSON.parse(userToken);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const GetMe = async () => {
        // theme && lesson && lessonsection
        if (false) {
          //
          setUserTheme(JSON.parse(theme));
          //
          setIsPageLoading(false);
        } else {
          try {
            console.log("this is xioa");
            const [response, subscription, adsData] = await axios.all([
              axios.get(`${API_URL}/users/me`, config),
              axios.get(
                `${API_URL}/subscription/user/${JSON.parse(usertID)}`,
                config
              ),
              axios.get(`${API_URL}/advertisement/`, config),
            ]);
            // subscription data
            console.log("subscription---------------------", subscription.data);
            if (subscription?.data.length > 0) {
              setSubscriptionData(subscription.data);
              localStorage.setItem(
                "subscription",
                JSON.stringify(subscription.data)
              );
            }
            if (subscription.data[0]) {
              ("hello");
            } else {
              setAdsInfo(adsData.data);
            }
            localStorage.setItem(
              "languageid",

              JSON.stringify(response.data.language[0].id)
            );
            console.log("userdata", response.data);

            localStorage.setItem("userdata", JSON.stringify(response.data));
            const theme = await axios.get(
              `${API_URL}/theme/language/${response.data.language[0].id}`,
              config
            );
            // manage theme
            console.log("theme", theme.data);
            localStorage.setItem("theme", JSON.stringify(theme.data));
            getTopicCompletionState(theme.data);
            setUserTheme(theme.data);
            //loading false
            setIsPageLoading(false);
          } catch (error) {
            if (error.response.status === 401) {
              Cookies.set("token", "");
              Cookies.set("id", "");
              localStorage.clear();
              navigate("/auth/login");
            }

            console.error("An error occurred while fetching data:", error);
            console.log("Data not found"); // Log a message when data is not found
          }
        }
      };
      GetMe();
    } else {
      setIsPageLoading(false);
      setCheckAuth(true);
    }

    // Rest of your code...
    // find me (end)
    //completed lessions

    // bonus points curur
    // changeLessonState(bonusPointIncrement(9));
  }, []);

  //handle topics

  const handleTheme = (themeID) => {
    const filteGreetings = userTheme.filter((item) => item.id === themeID);
    console.log(filteGreetings);
    if (filteGreetings[0]) {
      // dispatch(ThemeAction(filteGreetings));
      localStorage.setItem("currentTheme", JSON.stringify(filteGreetings));
      console.log("topic found");
      // redirect lessons
      navigate(`/lessons?id=${themeID}`);
    } else {
      if (userToken) {
        setShowModal(true);
      } else {
        navigate("/auth/login");
      }
    }
  };

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const getTopicCompletionState = async (objectsArray) => {
    try {
      const token = JSON.parse(userToken);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const requests = objectsArray.map((obj) =>
        axios.post(
          API_URL + "/status/theme/",
          {
            themeId: obj.id,
            userId: JSON.parse(usertID),
          },
          config
        )
      );
      const responses = await Promise.all(requests);
      const fetchedData = responses.map((response) => response.data);
      console.log("Fetched Data : ", fetchedData)
      setThemeCompletionState(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full">
      {isPageLoading ? (
        <div style={{ marginTop: "200px", paddingBottom: "200px" }}>
          <Loading page={true} message={"S'il vous plaît, attendez!"} />
        </div>
      ) : (
        <div className="w-full">
          {isSubscriptionData === null ? (
            <div className="banner_topic">
              <NavLink to={"/pricing"}>
                <img className="w-100" src="/banner.jpg" alt="" />
              </NavLink>
            </div>
          ) : null}
          <div id="gt">
            {/* {adsInfo && <AdsPage adsInfo={adsInfo} />} */}
            <div>
              <div className="row  px-md-5">
                {userTheme.map((result, themeIndex) => (
                  <div
                    key={result.id}
                    className={`col-12 col-md-6 col-lg-6 col-xl-6 ${
                      userTheme.length === 1 ? "w-100" : ""
                    }`}
                  >
                    <div
                      className="mt-5 card-box w-100 text-center align-self-center"
                      onClick={() => {
                        handleTheme(result.id);
                      }}
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
                          {themeCompletionState[themeIndex]?.data != "En cours" && themeCompletionState.length > 0 && (
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
          </div>
          {showModal && (
            <ErrorModal
              open={showModal}
              error="Aucun sujet trouvé !"
              actionText={"Continuer"}
              setOpen={toggleModal}
            />
          )}
        </div>
      )}
    </div>
  );
}

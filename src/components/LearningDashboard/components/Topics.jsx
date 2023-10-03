import React, { useEffect, useState } from "react";
import "../styles/Lessons.css";
import { NavLink, useNavigate } from "react-router-dom";
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

export default function Topics() {
  const [showModal, setShowModal] = useState(false);

  const changeLessonState = useDispatch();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [userTheme, setUserTheme] = useState([]);
  const currentTheme = useSelector((state) => state.currentTheme);
  const dispatch = useDispatch();
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");
  const navigate = useNavigate();
  const [checkAuth, setCheckAuth] = useState(false);
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
            const response = await axios.get(`${API_URL}/users/me`, config);
            console.log(response.data.language);
            localStorage.setItem(
              "languageid",

              JSON.stringify(response.data.language[0].id)
            );
            const theme = await axios.get(
              `${API_URL}/theme/language/${response.data.language[0].id}`,
              config
            );
            // manage theme
            console.log("theme", theme.data);
            localStorage.setItem("theme", JSON.stringify(theme.data));
            setUserTheme(theme.data);

            // // // // get lesson
            // const lesson = await axios.get(`${API_URL}/lesson/`, config);
            // // mange lesson
            // sessionStorage.setItem("lesson", JSON.stringify(lesson.data));

            // // get lesson section
            // const lessonsection = await axios.get(
            //   `${API_URL}/lessonsection/`,
            //   config
            // );
            // // mange lesson section
            // sessionStorage.setItem(
            //   "lessonsection",
            //   JSON.stringify(lessonsection.data)
            // );
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
    changeLessonState(lessonIncrement(53));

    // bonus points
    changeLessonState(bonusPointIncrement(9));
  }, []);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  //handle topics

  const handleTheme = (themeID) => {
    console.log("hello");

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

  return (
    <div>
      {isPageLoading ? (
        <div style={{ marginTop: "200px" }}>
          <Loading page={true} message={"S'il vous plaît, attendez!"} />
        </div>
      ) : (
        <div id="fullpath">
          <div>
            <div className="lsvg-1">
              <div
                className={"lession-link"}
                onClick={() => handleTheme(userTheme[0] ? userTheme[0].id : "")}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[0]
                        ? `${API_URL}/mediaObject/download/${userTheme[0].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2>{userTheme[0] ? userTheme[0].name : ""}</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-2">
              <div
                onClick={() => handleTheme(userTheme[1] ? userTheme[1].id : "")}
                className={"lession-link"}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[1]
                        ? `${API_URL}/mediaObject/download/${userTheme[1].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2 className="">
                      {userTheme[1] ? userTheme[1].name : ""}
                    </h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-3">
              <div
                onClick={() => handleTheme(userTheme[2] ? userTheme[2].id : "")}
                className={"lession-link"}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[2]
                        ? `${API_URL}/mediaObject/download/${userTheme[2].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2>{userTheme[2] ? userTheme[2].name : ""}</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-4">
              <div
                onClick={() => handleTheme(userTheme[3] ? userTheme[3].id : "")}
                className={"lession-link"}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[3]
                        ? `${API_URL}/mediaObject/download/${userTheme[3].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2>{userTheme[3] ? userTheme[3].name : ""}</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-5">
              <div
                onClick={() => handleTheme(userTheme[4] ? userTheme[4].id : "")}
                className={"lession-link"}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[4]
                        ? `${API_URL}/mediaObject/download/${userTheme[4].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2>{userTheme[4] ? userTheme[4].name : ""}</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-6">
              <div
                onClick={() => handleTheme(userTheme[5] ? userTheme[5].id : "")}
                className={"lession-link"}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[5]
                        ? `${API_URL}/mediaObject/download/${userTheme[5].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2>{userTheme[5] ? userTheme[5].name : ""}</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-7">
              <div
                onClick={() => handleTheme(userTheme[6] ? userTheme[6].id : "")}
                className={"lession-link"}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[6]
                        ? `${API_URL}/mediaObject/download/${userTheme[6].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2>{userTheme[6] ? userTheme[6].name : ""}</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-8">
              <div
                onClick={() => handleTheme(userTheme[7] ? userTheme[7].id : "")}
                className={"lession-link"}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[7]
                        ? `${API_URL}/mediaObject/download/${userTheme[7].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2>{userTheme[7] ? userTheme[7].name : ""}</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-9">
              <div
                onClick={() => handleTheme(userTheme[8] ? userTheme[8].id : "")}
                className={"lession-link"}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[8]
                        ? `${API_URL}/mediaObject/download/${userTheme[8].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2>{userTheme[8] ? userTheme[8].name : ""}</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-10">
              <div
                onClick={() => handleTheme(userTheme[8] ? userTheme[8].id : "")}
                className={"lession-link"}
              >
                <div className="div">
                  <img
                    className="w-100 h-100"
                    src={`${
                      userTheme[8]
                        ? `${API_URL}/mediaObject/download/${userTheme[8].image}`
                        : "/assets/lock1.png"
                    }`}
                    alt=""
                  />
                  <span className="cmt">
                    <h2>{userTheme[8] ? userTheme[8].name : ""}</h2>
                  </span>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleTheme("moreTopic1")}
              className={" lession-link-e"}
            >
              <div className="lsvg-11">
                <div className={""}>
                  <div className="div">
                    <span className="cmt">
                      <div></div>
                    </span>
                  </div>
                </div>
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

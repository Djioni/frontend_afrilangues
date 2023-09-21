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
        if (theme && lesson && lessonsection) {
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

  const handleTheme = (themeName) => {
    console.log("hello");

    const filteGreetings = userTheme.filter((item) => item.name === themeName);
    console.log(filteGreetings);
    if (filteGreetings[0]) {
      // dispatch(ThemeAction(filteGreetings));
      localStorage.setItem("currentTheme", JSON.stringify(filteGreetings));
      console.log("topic found");
      // redirect lessons
      navigate("/lessons");
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
        <Loading page={true} message={"S'il vous plaît, attendez!"} />
      ) : (
        <div id="fullpath">
          <div>
            <div className="lsvg-1">
              <div
                className={"lession-link"}
                onClick={() => handleTheme("greetings")}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Salutations</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-2">
              <div
                onClick={() => handleTheme("givingAndGettingNews")}
                className={"lession-link"}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Donner et prendre des nouvelles</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-3">
              <div
                onClick={() => handleTheme("givingAndGettingNews2")}
                className={"lession-link"}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Donner et prendre des nouvelles</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-4">
              <div
                onClick={() => handleTheme("blessings")}
                className={"lession-link"}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Bennedictions</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-5">
              <div
                onClick={() => handleTheme("blessings2")}
                className={"lession-link"}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Bennedictions</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-6">
              <div
                onClick={() => handleTheme("introduceYourself1")}
                className={"lession-link"}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Se présenter 1</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-7">
              <div
                onClick={() => handleTheme("introduceYourself2")}
                className={"lession-link"}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Se présenter 2</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-8">
              <div
                onClick={() => handleTheme("FiguresAndNumbers")}
                className={"lession-link"}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Chiffres et nombres</h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-9">
              <div
                onClick={() => handleTheme("thePresentative")}
                className={"lession-link"}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Le présentatif </h2>
                  </span>
                </div>
              </div>
            </div>
            <div className="lsvg-10">
              <div
                onClick={() => handleTheme("whatDoYouLike")}
                className={"lession-link"}
              >
                <div className="div">
                  <span className="cmt">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="91"
                      viewBox="0 0 97 91"
                      fill="none"
                    >
                      <path
                        d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                    <h2>Qu’aimes-tu ?</h2>
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
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="97"
                          height="91"
                          viewBox="0 0 97 91"
                          fill="none"
                        >
                          <path
                            d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="lsvg-12">
                <div className={""}>
                  <div className="div">
                    <span className="cmt">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="97"
                          height="91"
                          viewBox="0 0 97 91"
                          fill="none"
                        >
                          <path
                            d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleTheme("moreTopic2")}
              className={"lession-link-e"}
            >
              <div className="lsvg-13">
                <div className={""}>
                  <div className="div">
                    <span className="cmt">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="97"
                          height="91"
                          viewBox="0 0 97 91"
                          fill="none"
                        >
                          <path
                            d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="lsvg-14">
                <div className={""}>
                  <div className="div">
                    <span className="cmt">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="97"
                          height="91"
                          viewBox="0 0 97 91"
                          fill="none"
                        >
                          <path
                            d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={() => handleTheme("moreTopic3")} className="lsvg-15">
              <div className={"lession-link-e"}>
                <div className="div">
                  <span className="cmt">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="97"
                        height="91"
                        viewBox="0 0 97 91"
                        fill="none"
                      >
                        <path
                          d="M97 45.5C97 70.629 75.2858 91 48.5 91C21.7142 91 0 70.629 0 45.5C0 20.371 21.7142 0 48.5 0C75.2858 0 97 20.371 97 45.5Z"
                          fill="#D9D9D9"
                        />
                      </svg>
                    </div>
                  </span>
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

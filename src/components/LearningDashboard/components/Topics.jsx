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

    // bonus points curur
    // changeLessonState(bonusPointIncrement(9));
  }, []);

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
  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };
  return (
    <div>
      {isPageLoading ? (
        <div style={{ marginTop: "200px", paddingBottom: "200px" }}>
          <Loading page={true} message={"S'il vous plaît, attendez!"} />
        </div>
      ) : (
        <div id="">
          <div id="gt">
            <div>
              <div className="row  px-md-5">
                {userTheme.map((result) => (
                  <div
                    key={result.id}
                    className="col-12 col-md-6 col-lg-6 col-xl-6"
                  >
                    <div
                      className="mt-5 card-box w-100 text-center align-self-center"
                      onClick={() => handleTheme(result.id)}
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

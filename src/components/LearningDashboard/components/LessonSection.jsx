import React, { useEffect, useState } from "react";
import "../styles/GrettingLesson.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { API_URL, AUTH_NAME } from "../../../api";
import Loading from "../../Loading";
import { useDispatch, useSelector } from "react-redux";
import ErrorModal from "../../ErrorModal";

const OverflowText = ({ text, maxLength }) => {
  // Check if the text length exceeds the maxLength
  if (text.length > maxLength) {
    // If it does, truncate the text
    const truncatedText = text.slice(0, maxLength) + "...";
    return <p className="text-truncate">{truncatedText}</p>;
  }

  // If the text doesn't exceed the maxLength, display it as is
  return <p>{text}</p>;
};

export default function LearnGrettingLession() {
  // get current section date from session storage

  //
  const demoQuiz = [
    {
      lessonTitle: "Lesson 4: Fill in the Blank",
      questions: [
        {
          questionText: "The capital of France is ________.",
          format: "fillInBlank",
          options: ["Paris", "Berlin", "London", "Madrid"],
          correctAnswer: "Paris",
        },
        {
          questionText: "Who is the world's richest man ________.",
          format: "fillInBlank",
          options: ["Elon Mush", "Jeff Bezos", "Bill Gates"],
          correctAnswer: "Elon Mush",
        },
        {
          questionText:
            "Complete the sentence: Water is composed of ________ and hydrogen.",
          format: "fillInBlank",
          options: ["oxygen", "carbon", "nitrogen"],
          correctAnswer: "oxygen",
        },
      ],
    },
  ];
  //
  const [sectionNotFound, setSectionNotFound] = useState(false);

  const userToken = Cookies.get("token");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const [currentLessonSection, setCurrentLessonSection] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(true); // Start with loading state
  // get lesson and section
  const lessonsections = useSelector((state) => state.lessonsection);

  const [errorMessage, setErrorMessage] = useState(
    "Veuillez d'abord terminer la leçon précédente!"
  );

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
        .get(`${API_URL}/lessonsection/lesson/${id}`, config)
        .then((result) => {
          console.log("dataf", result.data);
          // current data
          if (result.data[0]) {
            localStorage.setItem(
              "currentAllSections",
              JSON.stringify(result.data)
            );
            setCurrentLessonSection(result.data);
            console.log(result.data);
            setIsPageLoading(false);
          } else {
            setSectionNotFound(true);
            setIsPageLoading(false);
            // console.log("okay");
          }
          //
        })
        .catch((error) => {
          console.log(error);
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

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
    navigate(-1);
  };

  // // handle section with onclick

  const handleSection = (sectionID) => {
    console.log("re", sectionID);
    navigate(`/lessons/section/exercise/?id=${sectionID}`);
    localStorage.setItem("currentLessonSectionID", sectionID);
  };

  if (currentLessonSection[0]) {
    return (
      <div>
        {isPageLoading ? (
          <Loading
            full={true}
            page={true}
            message={"S'il vous plaît, attendez!"}
          />
        ) : (
          <div id="lgl">
            <div className="d-flex justify-content-center ">
              <div className="row pb-5 d-flex justify-content-center justify-content-lg-between">
                {currentLessonSection.map((result, index) => (
                  <div
                    onClick={() => handleSection(result.id)}
                    className={`col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 d-flex card_box ${
                      (index + 1) % 2 === 0
                        ? "justify-content-start card_margin_right"
                        : "justify-content-end"
                    } mt-4`}
                    key={result.id}
                  >
                    <div>
                      {result.image ? (
                        <div className="card truncate justify-content-center">
                          <div className="d-flex justify-content-center">
                            <div
                              className="inner-icon mt-2"
                              style={{
                                border: "0",
                              }}
                            >
                              <img
                                className="w-100 h-100 "
                                src={`${API_URL}/mediaObject/download/${result.image}`}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="d-grid justify-content-center">
                            <h2 className="text-wrap text-center">
                              {result.title}
                            </h2>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="card truncate"
                          style={{ display: "grid", justifyContent: "center" }}
                        >
                          <div className="d-flex justify-content-center"></div>
                          <div className="d-grid justify-content-center">
                            <h2 className="text-wrap text-center pb-3">
                              {result.title}
                            </h2>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {sectionNotFound ? (
          <ErrorModal
            open={showModal}
            error={errorMessage}
            actionText={"Continuer"}
            setOpen={toggleModal}
          />
        ) : (
          <Loading
            full={true}
            page={true}
            message={"S'il vous plaît, attendez!"}
          />
        )}
      </div>
    );
  }
}

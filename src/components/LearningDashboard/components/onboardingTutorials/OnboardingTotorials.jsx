import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { QuizValidationAction } from "../../services/actions/QuizValidationAction";
import "./OnboardingTotorials.css";
import QuizProgressBar from "./ProgressBar";
import ImageOption from "./option/ImageOption";
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import DailyGoals from "./dailyGoals/DailyGoals";
import ChoosePath from "./ChoosePath/ChoosePath";

export default function OnboardingTotorials() {
  const data = [
    {
      format: "imageOption",
      title: "Comment nous avez-vous connu ? ",
      option: [
        {
          text: "Famille/Amis",
          media: "/assets/media/black_man_woman.png",
        },
        {
          text: "Moteur de recherche",
          media: "/assets/media/google.svg",
        },
        // {
        //   text: "Nouvelles/article/blog",
        //   media: "/assets/media/blog.svg",
        // },
        {
          text: "YouTube",
          media: "/assets/media/youtube.svg",
        },
        // {
        //   text: "TV",
        //   media: "/assets/media/tv.svg",
        // },
        {
          text: "TikTok",
          media: "/assets/media/tiktok.svg",
        },
        {
          text: "Facebook/Instagram",
          media: "/assets/media/instagram.svg",
        },
        {
          text: "LinkedIn",
          media: "/assets/media/linkedin.png",
        },
        {
          text: "Médias / Presse",
          media: "/assets/media/news.png",
        },
      ],
    },
    {
      format: "imageOption",
      title: "Pourquoi voulez-vous apprendre une langue africaine ?",
      option: [
        {
          text: "Booster mes études",
          media: "/assets/media/whylearn/education.png",
        },
        {
          text: "Voyager en Afrique",
          media: "/assets/media/whylearn/travel.png",
        },
        // {
        //   text: "Passez du temps de manière productive",
        //   media: "/assets/media/whylearn/productively.svg",
        // },
        {
          text: "Discuter avec ma famille, mes amis",
          media: "/assets/media/black_man_woman.png",
        },
        {
          text: "Stimuler mon cerveau",
          media: "/assets/media/cerveau.png",
        },
        {
          text: "Booster mon activité / ma carrière",
          media: "/assets/media/whylearn/career.png",
        },

        {
          text: "Curiosité / Plaisir ",
          media: "/assets/media/others.png",
        },
      ],
    },
    {
      format: "dailyGoal",
      title: "Fixe-toi un objectif quotidien !",
      option: [
        {
          name: "Tranquille",
          time: "5 min / Jour",
        },
        {
          name: "Normal",
          time: "10 min / Jour",
        },
        {
          name: "Intensif",
          time: "15 min / Jour",
        },
        {
          name: "Extrême",
          time: "20 min / Jour",
        },
      ],
    },
    {
      format: "dailyGoal",
      title: "Quel est votre niveau ?",
      option: [
        {
          name: "Débutant",
          time: "",
        },
        {
          name: "Faux débutant ",
          time: "",
        },
        {
          name: "Intermédiaire ",
          time: "",
        },
        {
          name: "Avancé ",
          time: "",
        },
      ],
    },
    // {
    //   format: "choosePath",
    //   title: "Choisissez le parcours d'apprentissage.",
    //   option: [
    //     {
    //       media: "/assets/path1.svg",
    //       title: "Apprendre le français pour la première fois ?",
    //       subTitle: "Commencer à partir de zéro!",
    //     },
    //     {
    //       media: "/assets/path2.svg",
    //       title: "Vous connaissez déjà un peu le français ?",
    //       subTitle: "Vérifiez votre niveau ici !",
    //     },
    //   ],
    // },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [callContinue, setCallContinue] = useState(0);

  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const dispatch = useDispatch();
  const [isOptionActive, setIsOptionActive] = useState(false);
  useEffect(() => {
    dispatch(QuizValidationAction(true));
  }, []);

  const handleCurrentOption = (active) => {
    console.log("handleactive", active);
    setIsOptionActive(active);
  };
  const handleQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      if (isOptionActive) {
        setIsBtnLoading(true);
        setTimeout(() => {
          setCallContinue((prev) => prev + 1);
          setCurrentQuestionIndex((prev) => prev + 1);
          setIsOptionActive(false);
          setIsBtnLoading(false);
        }, 500);
      }
    }
  };
  const handleBackQuestion = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
    setIsOptionActive(false);
  };

  return (
    <div id="onb_t">
      <div>
        <div className="container_main">
          <div className="progress_container container">
            <QuizProgressBar
              handleBackQuestion={handleBackQuestion}
              progress={currentQuestionIndex}
              totalQuestions={data.length - 1}
            />
          </div>

          <div
            className={`hellohello container ${
              data[currentQuestionIndex].format === "dailyGoal" ||
              data[currentQuestionIndex].format === "choosePath"
                ? "daily_goal_question_body"
                : ""
            }`}
          >
            <div>
              <div>
                <h3 className="onb_t_title text-center">
                  {data[currentQuestionIndex].title}
                </h3>
              </div>
              <div>
                {data[currentQuestionIndex].format === "imageOption" ? (
                  <ImageOption
                    currentQuestionIndex={currentQuestionIndex}
                    callContinue={callContinue}
                    handleCurrentOption={handleCurrentOption}
                    data={data[currentQuestionIndex]}
                  />
                ) : data[currentQuestionIndex].format === "dailyGoal" ? (
                  <DailyGoals
                    currentQuestionIndex={currentQuestionIndex}
                    callContinue={callContinue}
                    handleCurrentOption={handleCurrentOption}
                    data={data[currentQuestionIndex]}
                  />
                ) : data[currentQuestionIndex].format === "choosePath" ? (
                  <ChoosePath
                    handleCurrentOption={handleCurrentOption}
                    data={data[currentQuestionIndex]}
                  />
                ) : (
                  ""
                )}

                {/**/}
              </div>
              <div
                className={`continue_btn ${
                  data[currentQuestionIndex].format === "choosePath"
                    ? "d-none"
                    : "d-block"
                }`}
              >
                <button
                  onClick={handleQuestion}
                  className={`${isOptionActive ? "btn_active " : "btn_disabled"}
                  ${isBtnLoading ? "btn_border_none" : ""}`}
                >
                  {isBtnLoading ? (
                    <div style={{ marginTop: "1px" }}>
                      <BeatLoader className="loader" color="white" />
                    </div>
                  ) : (
                    "CONTINUER"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

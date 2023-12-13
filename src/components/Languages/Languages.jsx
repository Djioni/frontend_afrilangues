import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for navigation
import Data from "./DummyData.json";
import LanguageCard from "./LanguageCard";
import { useDispatch, useSelector } from "react-redux";
import { GetLanguageAction } from "./services/actions/LanguageAction";
import Cookies from "js-cookie";
import Loading from "../Loading";
import { API_URL } from "../../api";
import axios from "axios";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { ID_LENGTH, TOKEN_LENGTH } from "../../auth/length";

function Languages() {
  const { language } = useSelector((state) => state.language);
  let [languageData, setLanguageData] = useState(null);
  let [isPageLoading, setIsPageLoading] = useState(true);
  const [selectLan, setSelectlan] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("");
  console.log("language!", language);
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");

  const navigate = useNavigate();

  const { languages } = Data;
  const displathLanguage = useDispatch();

  // check language data

  const GetLanguages = () => {
    axios
      .get(`${API_URL}/language/member`)
      .then((result) => {
        console.log(result.data);
        setLanguageData(result.data);
        setIsPageLoading(false);
      })
      .catch((error) => {
        console.log("language eroor", error.message);
        GetLanguages();
      });
  };

  // redirect dashboard secton (end)
  //user data
  const cookies = Cookies.get("user");
  const RedirectDashboard = () => {
    //

    //
    if (userToken && usertID) {
      const tokenLength = JSON.parse(userToken).length;
      const idLength = JSON.parse(usertID).length;

      if (tokenLength > TOKEN_LENGTH && idLength > ID_LENGTH) {
        console.log("direct dashboard");

        navigate("/dashboard");
      } else {
        setIsPageLoading(false);
      }
    } else {
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    console.log("hello world");
    RedirectDashboard();
  }, []);
  useEffect(() => {
    GetLanguages();

    return () => {
      console.log("unmount");
    };
  }, []);
  // redirect dashboard section (end)

  const SelectedLanguage = (value) => {
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const userSelectedLanguage = value.name;
    setCurrentLanguage(userSelectedLanguage);

    if (userSelectedLanguage) {
      setSelectlan(true);
    }

    displathLanguage(GetLanguageAction(userSelectedLanguage));
    console.log(userSelectedLanguage);
  };

  // Check if languageData is not null before using it
  if (isPageLoading || languageData === null) {
    return (
      <Loading full={true} page={true} message={"S'il vous plaît, attendez"} />
    );
  }

  if (selectLan && currentLanguage) {
    return <Register />;
  }

  if (!userToken && !isPageLoading) {
    return (
      <div>
        <div className="back-button"></div>
        <div
          className="w-100 h-100 d-flex flex-column justify-content-start align-items-center rounded-4 py-4 px-4"
          style={{ minHeight: "100vh", background: "#F6F6F6" }}
        >
          <div className="h-auto w-100 d-flex flex-column gap-5 align-items-center justify-content-start mx-auto rounded-4 slide-in">
            <div
              className="position-relative"
              style={{ height: "100px", width: "105px" }}
            >
              <img
                src={"/assets/logo.png"}
                alt=""
                className="w-100 h-100 object-fit-fill "
              />
            </div>
            <div className="page-title">
              <h2 className="fw-medium text-white">Je voudrais apprendre le</h2>
            </div>
            <div className="languages-grid-container">
              {languageData.map(({ language, member }, index) => (
                <div
                  key={index}
                  onClick={() => SelectedLanguage(language, index)}
                >
                  <LanguageCard
                    members={member}
                    logo={`${API_URL}/mediaObject/download/${language.image}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;

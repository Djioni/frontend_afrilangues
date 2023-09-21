import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for navigation
import Data from "./DummyData.json";
import LanguageCard from "./LanguageCard";
import { useDispatch, useSelector } from "react-redux";
import { GetLanguageAction } from "./services/actions/LanguageAction";
import Cookies from "js-cookie";
import Loading from "../Loading";

function Languages() {
  const { language } = useSelector((state) => state.language);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const navigate = useNavigate();

  const { languages } = Data;
  const displathLanguage = useDispatch();

  // redirect dashboard secton (end)
  //user data
  const cookies = Cookies.get("user");
  const RedirectDashboard = () => {
    if (cookies) {
      const userData = JSON.parse(cookies);
      if (
        userData.email &&
        userData.id &&
        userData.token &&
        userData.username
      ) {
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
    RedirectDashboard();
  }, []);
  // redirect dashboard section (end)

  const SelectedLanguage = (value) => {
    function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const userSelectedLanguage = value.name;

    displathLanguage(GetLanguageAction(userSelectedLanguage));
    console.log(userSelectedLanguage);
  };
  return (
    <div>
      {isPageLoading ? (
        <Loading page={true} message={"S'il vous plaît, attendez"} />
      ) : (
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
              {languages.map((item, index) => (
                <NavLink
                  key={item.logo}
                  to={"/auth/register"}
                  onClick={() => SelectedLanguage(item, index)}
                >
                  <LanguageCard
                    key={index}
                    members={item.members}
                    logo={item.logo}
                  />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Languages;

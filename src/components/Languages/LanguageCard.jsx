import React from "react";
import { NavLink } from "react-router-dom";
import "./languageCard.css";
function LanguageCard({ logo, language }) {
  return (
    <NavLink className="w-100 d-flex flex-column align-items-center justify-content-start gap-1 gap-md-4 text-decoration-none language-card">
      <div
        className="position-relative rounded-circle"
        style={{ width: "60%", height: "60%" }}
      >
        <img
          src={logo}
          className="w-100 h-100 object-fit-fill rounded-circle"
          alt=""
        />
      </div>
      {language && language.member ? (
        <p className="text-black">{language?.member} members</p>
      ) : (
        <p className="text-black">{language?.name}</p>
      )}
    </NavLink>
  );
}

export default LanguageCard;

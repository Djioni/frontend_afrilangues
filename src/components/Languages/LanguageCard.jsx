import React from "react";
import { NavLink } from "react-router-dom";
import "./languageCard.css";
function LanguageCard({ logo, members }) {
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

      <p>{members} members</p>
    </NavLink>
  );
}

export default LanguageCard;

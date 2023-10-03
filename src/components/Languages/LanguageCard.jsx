import React from "react";
import { NavLink } from "react-router-dom";

function LanguageCard({ logo, members }) {
  return (
    <NavLink className="w-100 d-flex flex-column align-items-center justify-content-start gap-4 text-decoration-none language-card">
      <div
        className="position-relative rounded-circle "
        style={{ height: "120px", width: "120px" }}
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

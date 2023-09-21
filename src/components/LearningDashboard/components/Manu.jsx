import React from "react";
import "../styles/Navber_Manu.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Manu(props) {
  const { onToggleData } = props;

  const handleToggle = () => {
    onToggleData("remove-toggle");
  };
  return (
    <div className="manu">
      <div className="">
        <div className="close-manu p-3 d-flex justify-content-end">
          <span>
            <AiFillCloseCircle
              className="close-manu-btn"
              onClick={handleToggle}
            />
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <img className="logo" src={"/assets/logo.svg"} alt="Logo" />
        </div>
        <div>
          {" "}
          <ul className="nav-list">
            <li className=" ">
              <a href={"/process"}>PROGRESSION</a>
            </li>

            <hr />
            <li className=" ">
              <a href={"/dashboard"}> MES COURS</a>
            </li>
            <hr />
            <li className="">
              <a href="/"> RÉVISION</a>
            </li>
            <hr />
            <li className=" ">
              <a href="/"> DICTIONNAIRE</a>
            </li>
            <hr />
            <li className="">
              <a href="/">AIDECOURS EN DIRECT </a>
            </li>
            <hr />
            <li className="">
              <a href="/">TARIFS</a>
            </li>
            <hr />
            <li className="">
              <a href="/">AIDE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

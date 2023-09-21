import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // HANDLING TOGGLE MENU
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="navigation_wrapper">
      <div className="navigation_container container">
        <div className="logo_container">
          <a href="#">
            <img src={logo} alt="Logo" className="img-fluid" />
          </a>
        </div>

        <button className="menu_btn" onClick={handleToggleMenu}>
          <IoMenu />
        </button>

        <nav className={toggleMenu && "active"}>
          <button className="close_btn" onClick={handleToggleMenu}>
            <IoMdClose />
          </button>
          <ul>
            <li>
              <a href="#">MES COURS</a>
            </li>
            <li>
              <a href="#">TARIFS</a>
            </li>
            <li>
              <a href="#">POUR LES ÉCOLES</a>
            </li>
            <li>
              <a href="#">POUR LES PROS</a>
            </li>
            <li>
              <NavLink to={"/auth/login"}>
                {" "}
                <button>JE ME CONNECTE</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;

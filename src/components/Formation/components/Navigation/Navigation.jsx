import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="root-navigation_wrapper w-100">
      <div className="navigation_wrapper">
        <div className="navigation_container w-100 px-3 px-md-5">
          <div className="logo_container">
            <div
              style={{ cursor: "pointer", zIndex: "22" }}
              onClick={() => {
                // if (userToken && userID) {
                //   navigate("/dashboard");
                // } else {
                //   navigate("/");
                // }
             
              }}
            >
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>
          </div>

          <button className="menu_btn" onClick={handleToggleMenu}>
            <IoMenu />
          </button>

          <nav className={toggleMenu && "active"}>
            <button className="close_btn" onClick={handleToggleMenu}>
              <IoMdClose />
            </button>
            <ul>
              <div>
                <li className="dropdown_option">
                  <a href="#">
                    COURS DE LANGUES AFRICAINES <IoIosArrowDown />
                  </a>
                  <div className="optionbox">
                    <div>
                      <a href="https://play.google.com/store/apps/details?id=com.afrilangues.app">
                        COURS PRIVÉS
                      </a>
                      <a href="https://apps.apple.com/fr/app/afrilangues-officiel/id1511912820">
                        COURS COLLEFTIFS
                      </a>
                    </div>
                  </div>
                </li>
              </div>
              <li>
                <a href="#">TARIFS</a>
              </li>

              <li>
                <a href="#">POUR LES PROS</a>
              </li>
              <li>
                <a href={"/auth/login"}>
                  {" "}
                  <button>JE ME CONNECTE</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

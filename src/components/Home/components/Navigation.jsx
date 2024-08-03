import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Logo() {
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");
  const navigate = useNavigate();
  return (
    <img
      onClick={() => {
        if (userToken && usertID) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }}
      className="navbar-logo tw-cursor-pointer"
      loading="lazy"
      src="/images/logo.png"
      alt="Company logo"
      style={{
        width: "53px",
        aspectRatio: "0.92",
        objectFit: "contain",
        objectPosition: "center",
      }}
    />
  );
}

function NavLink1({ children, href, target }) {
  return (
    <a className="nav-link" href={href} target={target}>
      {children}
    </a>
  );
}

function ConnectButton() {
  return (
    <div className="connect-button" tabIndex="0" role="button">
      <a
        href="https://africalangues.com/auth/login"
        className="text-decoration-none text-white"
      >
        CONNEXION
      </a>
    </div>
  );
}

function Dropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button className="dropdown-button">
        COURS DE LANGUES AFRICAINES
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <a href="#">COURS PARTICULIERS</a>
          <a href="#">COURS COLLECTIFS</a>
        </div>
      )}
    </div>
  );
}

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "hidden" : ""}`}>
      <Logo />
      <div className={`nav-links ${isMenuOpen ? "mobile-menu" : ""}`}>
        <div className="link-container ">
          <Dropdown />
          <Link to="/reservation" className="nav-link">
            INTERPRÉTARIAT
          </Link>
          <Link to="/devis" className="nav-link">
            TRADUCTION
          </Link>
          <NavLink1 href="https://shop.afrilangues.fr" target="_blank">
            BOUTIQUE
          </NavLink1>
          <div className="d-none tw-no-underline">
            <NavLink1
              className="tw-text-decoration-none tw-no-underline"
              href="#"
            >
              BLOG
            </NavLink1>
          </div>
          <NavLink className={"tw-no-underline"} to="/auth/login">
            <ConnectButton />
          </NavLink>
        </div>
      </div>
      <img
        src="/images/hamburger.png"
        className="menu-hamburger"
        onClick={() => setMenuOpen(!isMenuOpen)}
        alt="Menu Icon"
      ></img>
    </nav>
  );
}

function Navigation() {
  return (
    <>
      <Nav />
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(133, 129, 129, 0.5);
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 35px;
          gap: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }

        .navbar.hidden {
          transform: translateY(-100%);
        }

        @media (max-width: 991px) {
          .navbar {
            flex-wrap: wrap;
            padding: 0 20px;
          }

          .navbar.hidden {
            transform: none;
          }
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 65px;
        }

        .link-container {
          display: flex;
          align-items: center;
          gap: 65px;
        }

        @media (max-width: 991px) {
          .link-container {
            flex-wrap: wrap;
          }
        }

        .navbar .menu-hamburger {
          display: none;
          position: absolute;
          top: 13px;
          right: 15px;
          width: 35px;
        }

        @media screen and (max-width: 1415px) {
          .navbar {
            padding: 0;
          }

          .navbar .menu-hamburger {
            display: block;
            top: 20px;
            right: 20px;
          }

          .nav-links {
            display: none;
          }

          .navbar .navbar-logo {
            position: absolute;
            top: 20px;
            left: 20px;
          }
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(15px);
          justify-content: center;
          transition: all 0.5s ease;
        }

        .mobile-menu .link-container {
          flex-direction: column;
        }

        .mobile-menu .link-container > div {
          margin: 25px 0;
          font-size: 1.2em;
        }

        .nav-link,
        .connect-button {
          margin: auto 0;
          font-family: Montserrat, sans-serif;
          font-weight: bold;
          text-transform: uppercase;
          color: #000;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #df5411;
        }

        .connect-button {
          border-radius: 10px;
          background-color: #000;
          color: #fff;
          padding: 21px 28px;
          text-align: center;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .connect-button:hover {
          background-color: #df5411;
          color: #fff;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-button {
          background: none;
          border: none;
          font-family: Montserrat, sans-serif;
          font-weight: bold;
          font-size: 1.2em;
          text-transform: uppercase;
          color: #000;
          cursor: pointer;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .dropdown-content a:hover {
          background-color: #df5411;
          color: #fff;
        }

        .dropdown:hover .dropdown-button {
          color: #df5411;
        }
      `}</style>
    </>
  );
}

export default Navigation;

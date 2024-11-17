/** @format */

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Assuming you have React Router for navigation
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";

import "./Login.css";
import { HiMiniLockClosed } from "react-icons/hi2";
import ErrorModal from "../ErrorModal";
import TextInput from "../TextInput";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../../auth/services/actions/AuthAction";
import { API_URL } from "../../api";
import Loading from "../Loading";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Howl } from "howler";
import Cookies from "js-cookie";
import { ID_LENGTH, TOKEN_LENGTH } from "../../auth/length";
import "../../App.css";
import { CurrentPathAction } from "../LearningDashboard/services/actions/CurrentPathAction";
import { Navigation } from "../Home";
import GoogleCaptchaVerification from "../Captcha/GoogleCaptchaComponent";

const Login = () => {
  const current_url_path = sessionStorage.getItem("current_url_path");
  const disPatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const dispatchAuth = useDispatch();
  const navitate = useNavigate();
  const [isLoading, setIsLoading] = useState("");
  const [isPageLoading, setIsPageLoding] = useState(false);
  const { token, id } = useSelector((state) => state.auth);
  const currentPath = useSelector((state) => state.currentPath);
  const [isReCaptcha, setIsReCaptcha] = useState(null);
  const [showPassword, setShowPassword] = useState(true); // State to control password visibility
  const [passwordInputType, setPasswordInputType] = useState("password"); // Initial input type is password
  const [showEmail, setShowEmail] = useState(true); // State to control email/username visibility
  const [emailInputType, setEmailInputType] = useState("text"); // Initial input type is text
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");

  const RedirectDashboard = () => {
    if (userToken && usertID) {
      const tokenLength = JSON.parse(userToken).length;
      const idLength = JSON.parse(usertID).length;

      if (tokenLength > TOKEN_LENGTH && idLength > ID_LENGTH) {
        navitate("/dashboard");
      } else {
        setIsPageLoding(false);
      }
    } else {
      setIsPageLoding(false);
    }
  };

  useEffect(() => {
    RedirectDashboard();
  }, []);

  const [wrongSound] = useState(
    new Howl({
      src: ["/sounds/wrong.mp3"],
    })
  );
  const [successSound] = useState(
    new Howl({
      src: ["/sounds/success_login.mp3"],
    })
  );

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setIsFormFilled(true);
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const { email, password } = inputs;
  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [email, password]);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormFilled) {
      setShowModal(true);
      wrongSound.play();
    }
    if (isFormFilled && isReCaptcha) {
      setIsLoading(true);
      const userSchma = {
        username: email,
        password,
      };
      axios
        .post(`${API_URL}/auth/login`, userSchma)
        .then((result) => {
          setIsLoading(true);
          if (result.status === 200) {
            localStorage.clear();
            const token = result.data.token;
            const id = result.data.id;

            Cookies.set("token", JSON.stringify(token), { expires: 7 });
            Cookies.set("id", JSON.stringify(id), { expires: 7 });
            sessionStorage.clear();
            setIsLoading(false);
            toast.success("Connexion réussie!!!!!!👌", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            //direact login page
            if (current_url_path) {
              window.location.href = current_url_path;
              sessionStorage.removeItem("current_url_path");
            } else {
              navitate("/dashboard");
            }
          }
        })
        .catch((error) => {
          setIsLoading(false);

          wrongSound.play();
          toast.error(
            `${error.message || "Tous les champs doivent etre remples!"}🤯`,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        });
      // send request section(end)
    }
  };
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPasswordInputType(showPassword ? "text" : "password");
  };

  // Function to toggle email/username visibility
  const toggleEmailVisibility = () => {
    setShowEmail(!showEmail);
    setEmailInputType(showEmail ? "text" : "password");
  };

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const submitCaptchaToken = (tokenString) => {
    try {
      axios
        .post(
          `${API_URL}/captcha/submit`,
          { recaptchaToken: tokenString },
          null
        )
        .then((result) => {
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    } catch (x) {
      console.log(x);
    }
  };

  if (!userToken) {
    return (
      <div>
        <Navigation />
        {isPageLoading && !userToken ? (
          <Loading message="S'il vous plaît, attendez" page={true} />
        ) : (
          <div
            className="w-100 h-100 d-flex flex-column justify-content-center  align-items-center rounded-4 "
            style={{ minHeight: "100vh", background: "#F6F6F6" }}
          >
            <div className="d-lg-grid h-auto mx-auto rounded-4 login-grid-container slide-in">
              {/* left section */}
              <form
                onSubmit={handleSubmit}
                className="h-100 d-flex flex-column flex-grow-1 justify-content-center align-items-center gap-2 p-lg-5 p-2 login-left-section"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle user-img-wrapper p-4"
                  style={{ overflow: "hidden" }}
                >
                  <div className=" position-relative user-img">
                    <img
                      src={"/assets/onboy.png"}
                      alt=""
                      className=" object-fit-fill "
                    />
                  </div>
                </div>
                <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-2 tw-mb-2">
                  <div className="eye_box">
                    <TextInput
                      name="email"
                      value={inputs.email}
                      setValue={handleInputs}
                      type={emailInputType} // Dynamically set input type
                      placeholder="Votre e-mail ou nom d'utilisateur"
                      icon={<HiOutlineMail className="input-icon" />}
                      required={false}
                      // Add an eye icon to toggle email/username visibility
                      suffix={
                        <span
                          className="password-toggle-icon"
                          onClick={toggleEmailVisibility}
                        >
                          {showEmail ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                        </span>
                      }
                    />
                    {/* <div className="eye_icon">
                    <span
                      className="password-toggle-icon "
                      onClick={toggleEmailVisibility}
                    >
                      {showEmail ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </span>
                  </div> */}
                  </div>

                  <div className="eye_box">
                    <TextInput
                      name="password"
                      value={inputs.password}
                      setValue={handleInputs}
                      type={passwordInputType} // Dynamically set input type
                      placeholder="Mot de passe"
                      icon={<HiOutlineLockClosed className="input-icon" />}
                      required={false}
                      // Add an eye icon to toggle password visibility
                    />
                    <div className="eye_icon">
                      <span
                        className="password-toggle-icon"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiFillEye />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <GoogleCaptchaVerification
                  captchaVerificationDone={setIsReCaptcha}
                  alignment="center"
                />
                <button
                  type="submit"
                  className="mainGradient border-0 py-2 rounded-3 text-white language-btn"
                >
                  Connexion{" "}
                  {isLoading && (
                    <div className="px-1 d-inline-block">
                      <div
                        class="spinner-border spinner-border-sm"
                        style={{ height: "15px", width: "15px" }}
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                </button>

                <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-1">
                  <NavLink
                    to="/forgetpassword"
                    className="text-center text-decoration-none text-black"
                  >
                    Mot de passe oublié ?
                  </NavLink>
                  <NavLink to="/auth/register" className="outlined-link">
                    Créer un compte ?
                  </NavLink>
                </div>
              </form>

              {/* right section */}
              <div className=" h-100 d-lg-flex d-none flex-column align-items-center justify-content-center gap-4 p-5 mainGradient login-right-section">
                <div className="bg-white rounded-circle p-4">
                  <div className="position-relative rounded-circle  login-logo-img white-shadow">
                    <img
                      src={"/assets/logo.png"}
                      className="w-100 h-100 object-fit-fill "
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ErrorModal component */}
            {showModal && (
              <ErrorModal
                open={showModal}
                error="Veuillez remplir tous les champs.              "
                actionText={"Continuer"}
                setOpen={toggleModal}
              />
            )}
          </div>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
};

export default Login;

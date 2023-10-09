import React, { useState, useEffect, useSyncExternalStore } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Assuming you have React Router for navigation

import { HiOutlineMail } from "react-icons/hi";
import { HiMiniLockClosed } from "react-icons/hi2";
import ErrorModal from "./ErrorModal";
import TextInput from "./TextInput";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../auth/services/actions/AuthAction";
import { API_URL } from "../api";
import Loading from "./Loading";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Howl } from "howler";
import Cookies from "js-cookie";
import { ID_LENGTH, TOKEN_LENGTH } from "../auth/length";

import { CurrentPathAction } from "./LearningDashboard/services/actions/CurrentPathAction";
const ForgetPasswd = () => {
  const disPatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const dispatchAuth = useDispatch();
  const navitate = useNavigate();
  const [isLoading, setIsLoading] = useState("");
  const [isPageLoading, setIsPageLoding] = useState(false);
  const { token, id } = useSelector((state) => state.auth);
  const currentPath = useSelector((state) => state.currentPath);

  // redirect dashboard secton (end)
  //user data
  console.log("curr", currentPath);
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");

  // redirect dashboard section (end)
  const RedirectDashboard = () => {
    //

    //
    if (userToken && usertID) {
      const tokenLength = JSON.parse(userToken).length;
      const idLength = JSON.parse(usertID).length;

      if (tokenLength > TOKEN_LENGTH && idLength > ID_LENGTH) {
        console.log("direct dashboard");

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

    return () => {};
  }, []);
  // souonds
  const [wrongSound] = useState(
    new Howl({
      src: ["/sounds/wrong.mp3"],
    })
  );
  const [successSound] = useState(
    new Howl({
      src: ["/sounds/success.mp3"],
    })
  );

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const { email, password } = inputs;
  useEffect(() => {
    if (email !== "") {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [email, password]);
  const handleSubmit = (e) => {
    console.log({ email, password });
    e.preventDefault();
    console.log(isFormFilled);
    if (!isFormFilled) {
      setShowModal(true);
      wrongSound.play();
    }
    if (isFormFilled) {
      console.log("hello word");
      setIsLoading(true);
      // send request section (start)
      const userSchma = {
        username: email,
        password,
      };
      axios
        .post(`${API_URL}/password/forgot/mail`, userSchma)
        .then((result) => {
          setIsLoading(true);
          console.log(result.status);
          if (result.status === 200) {
            console.log(result.data);
            const token = result.data.token;
            const id = result.data.id;
            // get some resources

            //end
            Cookies.set("token", JSON.stringify(token), { expires: 7 });
            Cookies.set("id", JSON.stringify(id), { expires: 7 });
            sessionStorage.clear();
            successSound.play();
            setIsLoading(false);
            toast.success(
              "Succès! Un e-mail de réinitialisation du mot de passe a été envoyé.👌",
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

            //direact login page

            console.log("ready for redirect");
            if (currentPath === "/lessonfdfs") {
              navitate("/lessons");
            }
            if (currentPath === "lessons/section/") {
              navitate("/lessons/section/");
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
  return (
    <div>
      {isPageLoading ? (
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
              <div className="d-flex align-items-center justify-content-center rounded-circle user-img-wrapper p-4">
                <div className=" position-relative user-img">
                  <img
                    src={"/assets/user.png"}
                    alt=""
                    className="w-100 h-100 object-fit-fill "
                  />
                </div>
              </div>
              <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-2 mb-4">
                <TextInput
                  name="email"
                  value={inputs.email}
                  setValue={handleInputs}
                  type="email"
                  placeholder="Email"
                  icon={<HiOutlineMail className="input-icon" />}
                  required={false}
                />
              </div>

              <button
                type="submit"
                className="mainGradient border-0 py-2 rounded-3 text-white language-btn"
              >
                Réinitialiser{" "}
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
              error="Tous les champs doivent etre remples"
              actionText={"Continuer"}
              setOpen={toggleModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ForgetPasswd;

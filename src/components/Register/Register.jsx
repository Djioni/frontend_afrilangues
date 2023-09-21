import React, { useState, useEffect } from "react";

import { HiOutlineMail, HiOutlineCheckCircle } from "react-icons/hi";
import { HiMiniLockClosed } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiPhoneCall, BiLockAlt } from "react-icons/bi";
import ErrorModal from "../ErrorModal";
import { NavLink, useNavigate } from "react-router-dom";
import TextInput from "../TextInput";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API_URL } from "../../api";
import { Howl } from "howler";
import Loading from "../Loading";
import Cookies from "js-cookie";
import { ID_LENGTH, TOKEN_LENGTH } from "../../auth/length";
import "../../App.css";
const Register = () => {
  const { language } = useSelector((state) => state.language);

  const ragistationStatus = "ok";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Tous les champs doivent etre remples"
  );
  const languageValidator = () => {
    if (!language) {
      navigate("/auth/languages");
    }
  };
  languageValidator();
  // redirect dashboard secton (end)
  //user data
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");
  console.log(userToken, usertID);
  const RedirectDashboard = () => {
    if (userToken && usertID) {
      const tokenLength = JSON.parse(userToken).length;
      const idLength = JSON.parse(usertID).length;

      if (tokenLength > TOKEN_LENGTH && idLength > ID_LENGTH) {
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
    return () => {
      RedirectDashboard();
    };
  }, []);
  // redirect dashboard section (end)
  const [apiCall, setApiCall] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    address: "",
    telephone: "",
    username: "", // Define 'username' before 'confirmPassword'
    confirmPassword: "",
  });

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
  const toggleModal = () => {
    setShowModal((prevalue) => !prevalue);
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const {
    email,
    password,
    confirmPassword,
    telephone,
    address,
    name,
    username,
  } = inputs;

  useEffect(() => {
    if (
      email !== "" &&
      username !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      address !== "" &&
      telephone !== "" &&
      name !== ""
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [email, password, confirmPassword, telephone, address, name, username]);

  const handleSubmit = (e) => {
    //

    e.preventDefault();
    if (!isFormFilled) {
      setShowModal(true);
      wrongSound.play();
    }
    if (isFormFilled) {
      console.log(inputs);
      if (inputs.confirmPassword === inputs.password && inputs.password) {
        setIsLoading(true);
        const userSchma = {
          username: username,
          email: email,
          roles: ["string"],
          password: "123456",
          language: [language],
          firstName: name,
          lastName: name,
          phone: telephone,
          address: {
            street: address,
            additional: address,
            city: address,
            postalCode: address,
          },
        };
        console.log(userSchma);
        //send request and handle error (start)
        axios
          .post(`${API_URL}/auth/register`, userSchma)
          .then((result) => {
            console.log(result.status);
            if (result.status === 200) {
              successSound.play();
              setIsLoading(false);
              toast.success("Inscription terminée avec succès!!!👌", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setTimeout(() => {
                //direact login page
                navigate("/auth/login");
              }, 4000);
            }
          })
          .catch((error) => {
            setIsLoading(false);
            wrongSound.play();
            toast.error(
              `${
                error.response.data.data ||
                "Tous les champs doivent etre remples!"
              }🤯`,
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
        // request end
      }
      //
    }

    if (!(inputs.confirmPassword === inputs.password)) {
      setErrorMessage("Tous les champs doivent etre remples");
      setShowModal(true);
      wrongSound.play();
    }
  };

  return (
    <div>
      {isPageLoading ? (
        <Loading page={true} message={"S'il vous plaît, attendez"} />
      ) : (
        <div
          className="w-100 h-100 d-flex flex-column justify-content-center  align-items-center rounded-4"
          style={{ minHeight: "100vh", background: "#F6F6F6" }}
        >
          <div className="d-lg-grid h-auto mx-auto rounded-4 register-grid-container slide-in">
            {/* left section */}
            <form
              onSubmit={handleSubmit}
              className="h-100 d-flex flex-column flex-grow-1 justify-content-center align-items-center gap- p-lg-5 p-2 login-left-section"
            >
              <div className="d-flex align-items-center justify-content-center rounded-circle user-img-group-wrapper p-1">
                <div className=" position-relative user-group-img">
                  <img
                    src={"/assets/user-group.png"}
                    alt=""
                    fill
                    className="w-100 h-100 object-fit-fill "
                  />
                </div>
              </div>
              <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-3 mb-4">
                <TextInput
                  name="name"
                  value={inputs.name}
                  setValue={handleInputs}
                  type="text"
                  style="register-input"
                  placeholder="Nom & Prénom *"
                  icon={<AiOutlineUser className="input-icon" />}
                  required={false}
                />
                <TextInput
                  name="username"
                  value={inputs.username}
                  setValue={handleInputs}
                  type="text"
                  style="register-input"
                  placeholder="Nom d'utilisateur *"
                  icon={<AiOutlineUser className="input-icon" />}
                  required={false}
                />

                <TextInput
                  name="email"
                  value={inputs.email}
                  setValue={handleInputs}
                  type="email"
                  style="register-input"
                  placeholder="Email *"
                  icon={<HiOutlineMail className="input-icon" />}
                  required={false}
                />
                <TextInput
                  name="address"
                  value={inputs.address}
                  setValue={handleInputs}
                  type="text"
                  style="register-input"
                  placeholder="Addresse "
                  icon={<MdOutlineLocationOn className="input-icon" />}
                  required={false}
                />
                <TextInput
                  name="telephone"
                  value={inputs.telephone}
                  setValue={handleInputs}
                  type="tel"
                  style="register-input"
                  placeholder="Téléphone "
                  icon={<BiPhoneCall className="input-icon" />}
                  required={false}
                />
                <div className="w-100 d-flex flex-sm-row flex-column align-items-center  justify-content-between gap-sm-2 gap-3">
                  <TextInput
                    name="password"
                    value={inputs.password}
                    setValue={handleInputs}
                    type="password"
                    style="register-input"
                    placeholder="Mot de passe *"
                    icon={<BiLockAlt className="input-icon" />}
                    required={false}
                  />
                  <TextInput
                    name="confirmPassword"
                    value={inputs.confirmPassword}
                    setValue={handleInputs}
                    type="password"
                    style="register-input"
                    placeholder="Confirmation *"
                    icon={<HiOutlineCheckCircle className="input-icon" />}
                    required={false}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mainGradient border-0 py-2 rounded-3 text-white language-btn"
              >
                Créer un compte
              </button>

              <NavLink
                to={"/auth/login"}
                className=" mainGradient border-0  py-2 px-5 rounded-3 text-white text-decoration-none fw-bold "
              >
                Connexion
              </NavLink>
            </form>

            {/* right section */}
            <div className=" h-100 d-lg-flex d-none flex-column align-items-center justify-content-center gap-4 p-5 mainGradient login-right-section">
              <div className="bg-white rounded-circle p-4 white-shadow">
                <div className="position-relative login-logo-img rounded-circle ">
                  <img
                    src={"/assets/logo.png"}
                    className="w-100 h-100 object-fit-fill "
                    fill
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {showModal && (
            <ErrorModal
              open={showModal}
              error={errorMessage}
              actionText={"Continuer"}
              setOpen={toggleModal}
            />
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
          {/* Same as */}
          <ToastContainer />
          {isLoading && <Loading message="S'il vous plaît, attendez" />}
        </div>
      )}
    </div>
  );
};

export default Register;

import { useState } from "react";
import MonProfilLeft from "./MonProfilLeft";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { RxEnvelopeClosed } from "react-icons/rx";
import { RiLock2Line } from "react-icons/ri";
import "../Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL, AUTH_NAME } from "../../../api";
import axios from "axios";
import { Howl } from "howler";
const editMonProfilStyle = {
  border: "0.5px solid red",
  margin: "auto",
  marginTop: "150px",
  height: "502px",
  maxWidth: "1336px",
};

const leftColStyle = {
  flex: "0 0 30%",
};

const rightColStyle = {
  flex: "1",
  marginTop: "40px",
  marginLeft: "25px",
};

const iconStyle = {
  position: "absolute",
  top: "50%",
  left: "14px",
  transform: "translateY(-50%)",
  color: "#fe5d0d",
  fontSize: "16px",
  backgroundColor: "#fff",
};

const inputStyle = {
  padding: "15px 45px",
  width: "calc(100% - 45px)",
  backgroundColor: "#fff",
  fontSize: "12px",
  marginBottom: "10px",
  border: "none",
  color: "gray",
};
const buttonStyle = {
  background: "linear-gradient(to right, #dfb401, #df011f)",
  border: "none",
  fontSize: "17px",
  padding: "8px",
  width: "200px",
};

function EditMonProfil() {
  const disPatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const dispatchAuth = useDispatch();
  const navitate = useNavigate();
  const [isLoading, setIsLoading] = useState("");
  const [isPageLoading, setIsPageLoding] = useState(false);
  const { token, id } = useSelector((state) => state.auth);
  const currentPath = useSelector((state) => state.currentPath);
  // sound
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
  // redirect dashboard secton (end)
  //user data
  console.log("curr", currentPath);
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");
  console.log(userToken, usertID);

  const [isFormVisible, setFormVisibility] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.confirmPassword && formData.newPassword) {
      console.log(formData);
      const config = {
        headers: {
          Authorization: `${AUTH_NAME} ${
            JSON.parse(userToken) ? JSON.parse(userToken) : ""
          }`,
        },
      };
      const dataObj = {
        mail: formData.email,
        password: formData.newPassword,
        confirmation: formData.confirmPassword,
      };

      // axios
      axios
        .post(`${API_URL}/password/reset`, dataObj, config)
        .then((result) => {
          setIsLoading(true);
          console.log(result.status);
          if (result.status === 200) {
            sessionStorage.clear();
            successSound.play();
            setIsLoading(false);
            toast.success("Le mot de passe a été changé avec succès👌", {
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
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container id="profile" style={editMonProfilStyle}>
      <Row>
        <Col lg={5} style={leftColStyle}>
          <MonProfilLeft toggleFormVisibility={toggleFormVisibility} />
        </Col>
        {isFormVisible && (
          <Col lg={7} style={rightColStyle}>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <div style={{ position: "relative" }}>
                  <RxEnvelopeClosed style={iconStyle} />
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Adresse e-mail"
                    style={inputStyle}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                {/* <div style={{ position: "relative" }}>
                  <RiLock2Line style={iconStyle} />
                  <Form.Control
                    type="password"
                    name="currentPassword"
                    placeholder="Mot de passe actuel"
                    style={inputStyle}
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                  />
                </div> */}
                <div style={{ position: "relative" }}>
                  <RiLock2Line style={iconStyle} />
                  <Form.Control
                    type="password"
                    name="newPassword"
                    placeholder="Nouveau mot de passe"
                    style={inputStyle}
                    value={formData.newPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div style={{ position: "relative" }}>
                  <RiLock2Line style={iconStyle} />
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmer le nouveau mot de passe"
                    style={inputStyle}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>
              <div className="m-4" style={{ textAlign: "center" }}>
                <Button type="submit" size="md" style={buttonStyle}>
                  Sauvegarder{" "}
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
                </Button>
              </div>
            </Form>
          </Col>
        )}
      </Row>
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
    </Container>
  );
}

export default EditMonProfil;

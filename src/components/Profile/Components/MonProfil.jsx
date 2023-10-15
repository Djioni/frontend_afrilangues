import { Link } from "react-router-dom";
import avatarImage from "/assets/avatar.jpg";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const containerStyle = {
  minHeight: "100vh",
};

const mainDivisionStyle = {
  width: "550px",
  padding: "32px",
  textAlign: "center",
  backgroundColor: "#fff",
  borderRadius: "11px",
  border: "0.5px solid orange",
};

const profileBoxStyle = {
  marginBottom: "10px", // Correct the typo here
  backgroundColor: "#fff",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
  padding: "20px",
  border: "0.5px solid orange",
};

const avatarStyle = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  border: "0.5px solid #fe4500",
  backgroundColor: "#fff",
};

const nameStyle = {
  fontSize: "33px",
  margin: "10px 5px",
  color: "#fe4500",
  fontWeight: "700",
  backgroundColor: "#fff",
};

const emailStyle = {
  fontSize: "17px",
  color: "#000",
  fontWeight: "600",
  backgroundColor: "#fff",
};

const buttonContainerStyle = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  alignItems: "center",
};
const buttonStyle = {
  background: "linear-gradient(to right, #dfb401, #df011f)",
  width: "250px",
  color: "#fff",
  fontWeight: "700",
  border: "none",
};

function MonProfil() {
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("userdata");
    if (userData) {
      const user = JSON.parse(userData);
      const newFullName = `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`;
      console.log(JSON.parse(userData));
      setFullName(newFullName);
      setUserEmail(user.email);
    }
  }, []);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={containerStyle}
    >
      <div className="card" style={mainDivisionStyle}>
        <div className="mb-1" style={profileBoxStyle}>
          <img src={avatarImage} style={avatarStyle} />
          <h2 style={nameStyle}>{fullName}</h2>
          <p style={emailStyle}>{userEmail}</p>
          <div style={buttonContainerStyle}>
            <Link to="/editMonProfil">
              <Button className="btn" style={buttonStyle}>
                Editor mon profil
              </Button>
            </Link>
            <Button className="btn mt-3" style={buttonStyle}>
              Mon abonnement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonProfil;

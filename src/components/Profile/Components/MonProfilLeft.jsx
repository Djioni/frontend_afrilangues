import React, { useEffect, useState } from "react";
import avatarImage from "/assets/avatar.jpg";

const containerStyle = {
  height: "500px",
  background: "linear-gradient(to right, #dfb401, #df011f)",
  width: "500px",
  marginLeft: "-12px",
};

const mainDivisionStyle = {
  height: "390px",
  width: "430px",
  padding: "18px",
  textAlign: "center",
  backgroundColor: "#fff",
  border: "none",
};

const profileBoxStyle = {
  marginBottom: "5px",
  backgroundColor: "#fff",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
  padding: "16px",
};

const avatarStyle = {
  width: "110px",
  height: "110px",
  borderRadius: "50%",
  border: "0.5px solid #fe4500",
  backgroundColor: "#fff",
};

const nameStyle = {
  fontSize: "28px",
  margin: "8px 3.5px",
  color: "#fe4500",
  fontWeight: "600",
  backgroundColor: "#fff",
};

const emailStyle = {
  fontSize: "14px",
  color: "#000",
  fontWeight: "500",
  backgroundColor: "#fff",
};

const buttonContainerStyle = {
  marginTop: "18px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  alignItems: "center",
};
const buttonStyle = {
  background: "linear-gradient(to right, #dfb401, #df011f)",
  width: "200px",
  color: "#fff",
  fontWeight: "600",
  border: "none",
};

function MonProfilLeft({ toggleFormVisibility }) {
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const userData = localStorage.getItem("userdata");
  useEffect(() => {
    if (userData) {
      const user = JSON.parse(userData);
      const newFullName = `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`;
      console.log(JSON.parse(userData));
      setFullName(newFullName);
      setUserEmail(user.email);
    }
  }, [userData]);

  return (
    <div
      id="profile"
      className="container d-flex containerStyle justify-content-center align-items-center"
      style={containerStyle}
    >
      <div className="card" style={mainDivisionStyle}>
        <div className="mb-1" style={profileBoxStyle}>
          <img src={avatarImage} style={avatarStyle} />
          <h2 style={nameStyle}>{fullName}</h2>
          <p style={emailStyle}>{userEmail}</p>
          <div style={buttonContainerStyle}>
            <button
              className="btn"
              style={buttonStyle}
              onClick={toggleFormVisibility}
            >
              Femer
            </button>
            <button className="btn mt-3" style={buttonStyle}>
              Mon abonnement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonProfilLeft;

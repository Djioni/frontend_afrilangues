import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { BsGlobe2, BsQuestionCircle } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

function Compte() {
  const buttonStyle = {
    backgroundColor: "white",
    width: "100%",
    border: "none",
    color: "black",
    textAlign: "left",
    fontWeight: "600",
    margin: "10px 0",
  };
  const divStyle = {
    textAlign: "center",
    margin: "12px 0",
    display: "flex",
    alignItems: "center",
  };
  const headingStyle = {
    fontSize: "15px",
    backgroundColor: "#df3d15",
    textAlign: "center",
    color: "white",
    fontWeight: 700,
    padding: "12px 20px",

    borderRadius: "10px",
  };
  const iconStyle = {
    backgroundColor: "white",
    fontWeight: "500",
    margin: "14px",
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <div id="profile" style={divStyle}>
        <div style={{ textAlign: "center", margin: "auto" }}>
          <h5 style={headingStyle}>Mon compte</h5>
        </div>
      </div>

      <div
        className="mb-3"
        style={{ backgroundColor: "white", width: "100%", textAlign: "left" }}
      >
        <Link to="/change-language">
          <Button size="md" style={buttonStyle}>
            <BsGlobe2 style={iconStyle} />
            Commencer une nouvelle langue
          </Button>
        </Link>
      </div>

      <div
        className="mb-3"
        style={{ backgroundColor: "white", width: "100%", textAlign: "left" }}
      >
        <Link to="/monProfil">
          <Button size="md" style={buttonStyle}>
            <FiSettings style={iconStyle} />
            Mon profil
          </Button>
        </Link>
      </div>

      <div
        className="mb-3"
        style={{ backgroundColor: "white", width: "100%", textAlign: "left" }}
      >
        <Button size="md" style={buttonStyle}>
          <BsQuestionCircle style={iconStyle} />
          Aide
        </Button>
      </div>

      <div
        className="mb-3"
        style={{ backgroundColor: "white", width: "100%", textAlign: "left" }}
      >
        <Link to="/propos">
          <Button size="md" style={buttonStyle}>
            <BsGlobe2 style={iconStyle} />
            À propos dAfrilangues
          </Button>
        </Link>
      </div>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button
          size="md"
          style={{
            background: "linear-gradient(to right, #dfb401, #df011f)",
            color: "white",
            border: "none",

            fontWeight: "500",
            fontSize: "20px",
            padding: "10px 30px",
          }}
        >
          Déconnexion
        </Button>
      </div>
    </Container>
  );
}

export default Compte;

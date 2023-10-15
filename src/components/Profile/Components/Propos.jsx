import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FaMobileAlt, FaShareAlt } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { IoStorefrontOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { PiNotePencilLight } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";

function Propos() {
  const buttonStyle = {
    backgroundColor: "white",
    width: "100%",
    border: "none",
    color: "black",
    textAlign: "left",
    fontWeight: "600",
    padding: "0",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  };
  const divStyle = {
    backgroundColor: "white",
    width: "100%",
    textAlign: "left",
    borderRadius: "13px",
  };
  const iconStyle = {
    backgroundColor: "white",
    fontWeight: "500",
    margin: "12px",
    color: "black",
  };

  return (
    <Container id="profile" className="m-3">
      <div className="mb-3" style={divStyle}>
        <Button size="md" style={buttonStyle}>
          <FaMobileAlt style={iconStyle} />
          Version{" "}
          <span
            style={{
              color: "red",
              backgroundColor: "white",
              marginLeft: "3px",
            }}
          >
            {" "}
            1.0
          </span>
        </Button>
      </div>

      <div className="mb-3" style={divStyle}>
        <Button size="md" style={buttonStyle}>
          <BsQuestionCircle style={iconStyle} />
          Mentions légales
        </Button>
      </div>

      <div className="mb-3" style={divStyle}>
        <Button size="md" style={buttonStyle}>
          <GiNotebook style={iconStyle} />
          CGV
        </Button>
      </div>

      <div className="mb-3" style={divStyle}>
        <Button size="md" style={buttonStyle}>
          <FiSettings style={iconStyle} />
          Confidentialité
        </Button>
      </div>
      <div className="mb-3" style={divStyle}>
        <Button size="md" style={buttonStyle}>
          <IoStorefrontOutline style={iconStyle} />
          Boutique
        </Button>
      </div>

      <div className="mb-3" style={divStyle}>
        <Button size="md" style={buttonStyle}>
          <PiNotePencilLight style={iconStyle} />
          Blog
        </Button>
      </div>
      <div className="mb-3" style={divStyle}>
        <Button size="md" style={buttonStyle}>
          <FaShareAlt style={iconStyle} />
          Partager
        </Button>
      </div>
    </Container>
  );
}

export default Propos;

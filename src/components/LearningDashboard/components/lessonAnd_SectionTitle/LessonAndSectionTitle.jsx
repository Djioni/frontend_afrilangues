/** @format */

import { useNavigate } from "react-router-dom";
import "./style.css";

function LessonAndSectionTitle({ title, text }) {
  const navigate = useNavigate();
  return (
    <div className="row  title_container">
      <div className="col-12 col-md-12 text-md-center">
        <h2 className="title text-black" style={{ fontWeight: "600" }}>
          {title}
        </h2>
        <h2
          onClick={() => {
            navigate(-1);
          }}
          className="buttonText d-inline-block "
          style={{ fontWeight: "400", cursor: "pointer" }}
        >
          {text}
        </h2>
      </div>
    </div>
  );
}

export default LessonAndSectionTitle;

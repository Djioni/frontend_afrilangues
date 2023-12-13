import React, { useEffect, useState } from "react";
import "../styles/Process.css";
import ProcessPercent from "./ProcessPercent";
import DailyGoals from "./DailyGoals";
import { useDispatch, useSelector } from "react-redux";
import {
  bonusPointIncrement,
  lessonIncrement,
} from "../services/actions/LessonActions";
import { API_URL, AUTH_NAME } from "../../../api";
import axios from "axios";
import Cookies from "js-cookie";
import Loading from "../../Loading";
export default function Process() {
  const [isLoading, setIsLoading] = useState(true);
  const { lavel, point, ciwara } = useSelector((state) => state.lessons);
  const { token, id } = useSelector((state) => state.auth);
  const userToken = Cookies.get("token");
  const usertID = Cookies.get("id");
  console.log("____________");
  const changeLessonState = useDispatch();

  console.log(token, id);
  // points
  const points = JSON.parse(localStorage.getItem("exercisePoints"))
    ? JSON.parse(localStorage.getItem("exercisePoints"))
    : "";
  useEffect(() => {
    if (points) {
      changeLessonState(lessonIncrement(points));
      // bonus points curur
      changeLessonState(bonusPointIncrement(points));
      setIsLoading(false);
    } else {
      if (userToken && usertID) {
        // get user
        const config = {
          headers: {
            Authorization: `${AUTH_NAME} ${JSON.parse(userToken)}`,
          },
        };

        axios.get(`${API_URL}/users/me`, config).then((res) => {
          console.log("userdata", res.data.isNumberPoint);
          localStorage.setItem(
            "exercisePoints",
            JSON.stringify(res.data.isNumberPoint)
          );
          changeLessonState(lessonIncrement(res.data.isNumberPoint));
          // bonus points curur
          changeLessonState(bonusPointIncrement(res.data.isNumberPoint));
          //
          setIsLoading(false);
        });
      }
    }
  }, []);

  const toggleModal = () => {
    setShowModal((prevValue) => !prevValue);
  };
  if (!isLoading) {
    return (
      <div id="process">
        <div className="">
          <div>
            {/* div-lavel-box */}
            <div className="row">
              <div className="col-4">
                <h3>PROGRESSION</h3>
              </div>

              <div className="col-8 d-flex justify-content-end ">
                <div className="lavel-box d-flex justify-content-center align-items-center mt-3">
                  <h3>Niv. {lavel}</h3>
                </div>
              </div>
            </div>
            <div style={{ paddingTop: "23px" }}>
              <div>
                <ProcessPercent />
              </div>
            </div>
            <div
              style={{
                borderBottomWidth: "2px",
                borderStyle: "dashed",
                borderBottomColor: "lightgray",
              }}
            ></div>
          </div>
          <div>
            <DailyGoals />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="process">
        <div
          className=""
          style={{ marginTop: "200px", paddingBottom: "200px" }}
        >
          <Loading page={true} message={"S'il vous plaît, attendez!"} />
        </div>
      </div>
    );
  }
}

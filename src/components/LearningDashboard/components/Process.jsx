import React from "react";
import "../styles/Process.css";
import ProcessPercent from "./ProcessPercent";
import DailyGoals from "./DailyGoals";
import { useSelector } from "react-redux";
export default function Process() {
  const { lavel, point, ciwara } = useSelector((state) => state.lessons);
  const { token, id } = useSelector((state) => state.auth);
  console.log("____________");
  console.log(token, id);
  return (
    <div id="process">
      <div className="">
        <div>
          <div className="div-lavel-box">
            <h3>Progression</h3>

            <div className="d-flex justify-content-end">
              <div className="lavel-box d-flex justify-content-center align-items-center">
                <h3>Niv. {lavel}</h3>
              </div>
            </div>
          </div>
          <div>
            <ProcessPercent />
          </div>
          <div className="dash-border">
            <img src="/assets/line.svg" className="img-fluid" alt="" />
          </div>
        </div>
        <div>
          <DailyGoals />
        </div>
      </div>
    </div>
  );
}

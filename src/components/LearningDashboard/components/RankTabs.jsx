import React, { useEffect, useState } from "react";
import "../styles/DailyGoals.css";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Router,
  Routes,
  Outlet,
} from "react-router-dom";
import Ranking from "./Ranking";

export default function RankTabs() {
  const [activeD, setActiveD] = useState("");
  const [activeW, setActiveW] = useState("");
  const [activeM, setActiveM] = useState("");
  const [rankuserData, setRankUserData] = useState([
    {
      id: 1,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 2,
      name: "ROSIE762",
      number: "2600",
    },
    {
      id: 3,
      name: "ROSIE762",
      number: "2500",
    },
  ]);

  useEffect(() => {
    console.log(rankuserData);
  }, [rankuserData]);
  const dailyRankData = [
    {
      id: 1,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 2,
      name: "ROSIE762",
      number: "2600",
    },
    {
      id: 3,
      name: "ROSIE762",
      number: "2500",
    },

    {
      id: 4,
      name: "ROSIE762",
      number: "2400",
    },

    {
      id: 5,
      name: "ROSIE762",
      number: "2400",
    },

    {
      id: 6,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 9,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },
    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },
    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },
  ];
  const weeklyRankData = [
    {
      id: 1,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 2,
      name: "ROSIE762",
      number: "2600",
    },
    {
      id: 3,
      name: "ROSIE762",
      number: "2500",
    },
    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },
    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 4,
      name: "ROSIE762",
      number: "2400",
    },

    {
      id: 5,
      name: "ROSIE762",
      number: "2400",
    },

    {
      id: 6,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 9,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },
  ];
  const monthlyRankData = [
    {
      id: 1,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 2,
      name: "ROSIE762",
      number: "2600",
    },
    {
      id: 3,
      name: "ROSIE762",
      number: "2500",
    },

    {
      id: 4,
      name: "ROSIE762",
      number: "2400",
    },
    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },
    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 5,
      name: "ROSIE762",
      number: "2400",
    },

    {
      id: 6,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 9,
      name: "ROSIE762",
      number: "2700",
    },

    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },
  ];

  const DailyRank = () => {
    //active css class start
    setActiveD("active");
    setActiveW("");
    setActiveM("");
    // active css class end

    setRankUserData(dailyRankData);
    console.log("daily");
  };
  const WeeklyRank = () => {
    //active css class start
    setActiveD("");
    setActiveW("active");
    setActiveM("");
    // active css class end

    setRankUserData(weeklyRankData);
  };
  const MonthlyRank = () => {
    //active css class start
    setActiveD("");
    setActiveW("");
    setActiveM("active");
    // active css class end

    setRankUserData(monthlyRankData);
  };
  return (
    <div className="ranking">
      <div>
        <div
          style={{
            borderBottomWidth: "2px",
            borderStyle: "dashed",
            borderBottomColor: "lightgray",
          }}
        ></div>
      </div>
      <h3 style={{ marginTop: "33px" }}>CLASSEMENT : </h3>
      <div className="r-box">
        <div>
          <div className="row px-md-2 pb-3">
            <div className="col-4">
              <div>
                <span className={activeD} onClick={DailyRank}>
                  <button className="w-100">Mois</button>
                </span>
              </div>
            </div>
            <div className="col-4">
              <div>
                {" "}
                <span onClick={WeeklyRank} className={activeW}>
                  <button className=" d-grid justify-content-center  w-100">
                    <span className="">semaine</span>
                  </button>
                </span>
              </div>
            </div>

            <div className="col-4 ">
              <div className="w-100">
                <span onClick={MonthlyRank} className={activeM}>
                  <button className="w-100">Jours</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              overflowY: "auto",
              height: "220px",
              marginLeft: "-20px",
              marginRight: "-20px",
            }}
          >
            {/* rank data */}
            <div
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <Ranking rankuserData={rankuserData} />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

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
  const [activeD, setActiveD] = useState("active");
  const [activeW, setActiveW] = useState("");
  const [activeM, setActiveM] = useState("");
  const [rankuserData, setRankUserData] = useState([]);
  const dailyRankData = [
    {
      id: 1,
      name: "ROSIE762",
      number: "2700",
    },
    ,
    {
      id: 2,
      name: "DSSIE762",
      number: "2600",
    },
    {
      id: 3,
      name: "TOSIE762",
      number: "2500",
    },
  ];
  const weeklyRankData = [
    {
      id: 1,
      name: "ROSDE762",
      number: "2700",
    },
    ,
    {
      id: 2,
      name: "SIE762",
      number: "2600",
    },
    {
      id: 3,
      name: "R762",
      number: "2500",
    },
    ,
    {
      id: 4,
      name: "ROSIE762",
      number: "2400",
    },
    ,
    {
      id: 5,
      name: "ROSIE762",
      number: "2300",
    },
    ,
    {
      id: 6,
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
    ,
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
    ,
    {
      id: 4,
      name: "ROSIE762",
      number: "2400",
    },
    ,
    {
      id: 5,
      name: "ROSIE762",
      number: "2400",
    },
    ,
    {
      id: 6,
      name: "ROSIE762",
      number: "2700",
    },
    ,
    {
      id: 9,
      name: "ROSIE762",
      number: "2700",
    },
    ,
    {
      id: 10,
      name: "ROSIE762",
      number: "2700",
    },
    ,
    {
      id: 11,
      name: "ROSIE762",
      number: "2700",
    },
    ,
    {
      id: 12,
      name: "ROSIE762",
      number: "2700",
    },
  ];
  useEffect(() => {
    setRankUserData(dailyRankData);
  }, []);
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
      <h3>Classement de la semaine EN BAMBARA</h3>
      <div className="r-box">
        <div>
          <div className="btn-tab">
            <span className={activeD} onClick={DailyRank}>
              <button className="">Mois</button>
            </span>

            <span onClick={WeeklyRank} className={activeW}>
              <button className="  ">semaine</button>
            </span>

            <span onClick={MonthlyRank} className={activeM}>
              <button className="">Jours</button>
            </span>
          </div>
        </div>
        <div>
          <div>
            {/* rank data */}
            <div>
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

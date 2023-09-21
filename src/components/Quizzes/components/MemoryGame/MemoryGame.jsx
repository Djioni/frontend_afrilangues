import { useDispatch } from "react-redux";
import CardsContainer from "./components/Cards/CardsContainer";
import { useMemoryCards } from "./contexts/MemoryContext";
import "./MemoryGame.css";
import React, { useEffect } from "react";
import { MemoryGameDataAction } from "./services/actions/MemoryGameDataAction";
import { MemoryGameData } from "../../../LearningDashboard/components/functions/MemoryGameData";
import styled from "@emotion/styled";
function MemoryGame() {
  const { turn, score, timeLeft, round, cards, setCards } = useMemoryCards();
  const MemoryGameData = JSON.parse(localStorage.getItem("memoryGame"));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("gamedata", JSON.stringify(MemoryGameData));

    setCards(MemoryGameData);
    dispatch(MemoryGameDataAction(MemoryGameData));
  }, []);

  return (
    <div id="game-root" style={{ backgroundColor: "#ececeb " }}>
      {cards[0] && (
        <main
          className={`w-100   d-flex flex-column  align-items-center justify-content-start gap-5 py-2 py-sm-5  font-inter`}
        >
          <h1 className=" brand-blackfw-semibold main-heading">Puzzle Pairs</h1>

          {/* <button
        onClick={startGame}
        className="h-[46px] px-3 bg-[#0040BE] text-white font-normal text-center rounded-lg"
      >
        Start a New Game
      </button> */}
          <div className="w-100 px-4 px-sm-0 game-score">
            <div className="mx-auto  bg-white p-3 gap-y-2 rounded-4 score-card ">
              <div className="w-100 d-flex align-content-center justify-content-start gap-3">
                <span className="text-xl  fw-semibold ">Time:</span>
                <p className="text-xl fw-medium ">00:{timeLeft}</p>
              </div>
              <div className="w-100 d-flex align-content-center justify-content-start gap-3">
                <span className="text-xl   fw-semibold ">Round :</span>
                <p className="text-xl fw-medium ">{round}</p>
              </div>
              <div className="w-100 d-flex align-content-center justify-content-start gap-3">
                <span className="text-xl   fw-semibold ">Score:</span>
                <p className="text-xl   fw-medium ">{score}/5</p>
              </div>
              <div className="w-100 d-flex align-content-center justify-content-start gap-3">
                <span className="text-xl   fw-semibold ">Total Flips:</span>
                <p className="text-xl fw-medium ">{turn}</p>
              </div>
            </div>
          </div>

          <CardsContainer />
        </main>
      )}
    </div>
  );
}

export default MemoryGame;

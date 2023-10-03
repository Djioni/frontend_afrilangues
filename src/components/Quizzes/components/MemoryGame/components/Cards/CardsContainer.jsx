/* eslint-disable react/prop-types */

import Card from "./Card";
import { useMemoryCards } from "../../contexts/MemoryContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Dialog from "@mui/material/Dialog";
import { MdOutlineCancel } from "react-icons/md";

const CardsContainer = () => {
  const {
    cards,
    handleCardItemClick,
    disabledCards,
    checkWin,
    turn,
    matchedImage,
    matchedImageModal,
    colseMatchedImage,
    gameOver,
    matchedName,
    startGame,
  } = useMemoryCards();

  if (checkWin()) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      background: "#191D88 ",
      color: "#FFC436",
      title: "You've won!",
      text: `You took ${turn} flips to complete the game!`,
      icon: "success",
      confirmButtonText: "Play Again",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      preConfirm: () => {
        startGame();
      },
    });
  }
  if (gameOver) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      background: "#eaeaea",
      color: "#191D88 ",
      title: "La partie est terminée !",
      text: `u as épuisé toutes tes chances.`,
      icon: "error",
      confirmButtonText: "Rejouer",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,

      preConfirm: () => {
        startGame();
      },
    });
  }

  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center md:px-md-8 px-md-4">
      <div className="w-100 grid-container gap-4 px-4 ">
        {cards.map((card, index) => (
          <Card
            card={card}
            key={card?.id || index}
            onClick={handleCardItemClick}
            disabled={disabledCards}
          />
        ))}
      </div>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "8px",
            maxWidth: "unset",
            position: "relative",
            overflow: "visible",
          },
          "& ::-webkit-scrollbar": {
            width: "0px",
          },
        }}
        open={matchedImageModal}
        onClose={colseMatchedImage}
      >
        <div className={`dialoge-box`}>
          <button
            onClick={colseMatchedImage}
            className="position-absolute  d-flex justify-content-center align-items-center z-10 bg-transparent border-0"
          >
            <MdOutlineCancel className="h-100 w-100 text-white" />
          </button>
          <div className="w-100 h-100 d-flex flex-column  align-items-center justify-content-start gap-3">
            <img
              src={matchedImage}
              alt=""
              className=" object-fit-cover rounded-top-3 w-100 "
            />

            <p className="text-black text-center text-lg fw-medium">
              {matchedName}
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default CardsContainer;

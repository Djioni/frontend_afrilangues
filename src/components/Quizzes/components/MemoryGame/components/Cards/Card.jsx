/* eslint-disable react/prop-types */

const Card = ({ card, onClick, disabled }) => {
  const className = `${card.isFlipped ? "flipped" : ""}`;

  const handleClick = () => {
    if (!disabled) {
      onClick(card);
    }
  };

  return (
    <div id="mgame-card">
      <div className="card mgame-card-box w-100 position-relative rounded-4 border-0 bg-transparent ">
        <div className={className}>
          <img
            className="front w-100 object-fit-cover rounded-4"
            src={card.image}
            alt={card.name}
          />
          <img
            className="back game-cover top-0 left-10 w-100 object-fit-cover position-absolute   rounded-4 "
            src="/assets/cover.png"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

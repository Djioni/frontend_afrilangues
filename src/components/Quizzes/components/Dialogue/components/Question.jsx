import React from "react";

const Question = ({ iconRight = true, icon, boxes = [], state = {} }) => {
  const renderBoxes = () => {
    return boxes.map((item, index) => {
      if (item.type === "text") {
        return (
          <p key={index} className="mb-0">
            {item.value}
          </p>
        );
      } else if (item.type === "input") {
        return (
          <input
            key={index}
            name={item.name}
            value={state[item.name] || ""}
            readOnly
            type="text"
            className="form-control d-inline-block w-auto"
          />
        );
      }
      return null;
    });
  };

  return (
    <div
      className={`w-100 d-flex flex-column ${
        iconRight ? "align-items-end" : "align-items-start"
      } py-2 px-2`}
    >
      <div className="w-100 p-3 mb-3 rounded-3 shadow-sm question-box">
        <div
          className={`d-flex gap-2 align-items-center flex-wrap ${
            iconRight ? "flex-row-reverse justify-content-end" : ""
          }`}
        >
          {icon}
          {renderBoxes()}
        </div>
      </div>
    </div>
  );
};

export default Question;

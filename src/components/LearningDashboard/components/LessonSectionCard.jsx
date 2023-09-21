import React from "react";

export default function (component, title) {
  return (
    <div className="card">
      <div className="d-flex justify-content-center">
        <div className="inner-icon">{component}</div>
      </div>
      <div className="d-flex justify-content-center">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

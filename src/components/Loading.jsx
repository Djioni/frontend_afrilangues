import React, { useEffect } from "react";
import "./Loading.css";
export default function ({ message, page, full }) {
  return (
    <div className="overflow-hidden">
      {page ? (
        <div
          className={`d-flex justify-content-center w-100 ${
            full ? "full-screen-loader" : ""
          }`}
        >
          <div
            class="spinner-border"
            style={{ color: "#df8f06" }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div id={"loader"}>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm border-box"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="text"> &nbsp;{message}...</span>
          </button>
        </div>
      )}
    </div>
  );
}

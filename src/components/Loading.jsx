import React, { useEffect } from "react";
import "./Loading.css";
export default function ({ message, page }) {
  return (
    <div className="overflow-hidden">
      {page ? (
        <div className=" d-flex justify-content-center">
          {/* <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div> */}

          <div class="book">
            <div class="book__pg-shadow"></div>
            <div class="book__pg"></div>
            <div class="book__pg book__pg--2"></div>
            <div class="book__pg book__pg--3"></div>
            <div class="book__pg book__pg--4"></div>
            <div class="book__pg book__pg--5"></div>
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

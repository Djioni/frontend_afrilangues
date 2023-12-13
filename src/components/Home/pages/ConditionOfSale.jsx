import React from "react";
import { htmlData } from "./html.data";
import Footer from "../../Footer/Footer";

export default function ConditionOfSale() {
  return (
    <div
      style={{ fontWeight: "normal", paddingTop: "150px" }}
      className="c-salte"
    >
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: htmlData }}></div>
      </div>

      <Footer />
    </div>
  );
}

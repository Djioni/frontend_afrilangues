import React from "react";

import Footer from "../../Footer/Footer";
import { confiHtmlData } from "./confi.html.data";

export default function Confidentiality() {
  return (
    <div
      style={{ fontWeight: "normal", paddingTop: "150px" }}
      className="c-salte"
    >
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: confiHtmlData }}></div>
      </div>

      <Footer />
    </div>
  );
}

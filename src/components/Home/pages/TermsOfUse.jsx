import React from "react";
import Footer from "../../Footer/Footer";
import { termsHtmlData } from "./terms.html.data";

export default function TermsOfUse() {
  return (
    <div
      style={{ fontWeight: "normal", paddingTop: "150px" }}
      className="c-salte"
    >
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: termsHtmlData }}></div>
      </div>

      <Footer />
    </div>
  );
}

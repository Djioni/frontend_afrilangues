// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Section from "./Components/Section";
import Gallery from "./Components/Gallery";
import SectionAlin from "./Components/SectionAlin";
import Footer from "./Components/Footer";
import LangageSection from "./Components/LangageSection";
import Partnerships from "./Components/Partnerships";
import ConditionVentes from "./ConditionVentes";
import Confidentiality from "./Confidentiality";
import MentionLegales from "./MentionLegales";
import Reservation from "./Reservation";
import Devis from "./Devis";
import Navigation from "./components/Navigation";

function HomeApp() {
  const heroStyle = {
    backgroundColor: "#ECECEB",
  };

  return (
    <div>
      <div className="hero" style={heroStyle}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <div className="tw-pt-[5px] md:tw-pt-[50px]">
                  <Section />
                </div>
                <SectionAlin />
                <Partnerships />
                <Footer />
              </>
            }
          />
          <Route path="/condition-of-sale" element={<ConditionVentes />} />
          <Route path="/confidentiality" element={<Confidentiality />} />
          <Route path="/terms-of-use" element={<MentionLegales />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/resa" element={<Reservation />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomeApp;

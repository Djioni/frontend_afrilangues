// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Section from "./components/Section";
import SectionAlin from "./components/SectionAlin";
import Footer from "./components/Footer";
import Partnerships from "./components/Partnerships";
import Confidentiality from "./components/Confidentiality";
import MentionLegales from "./MentionLegales";
import Reservation from "./Reservation";
import Devis from "./components/Devis";
import Navigation from "./components/Navigation";
import ConditionVentes from "./components/ConditionVentes";

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

import React, { useEffect, useState } from "react";
import Navber from "./components/Navber";
import Process from "./components/Process";

import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Lessons from "./components/Topics";
import GrettingLesson from "./components/Lessons";
import LearnGrettingLesson from "./components/LessonSection";
import Topics from "./components/Topics";

export default function Layout() {
  return (
    <div className="layout">
      <div>
        <div className=" container">
          <div className="d-none d-xl-block">
            <div className="row mt-4   ">
              <div className="col-6 col-xl-8 d-flex justify-content-center position-relative">
                <section className="sec-lessions d-flex justify-content-center">
                  <div className="col-card ">
                    <Topics />
                    <br />
                  </div>
                </section>
              </div>

              <div className="col-6 col-xl-4 d-flex justify-content-end pb-3">
                <section id="sec-lessions" className="sec-process w-100">
                  <div className="col-card ">
                    <div className="">
                      <Process />
                      {/* fdf */}
                    </div>
                  </div>
                </section>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="d-block d-xl-none">
            <div className="d-flex justify-content-center">
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <section className="sec-m-lessions">
                      <Lessons />
                    </section>
                  }
                ></Route>
                <Route
                  path="/process"
                  element={
                    <section className="sec-m-process">
                      <Process />
                    </section>
                  }
                ></Route>
                <Route
                  path="/"
                  element={
                    <section className="sec-m-process">
                      <Topics />
                    </section>
                  }
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

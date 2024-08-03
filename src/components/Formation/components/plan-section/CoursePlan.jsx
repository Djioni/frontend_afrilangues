import React from "react";
import CoursePlanCard from "./CoursePlanCard";
import "./CoursePlan.css";
export default function CoursePlan() {
  return (
    <section id="c-plan">
      <div>
        <div>
          <h2 className="c-plan-header text-center ">
            Une méthode pour chaque type d'apprentissage
          </h2>
        </div>
        <div>
          <CoursePlanCard />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { BsCheck } from "react-icons/bs";
export default function CoursePlanCard() {
  return (
    <div className="container c-plan-card">
      <div className="d-md-flex justify-content-center ">
        <div className="row-col row-col-1  d-flex d-md-inline-block justify-content-center">
          <div className="ca">
            <div class="card ">
              <img
                className=""
                class="card-img-top"
                src="/assets/c-plan-1.png"
                alt="Card image cap"
              />
              <div class="card-body ">
                <h5 class="card-title">Application Afrilangues</h5>
                <h6 className="card-sub-title">
                  Pour un apprentissage <br /> autonome
                </h6>
                <ul>
                  <li>
                    <div className="icon">
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          backgroundColor: "#8686df", // Green background color
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className=""
                      >
                        <BsCheck
                          size={20} // Adjust the size of the tick mark icon within the circle
                          color="#fff" // White color for the tick mark
                        />
                      </div>
                    </div>

                    <span className="text">
                      Des cours pensés pour les situations de la vie réelle qui
                      vous motivent.
                    </span>
                  </li>

                  <li>
                    <div className="icon">
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          backgroundColor: "#8686df", // Green background color
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className=""
                      >
                        <BsCheck
                          size={20} // Adjust the size of the tick mark icon within the circle
                          color="#fff" // White color for the tick mark
                        />
                      </div>
                    </div>

                    <span className="text">
                      "Une routine d'apprentissage efficace qui s'intègre
                      parfaitement à votre vie de tous les jours."
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          backgroundColor: "#8686df", // Green background color
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className=""
                      >
                        <BsCheck
                          size={20} // Adjust the size of the tick mark icon within the circle
                          color="#fff" // White color for the tick mark
                        />
                      </div>
                    </div>

                    <span className="text">
                      Un apprentissage adapté à votre niveau de langue.
                    </span>
                  </li>
                </ul>
                <div className="margin">
                  <button className="w-100 btn-1">C'est parti !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-col row-col-2  d-flex d-md-inline-block justify-content-center">
          <div className="ca">
            <div class="card ">
              <img
                className=""
                class="card-img-top"
                src="/assets/c-plan-2.png"
                alt="Card image cap"
              />
              <div class="card-body ">
                <h5 class="card-title">Classes Afrilangues Live</h5>
                <h6 className="card-sub-title">
                  Des classes en direct et en petits <br /> groupes
                </h6>
                <ul>
                  <li>
                    <div className="icon">
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          backgroundColor: "#e5ad00", // Green background color
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className=""
                      >
                        <BsCheck
                          size={20} // Adjust the size of the tick mark icon within the circle
                          color="#fff" // White color for the tick mark
                        />
                      </div>
                    </div>

                    <span className="text">
                      Avec des professeurs expérimentés qui s'investissent
                      activement dans votre réussite.
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          backgroundColor: "#e5ad00", // Green background color
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className=""
                      >
                        <BsCheck
                          size={20} // Adjust the size of the tick mark icon within the circle
                          color="#fff" // White color for the tick mark
                        />
                      </div>
                    </div>

                    <span className="text">
                      Pour parler rapidement avec confiance grâce à des classes
                      axées sur la conversation.
                    </span>
                  </li>
                  <li>
                    <div className="icon">
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          backgroundColor: "#e5ad00", // Green background color
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className=""
                      >
                        <BsCheck
                          size={20} // Adjust the size of the tick mark icon within the circle
                          color="#fff" // White color for the tick mark
                        />
                      </div>
                    </div>

                    <span className="text">
                      Des centaines de classes disponibles tout en profitant
                      gratuitement de l'application.
                    </span>
                  </li>
                </ul>
                <div className="margin">
                  <button className="w-100">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

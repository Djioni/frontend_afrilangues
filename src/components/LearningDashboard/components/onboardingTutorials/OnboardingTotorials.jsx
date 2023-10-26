import React, { useEffect, useState } from "react";
import "./OnboardingTotorials.css";
import { IoClose } from "react-icons/io5";
import { BsSendCheckFill } from "react-icons/bs";
import Loading from "../../../Loading";
import { useToast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function OnboardingTotorials() {
  const data = [
    {
      title: "BIENVENUE SUR AFRILANGUES",
      desc: [
        {
          text: `Nous sommes ravis de vous compter parmi nous !
        Afin de vous aider à apprendre la langue africaine de votre choix, veuillez suivre ces étapes pour une bonne prise en main.
        `,
          inlineBold: null,
          bold: null,
        },
      ],
    },
    {
      title: "MES COURS",
      desc: [
        {
          text: `Nos cours sont thématiques, structurés et bien amenés pour vous permettre d’apprendre à parler en toute confiance dès le début.
      Chaque thème comprend plusieurs leçons.
      `,
          inlineBold: null,
          bold: null,
        },
      ],
    },
    {
      title: "LEÇONS",
      desc: [
        {
          text: `Chaque leçon comprend plusieurs parties :`,

          inlineBold: null,
          bold: ["Introduction", "Phrases", "Dialogue", "Grammaire"],
        },
      ],
    },
    {
      title: "VÉROUILLAGE / DÉVEROUILLAGE DE CONTENUS",
      desc: [
        {
          text: `Les contenus sont verrouillés par défaut. Pour les déverrouiller, vous devez obtenir « 70% de BONNES RÉPONSES » pour passer d’une partie à une autre.`,
          inlineBold: null,
          bold: null,
        },
      ],
    },
    {
      title: "STATISTIQUES ",
      desc: [
        {
          text: "Lorsque vous donnez de bonnes réponses, vous gagner des cauris, qui sont des points. Vous pouvez les voir dans la rubrique ",
          inlineBold: ["« STATISTIQUES »"],
          bold: null,
        },
      ],
    },
    {
      title: "LEXIQUE THÉMATIQUE",
      desc: [
        {
          text: "Vous pouvez approfondir votre vocabulaire en allant dans le lexique thématique.",
          inlineBold: null,
          bold: null,
        },
      ],
    },
  ];

  const [currentData, setCurrentData] = useState(null);
  const [currentDataID, setCurrentDataID] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [dNone, setDNone] = useState({ display: "none" });
  const [currentProcess, setCurrentProcess] = useState("0%");

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(false);
      setIsLoading(false);
      setCurrentData(data[0]);
    }, 400);
  }, []);
  useEffect(() => {
    //

    //
    setDNone({ display: "grid" });
  }, []);
  const handleClose = () => {
    navigate("/dashboard");
    setDNone({ display: "none" });
  };
  const Process = (currentnumber, totalnumber) => {
    const singleProcess = 100 / totalnumber;
    let totalnumber1 = 0;
    for (let i = 1; i <= currentnumber; i++) {
      totalnumber1 += singleProcess;
    }
    return `${totalnumber1}%`;
  };
  const handleMessage = () => {
    if (data.length <= currentDataID) {
      console.log("data found...");
      navigate("/dashboard");
    } else {
      setCurrentProcess(Process(currentDataID, data.length - 1));

      console.log("handleMessage");

      setCurrentData(data[currentDataID]);

      setCurrentDataID((prev) => prev + 1);
    }
  };
  return (
    <div>
      {isPageLoading ? (
        <Loading
          full={true}
          page={true}
          message={"S'il vous plaît, attendez!"}
        />
      ) : (
        <div id="obdtutorials" className="w-100" style={dNone}>
          <div
            className="newl-card "
            style={isLoading ? { height: "470px" } : {}}
          >
            <div className="obdtutorials_process"></div>
            <div
              className="obdtutorials_process_current"
              style={{ width: currentProcess }}
            ></div>
            <div className="box w-100 h-100">
              <div className="email-card">
                <div className="d-flex justify-content-center position-relative">
                  <div onClick={handleClose} className="nl-close">
                    <IoClose className="icon" />
                  </div>
                </div>
              </div>

              {isLoading ? (
                <div className="loader_box">
                  <Loading
                    full={false}
                    page={true}
                    message={"S'il vous plaît, attendez!"}
                  />
                </div>
              ) : (
                <div>
                  <div className="row boy_section ">
                    <div className="col-3  col-lg-3  col-xl-2 justify-content-end d-flex">
                      <div className="boy_img">
                        <img src="/assets/onboy.png " alt="" />
                      </div>
                    </div>
                    <div className="col-9 col-lg-9  col-xl-10">
                      <h3 className="title">
                        {currentData ? currentData.title : ""}
                      </h3>
                    </div>
                  </div>
                  <div className="obdtutorials_body ">
                    <div className="decs">
                      {currentData
                        ? currentData.desc.map((item) => (
                            <div>
                              {item.text}
                              {item.bold ? (
                                <ul className="bold">
                                  {item.bold.map((itemtext, index) => (
                                    <li>
                                      {itemtext}
                                      {item.bold.length - 1 === index
                                        ? "."
                                        : ","}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                ""
                              )}
                              {item.inlineBold ? (
                                <div className="d-inline-block">
                                  <ul className="d-inline-block inline_bold">
                                    {item.inlineBold.map((text) => (
                                      <li>{text}</li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="btn_box d-flex justify-content-end">
              <button onClick={() => handleMessage()}>Suivant</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

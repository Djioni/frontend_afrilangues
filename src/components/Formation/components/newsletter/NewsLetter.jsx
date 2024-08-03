import React, { useEffect, useState } from "react";
import "./NewsLetter.css";
import { IoClose } from "react-icons/io5";
import { BsSendCheckFill } from "react-icons/bs";

export default function NewsLetter() {
  const [dNone, setDNone] = useState({ display: "none" });
  useEffect(() => {
    setTimeout(() => {
      setDNone({ display: "grid" });
    }, 5000);
  }, []);
  const handleClose = () => {
    setDNone({ display: "none" });
  };
  return (
    <div id="newsl" style={dNone}>
      <div className="newl-card ">
        <div className="box w-100 h-100">
          <div className="email-card">
            <div className="d-flex justify-content-center position-relative">
              <img src="/assets/email.png" alt="email" />
              <div onClick={handleClose} className="nl-close">
                <IoClose className="icon" />
              </div>
            </div>
          </div>
          <div className="email-body ">
            <div>
              <h2 className="text-center  header">Rejoignez-nous !</h2>
              <p className="mt-1">
                Rejoignez-nous et soyez informé du lancement de nos nouvelles
                sessions, nos publications et plus généralement de l'actualité
                des langues et cultures africaines !
              </p>
              <div className="form">
                <div className="d-flex justify-content-center">
                  <input type="text" placeholder="Votre nom et prénom" />
                </div>
                <div className="d-flex justify-content-center">
                  <input
                    placeholder="Saisissez votre adresse mail"
                    className="mt-2"
                    type="text"
                  />
                </div>
                <div className="d-flex mt-2 justify-content-center">
                  <button>
                    JE VEUX VOUS REJOINDRE
                    <BsSendCheckFill className="icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

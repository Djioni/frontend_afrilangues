/** @format */

import { useState } from "react";
import tick_icon from "../../../assets/tick_icon.png";
import close_icon from "../../../assets/close_icon.png";
import star_icon from "../../../assets/star-icon.png";
import upload_icon from "../../../assets/upload-icon.png";
import "./Pricing.css";

const Pricing = () => {
  const [togglePriceBtn, setTogglePriceBtn] = useState(true);

  // HANDLING TOGGLE PRICE BUTTON
  const handleTogglePriceBtn = () => {
    setTogglePriceBtn(!togglePriceBtn);
  };

  return (
    <div className="pricing_wrapper d-none">
      <div className="pricing_container container">
        <div className="heading_container">
          <h2>
          Rendre accessible l’apprentissage des langues africaines à tous,
            sans condition de revenus. Telle est notre mission.
          </h2>
          <p>
          Votre abonnement payant va nous aider à accomplir cette mission et
            nous permettre de continuer à ajouter de nouveaux contenus de
            qualités, de nouvelles langues et les mettre à jour régulièrement.
          </p>
        </div>

        <div className="pricing_content">
          {/* <div className="pricing_header">
            <span className={!togglePriceBtn && "monthly_sub"}>
              Abonnement mensuel
            </span>
            <button onClick={handleTogglePriceBtn}>
              <div
                className={togglePriceBtn ? "circle active" : "circle"}
              ></div>
            </button>
            <span className={togglePriceBtn && "yearly_sub"}>
              Abonnement annuel
            </span>
          </div> */}

          {/* <div className="label">ÉCONOMISEZ JUSQU’À 40%</div> */}
          
          <div className="pricing_cards">
          <div className="pricing_card pricing_card_2">
              <div>
                <div className="text-center">
                <h3>ABONNEMENT GRATUIT</h3>
                </div>
                <p>0€ /  mois</p>
                <div className="divider"></div>
                <ul>
                  <li>
                    <img src={tick_icon} alt="" />
                    Accès complet
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Avec publicités
                  </li>
                  {/* <li>
                    <img src={close_icon} alt="" />
                    Feature 04
                  </li>
                  <li>
                    <img src={close_icon} alt="" />
                    Feature 05
                  </li> */}
                </ul>
              </div>

              <a href="/checkout">
                <button>JE M'ABONNE</button>
              </a>
            </div>

            <div className="pricing_card">
              <div>
                <h3>ABONNEMENT MENSUEL</h3>
                <p>9,99€ / 1 mois</p>
                <div className="divider"></div>
                <ul>
                  <li>
                    <img src={tick_icon} alt="" />
                    Accès complet
                  </li>
                  <li>
                    <img src={tick_icon} alt=""  />
                    Sans publicités
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Sans engagement
                  </li>
                  {/* <li>
                    <img src={close_icon} alt="" />
                    Feature 04
                  </li>
                  <li>
                    <img src={close_icon} alt="" />
                    Feature 05
                  </li> */}
                </ul>
              </div>

              <a href="/checkout">
                <button>JE M'ABONNE</button>
              </a>
            </div>
            <div className="pricing_card pricing_card_2">
              <div>
                <div>
                  <img src={star_icon} alt="" />
                </div>
                <h3>ABONNEMENT SEMESTRIEL</h3>
                <p>47,94€ / 6 mois</p>
                <div className="divider"></div>
                <ul>
                <li>
                    <img src={tick_icon} alt="" />
                   Soit 7,99 par mois
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Accès complet
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Sans publicités
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Sans engagement
                  </li>
                  {/* <li>
                    <img src={close_icon} alt="" />
                    Feature 04
                  </li>
                  <li>
                    <img src={close_icon} alt="" />
                    Feature 05
                  </li> */}
                </ul>
              </div>

              <a href="/checkout">
                <button>JE M'ABONNE</button>
              </a>
            </div>
            <div className="pricing_card">
              <div>
                <h3>ABONNEMENT ANNUEL</h3>
                <p>71,88€ / an</p>
                <div className="divider"></div>
                <ul>
                <li>
                    <img src={tick_icon} alt="" />
                    Soit 5,99 € par mois
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Accès complet
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Sans publicités
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Sans engagement
                  </li>
                  {/* <li>
                    <img src={close_icon} alt="" />
                    Feature 04
                  </li>
                  <li>
                    <img src={close_icon} alt="" />
                    Feature 05
                  </li> */}
                </ul>
              </div>

              <a href="/checkout">
                <button>JE M'ABONNE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

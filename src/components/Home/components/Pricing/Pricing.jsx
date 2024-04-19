/** @format */

import { useState } from "react";
import tick_icon from "../../../../assets/tick_icon.png";
import close_icon from "../../../../assets/close_icon.png";
import star_icon from "../../../../assets/star-icon.png";
import upload_icon from "../../../../assets/upload-icon.png";
import "./Pricing.css";
import { NavLink } from "react-router-dom";

const Pricing = () => {
  const [togglePriceBtn, setTogglePriceBtn] = useState(true);

  // HANDLING TOGGLE PRICE BUTTON
  const handleTogglePriceBtn = () => {
    setTogglePriceBtn(!togglePriceBtn);
  };

  return (
    <div className="pricing_wrapper">
      <div className="pricing_container container">
        <div className="heading_container">
          <h2>
            Affordable Pricing <span>For you Future</span> Growth
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut. <br /> labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>
        </div>

        <div className="pricing_content">
          <div className="pricing_header">
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
          </div>

          <div className="label">ÉCONOMISEZ JUSQU’À 40%</div>

          <div className="pricing_cards">
            <div className="pricing_card">
              <div>
                <div className="icon_box">
                  <img src={star_icon} alt="" />
                </div>
                <h3>GRATUIT</h3>
                <p>Free forever *</p>
                <div className="divider"></div>
                <ul>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 01
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 02
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 03
                  </li>
                  <li>
                    <img src={close_icon} alt="" />
                    Feature 04
                  </li>
                  <li>
                    <img src={close_icon} alt="" />
                    Feature 05
                  </li>
                </ul>
              </div>

              <a href="/checkout">
                <button>Upgrade now</button>
              </a>
            </div>
            <div className="pricing_card pricing_card_2">
              <div>
                <div className="icon_box">
                  <img src={upload_icon} alt="" />
                </div>
                <h3>BASIQUE</h3>
                <p>$199 per year</p>
                <div className="divider"></div>
                <ul>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 01
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 02
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 03
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 04
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 05
                  </li>
                </ul>
              </div>

              <a href="/checkout">
                <button>Get Started</button>
              </a>
            </div>
            <div className="pricing_card">
              <div>
                <div className="icon_box">
                  <img src={star_icon} alt="" />
                </div>
                <h3>PREMIUM</h3>
                <p>$567 per year</p>
                <div className="divider"></div>
                <ul>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 01
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 02
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 03
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 04
                  </li>
                  <li>
                    <img src={tick_icon} alt="" />
                    Feature 05
                  </li>
                </ul>
              </div>

              <a href="/checkout">
                <button>Upgrade now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

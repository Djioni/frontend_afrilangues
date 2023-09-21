import app_store from "../../../../assets/app-store.png";
import play_store from "../../../../assets/google-play.png";
import mobile_img from "../../../../assets/mobile.png";
import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <div className="download_app_wrapper">
      <div className="download_container container">
        <div className="left_content">
          <div>
            <h2>
              <span>Télécharger</span> gratuitement <br /> notre application{" "}
            </h2>
            <p>
              Profitez de votre temps libre pour apprennez une <br /> langue
              africaine avec un pârcours complet partout <br /> et à tout moment
              !
            </p>
          </div>
          <div className="btn_container">
            <a href="#">
              <img src={app_store} alt="" />
            </a>
            <a href="#">
              <img src={play_store} alt="" />
            </a>
          </div>
        </div>
        <div className="right_content">
          <img src={mobile_img} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;

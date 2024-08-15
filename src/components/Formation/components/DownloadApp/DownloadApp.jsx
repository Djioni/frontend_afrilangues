
import photoapp1 from "../../../assets/Captures_d_ecran_APPLI/Screenshot_1_Afrilangues.jpg"
import photoapp2 from "../../../assets/Captures_d_ecran_APPLI/Screenshot_9_Afrilangues.jpg"
import photoapp3 from "../../../assets/Captures_d_ecran_APPLI/Screenshot_6_Afrilangues.jpg"
import photoapp4 from "../../../assets/Captures_d_ecran_APPLI/Screenshot_10_Afrilangues.jpg"
import applestore from "../../../assets/afrilangues_apple_store_qr_code.png"
import playstore from "../../../assets/afrilangues_play_store_qr_code.png"
import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <div>
      <div>
          <div className="download_container ms-2 text-center">
            <h2 className="px-3">
              <span>Téléchargez</span> gratuitement notre application
            </h2>
          </div>
          <div className="download_container ms-2">
            <p>
              Profitez de votre temps libre pour apprendre une langue
              africaine avec un parcours complet partout et à tout moment
              !
            </p>
          </div>
      </div>
      <div className="container row mx-auto">
        <div className="col-12 col-md-6 col-lg-3 my-2">
        <img src={photoapp1} alt="" className="img-fluid custom-image " />
        </div>
        <div className="col-12 col-md-6 col-lg-3 my-2">
          <img src={photoapp2} alt="" className="img-fluid custom-image " />
        </div>
        <div className="col-12 col-md-6 col-lg-3 my-2">
          <img src={photoapp3} alt="" className="img-fluid custom-image "/>
        </div>
        <div className="col-12 col-md-6 col-lg-3 my-2">
          <img src={photoapp4} alt="" className="img-fluid custom-image "/>
        </div>
      </div>
      <div className="text-center">
            <a href="https://apps.apple.com/fr/app/afrilangues-officiel/id1511912820">
              <img src={applestore} alt="" className="img-fluid custom-icon me-0"/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.afrilangues.app">
              <img src={playstore} alt="" className="img-fluid custom-icon ms-0"/>
            </a>
          </div>
    </div>
  );
};

export default DownloadApp;

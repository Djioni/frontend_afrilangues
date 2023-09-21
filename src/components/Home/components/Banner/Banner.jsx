import { NavLink } from "react-router-dom";
import banner_1 from "../../../../assets/hero-banner-1.png";
import banner_2 from "../../../../assets/hero-banner-2.png";
import banner_3 from "../../../../assets/hero-banner-3.png";
import plane_1 from "../../../../assets/plane-1.png";
import plane_2 from "../../../../assets/plane-2.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_wrapper">
      <div className="banner_container container h-100">
        <div className="row g-5 h-100">
          <div className="col-lg-8 banner_content">
            <h1 className="heading">
              <span>Apprendre</span> une langue
            </h1>
            <h1 className="heading heading_2">
              <span>africaine</span> en ligne
            </h1>
            <p className="desc">
              Immerse yourself in your new language from the first lesson.{" "}
              <br /> you diving into the language as soon as you start learning
              it.
            </p>
            <div className="btn_container">
              <NavLink to={"/dashboard"}>
                <button>Je me lance</button>
              </NavLink>
              <NavLink to={"/auth/register"}>
                <button>Je m’inscris</button>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-4  banner_content">
            <div className="banner_img_box">
              <img src={banner_1} alt="" className="banner_1" />
              <img src={banner_2} alt="" className="banner_2" />
              <img src={banner_3} alt="" className="img-fluid banner_3" />
            </div>
          </div>
        </div>
      </div>

      {/* BG PLANE ELEMENT */}
      <img src={plane_1} alt="" className="plane_elem_1" />
      <span className="plane_elem_1_text">Bambara</span>

      <img src={plane_2} alt="" className="plane_elem_2" />
      <span className="plane_elem_2_text">Lingala</span>

      <img src={plane_1} alt="" className="plane_elem_3" />
      <span className="plane_elem_3_text">Wolof</span>
    </div>
  );
};

export default Banner;

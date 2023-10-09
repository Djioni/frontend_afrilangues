import { NavLink } from "react-router-dom";
import banner_1 from "../../../../assets/hero-banner-1.png";
import banner_2 from "../../../../assets/hero-banner-2.png";
import banner_3 from "../../../../assets/hero-banner-3.png";
import plane_1 from "../../../../assets/plane-1.png";
import plane_2 from "../../../../assets/plane-2.png";
import "./Banner.css";
import { useEffect, useState } from "react";

const Banner = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [addClass, setAddClass] = useState("");

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    const handleScroll = () => {
      console.log("Hello");
      console.log(window.innerWidth);
      console.log(window.innerHeight);
    };

    // Add a resize event listener to update screen size when the window is resized
    window.addEventListener("resize", updateScreenSize);

    // Check if the scroll event listener is already attached
    if (!window.scrollListenerAdded) {
      window.addEventListener("scroll", handleScroll);
      window.scrollListenerAdded = true;
    }

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`banner_wrapper ${addClass} 	`}>
      <div className="c-banner_wrapper ">
        <div className="banner_container  h-100">
          <div className="row g-5 h-100">
            <div className="col-lg-6 banner_content">
              <h1 className="heading">
                <span>Apprendre</span> une langue
              </h1>
              <h1 className="heading heading_2">
                <span>africaine</span> en ligne
              </h1>
              <p className="desc ">
                Appendre une langue africaine partout et à tout moment avec des
                leçons courtes, interactives et complètes conçues par des
                professionnels qualifiés pour répondre à tes besoins de la vie
                quotidienne.
              </p>
              <div id="button-container">
                <div className="btn_container">
                  <div>
                    <NavLink to={"/auth/login"}>
                      <button className="bg-black text-white">
                        Essayez maintenant
                      </button>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to={"/auth/register"}>
                      <button className="text-white">Je m’inscris</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  banner_content ">
              <div className="banner_img_box">
                <img src={banner_1} alt="" className="banner_1" />
                <img src={banner_2} alt="" className="banner_2" />
                <img src={banner_3} alt="" className=" banner_3" />
              </div>
            </div>
          </div>
        </div>

        {/* BG PLANE ELEMENT */}
        <div className="root-plane-1">
          {" "}
          <div className="c-root-plane-1">
            <img src={plane_1} alt="" className="plane_elem_1" />
            <span className="plane_elem_1_text">Bambara</span>
          </div>
        </div>

        <div className="root-plane-2">
          <div className="c-root-plane-2">
            <img src={plane_2} alt="" className="plane_elem_2" />
            <span className="plane_elem_2_text">Lingala</span>
          </div>
        </div>

        <div className="root-plane-3">
          <div className="c-root-plane-3">
            <img src={plane_1} alt="" id="hero-img" className="plane_elem_3" />
            <span className="plane_elem_3_text">Wolof</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

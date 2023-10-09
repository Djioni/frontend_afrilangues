import { useRef } from "react";
import quote_img from "../../../../assets/quote-icon.png";
import quote_2_img from "../../../../assets/quote-icon-2.png";
import user_1 from "../../../../assets/user-1.png";
import user_2 from "../../../../assets/user-2.png";
import user_3 from "../../../../assets/user-3.png";
import user_4 from "../../../../assets/user-4.png";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./Testimonials.css";
import { FaUserGraduate } from "react-icons/fa";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials_wrapper">
      <div className="testimonials_container container">
        <div className="heading_container">
          <h2>
            {/* Use<span>rs</span> <span>Testi</span>monials */}
            {/* LEU<span>RS</span> AVI<span>S</span> <span>COM</span>PTENT */}
            LEURS <span>AVIS</span> COMPTENT
          </h2>
          <p>
            Pour continuer à nous améliorer et vous permettre d'avoir une idée
            du niveau de satisfaction de nos apprenants, voici ce que certains
            pensent de nous et de nos formations
          </p>
        </div>

        <div className="testimonials_cards">
          <Slider {...settings} ref={sliderRef}>
            <div className="testimonials_card">
              <div className="top">
                <div>
                  <img src={quote_img} alt="" />
                </div>
                <p>
                  Interlocuteur réactif et cours particuliers de très bonne
                  qualité pour apprendre le Mooré, je recommande Afrilangues!
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <div className="img">
                  <FaUserGraduate
                    className="icon"
                    style={{ height: "35px", width: "35px" }}
                  />
                </div>
                <p className="name">Alexis Roy</p>
                {/* <p className="employee">Alexis Roy</p> */}
              </div>
            </div>

            <div className="testimonials_card_2">
              <div className="top">
                <div>
                  <img src={quote_2_img} alt="" />
                </div>
                <p>
                  Cours de Bambara de très bonne qualité. Les cours sont
                  vraiment bien et adaptés au rythme de chacun. Idrissa est un
                  professeur au top. J’ai beaucoup appris à ses côtés. Un grand
                  merci pour tous 🙏🏾.
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <div className="img">
                  <FaUserGraduate
                    className="icon"
                    style={{ height: "35px", width: "35px" }}
                  />
                </div>
                <p className="name">Néné Sacko</p>
                {/* <p className="employee">LA at Robin</p> */}
              </div>
            </div>

            <div className="testimonials_card">
              <div className="top">
                <div>
                  <img src={quote_2_img} alt="" />
                </div>
                <p>
                  Je suis satisfait des cours que j'ai effectué avec
                  Afrilangues. Compétents, professionnels, simple d'utilisation
                  merci encore.
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <div className="img">
                  <FaUserGraduate
                    className="icon"
                    style={{ height: "35px", width: "35px" }}
                  />
                </div>{" "}
                <p className="name">Hayaya</p>
                {/* <p className="employee">LA at Robin</p> */}
              </div>
            </div>

            <div className="testimonials_card_2">
              <div className="top">
                <div>
                  <img src={quote_2_img} alt="" />
                </div>
                <p>
                  Je trouve ces publications parfaitement adaptées pour
                  découvrir ou se familiariser avec les pays d'Afrique. Pour les
                  enfants qui ne connaissent pas la terre de leurs ancêtres
                  c'est très bien adaptés. Même adultes ont y apprend beaucoup !
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <div className="img">
                  <FaUserGraduate
                    className="icon"
                    style={{ height: "35px", width: "35px" }}
                  />
                </div>{" "}
                <p className="name">L.URS</p>
                {/* <p className="employee">LA at Robin</p> */}
              </div>
            </div>
          </Slider>

          <button
            className="prev_btn"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <BsArrowLeft />
          </button>
          <button
            className="next_btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

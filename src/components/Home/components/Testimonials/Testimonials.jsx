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
            Use<span>rs</span> <span>Testi</span>monials
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae viverra ornare ornare{" "}
            <br />
            id non lorem egestas vel. Lacus varius auctor sit vitae <br />{" "}
            purus.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <img className="img" src={user_1} alt="" />
                <p className="name">Isabelle O'Conner</p>
                <p className="employee">LA at Robin</p>
              </div>
            </div>

            <div className="testimonials_card_2">
              <div className="top">
                <div>
                  <img src={quote_2_img} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <img className="img" src={user_2} alt="" />
                <p className="name">Isabelle O'Conner</p>
                <p className="employee">LA at Robin</p>
              </div>
            </div>

            <div className="testimonials_card">
              <div className="top">
                <div>
                  <img src={quote_2_img} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <img className="img" src={user_3} alt="" />
                <p className="name">Isabelle O'Conner</p>
                <p className="employee">LA at Robin</p>
              </div>
            </div>

            <div className="testimonials_card_2">
              <div className="top">
                <div>
                  <img src={quote_2_img} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <img className="img" src={user_4} alt="" />
                <p className="name">Isabelle O'Conner</p>
                <p className="employee">LA at Robin</p>
              </div>
            </div>

            <div className="testimonials_card">
              <div className="top">
                <div>
                  <img src={quote_img} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <img className="img" src={user_1} alt="" />
                <p className="name">Isabelle O'Conner</p>
                <p className="employee">LA at Robin</p>
              </div>
            </div>

            <div className="testimonials_card_2">
              <div className="top">
                <div>
                  <img src={quote_2_img} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <img className="img" src={user_2} alt="" />
                <p className="name">Isabelle O'Conner</p>
                <p className="employee">LA at Robin</p>
              </div>
            </div>

            <div className="testimonials_card">
              <div className="top">
                <div>
                  <img src={quote_2_img} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <img className="img" src={user_3} alt="" />
                <p className="name">Isabelle O'Conner</p>
                <p className="employee">LA at Robin</p>
              </div>
            </div>

            <div className="testimonials_card_2">
              <div className="top">
                <div>
                  <img src={quote_2_img} alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>

              <div className="divider"></div>

              <div className="bottom">
                <img className="img" src={user_4} alt="" />
                <p className="name">Isabelle O'Conner</p>
                <p className="employee">LA at Robin</p>
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

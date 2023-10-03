import { NavLink } from "react-router-dom";
import demo from "../../../../assets/ref-african-lan-img.png";
import "./ReferenceAfricanLanguage.css";

const ReferenceAfricanLanguage = () => {
  return (
    <div className="ref_african_language_wrapper">
      <div className="ref_african_language_container container">
        <div className="heading-container">
          <h2>
            La référence en <span>langues africaines</span>{" "}
          </h2>
          <p>
            Apprenez une langue africaine avec confiance et de façon ludique
            avec des leçons interactives n’a jamais été aussi facile et
            accessible ! Apprenez en jouant et dévenez le maître incontesté en
            défiant et en gagnant des points à échanger contre diverses
            récompenses !
          </p>
        </div>

        <div className="content_container">
          <img src={demo} alt="" className="img-fluid" />
          <NavLink to={"/auth/register"}>
            <button>JE M’INSCRIS MAINTENANT</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReferenceAfricanLanguage;

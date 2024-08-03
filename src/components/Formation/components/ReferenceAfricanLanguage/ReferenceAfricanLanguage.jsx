import voc from "../../../assets/ICONS/vocabulaire_langues_afriques_afrilangues.png";
import dial from "../../../assets/ICONS/dialogue_langues_afriques_afrilangues.png";
import gram from "../../../assets/ICONS/grammaire_langues_afriques_afrilangues.png";
import phrases from "../../../assets/ICONS/phrases_langues_afriques_afrilangues.png";
import stat from "../../../assets/ICONS/objectifs_afrilangues.png";
import "./ReferenceAfricanLanguage.css";

const ReferenceAfricanLanguage = () => {
  return (
    <div className="ref_african_language_wrapper w-full mt-lg-5">
      <div className="ref_african_language_container container ">
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
        <div className="heading-container">
          <h2>
            NOTRE <span>METHODE</span>
          </h2>
        </div>
        <div className="row mt-5 mx-auto text-center">
          <div className="col-12 col-sm-6 col-lg-2 me-lg-3 px-4 px-lg-0">
            <img
              src={voc}
              alt="Vocabulaire"
              className="img-fluid custom-image-size tw-max-w-[30%]"
            />
            <h2>Vocabulaire</h2>
            <p className="paragraph">
              {" "}
              Apprendre le vocabulaire de la leçon avec des activités ludiques
              comprenant des fichiers audios.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mx-lg-3 px-4 px-lg-0 ">
            <img
              src={gram}
              alt="Grammaire"
              className="img-fluid custom-image-size tw-max-w-[30%]"
            />
            <h2>Grammaire</h2>
            <p className="paragraph">
              Apprenez les règles de fonctionnement de la langue grâce à des
              exercices d'applications faciles
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mx-lg-3 px-4 px-lg-0 ">
            <img
              src={phrases}
              alt="Phrases"
              className="img-fluid custom-image-size tw-max-w-[30%]"
            />
            <h2>Phrases</h2>
            <p className="paragraph">
              Construisez des phrases avec les mots appris dans la section
              vocabulaire.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mx-lg-3 px-4 px-lg-0 ">
            <img
              src={dial}
              alt="Dialogue"
              className="img-fluid custom-image-size tw-max-w-[30%]"
            />
            <h2>Dialogues</h2>
            <p className="paragraph">
              Utilisez les phrases apprises dans un dialogue contextuel pour
              faciliter la production et la compréhension orale.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mx-lg-3 mx-auto px-4 px-lg-0 ">
            <img
              src={stat}
              alt="Progression"
              className="img-fluid custom-image-size tw-max-w-[30%]"
            />
            <h2>Statistiques</h2>
            <p className="paragraph">
              Mesurez votre progression et développez vos compétences grâce à
              notre système de répétition espacée.
            </p>
          </div>
        </div>

        <div className="content_container">
          <a href={"/auth/register"} className="text-decoration-none">
            <button className="text-white">JE M’INSCRIS MAINTENANT</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReferenceAfricanLanguage;

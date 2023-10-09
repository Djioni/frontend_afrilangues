import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./FrequentlyQuestions.css";

const FrequentlyQuestions = () => {
  const data1 = [
    {
      question: "En quoi consiste la méthode AFRILANGUES? ",
      answer: null,
      anwserList: [
        {
          title: "Il existe 3 méthodes pour apprendre selon vos préférences:",
          list: [
            "Les classes virtuelles : si vous êtes sociables et avez besoin de motivation, nos cours collectifs sont faits pour vous ! A hauteur d’une fois par semaine, le cours avec tuteur dure 1h30. ",
            "Accro au smartphone ? Notre application mobile vous attend sur l’Apple Store et le Play Store en Freemium ! A utiliser chaque jour pour de meilleurs résultats!",
            "Plutôt vieille école et autonome? Installez-vous confortablement derrière votre ordinateur et accédez à notre plateforme d’apprentissage en ligne disponible sur notre site. Une fois inscrit, vous disposez d’un mois d’essai gratuit.            ",
          ],
        },
      ],
    },
    {
      question: "Quelles sont les langues disponibles ? ",
      answer: `Bambara, Soninké, Wolof, Sérère, Lingala, Lari, Swahili, Pulaar, Fongbe, Mina, Douala, Amharique, Sango, Bassa, Mina, Yoruba, Mooré, Baoulé, Bété, Ewondo, Ghomala, Kirundi, Kinyarwanda ${(
        <br />
      )}
      Nos enseignants sont des locuteurs natifs ayant fait des études linguistiques. Il n’y a pas d’amateurs.
      `,
      anwserList: null,
    },
    {
      question: "Quelles sont les langues disponibles ?",
      answer:
        "L’Afrique compte plus de 2 000 langues. Malgré notre bonne volonté, nous ne pouvons pas rendre disponible toutes les langues. Leur présence dépend de la demande et de la disponibilité des enseignants qualifiés. Si vous ne trouvez pas votre langue, écrivez-nous à contact@afrilangues.fr ",
      anwserList: null,
    },
    {
      question: "En combien de temps puis-je apprendre une langue ?",
      answer:
        "Cela dépend largement de votre implication. Plus vous serez régulier, apprenez et pratiquez (en alliant cours collectifs et application mobile par exemple), plus vous engendrerez de vocabulaire et serez peu à peu capables de vous exprimer !",
      anwserList: null,
    },
    {
      question: "Les cours d’Afrilangues sont-ils payants ?",
      answer:
        "Oui, nos cours sont payants. La création de contenu (vidéo, audio, intégration de contenus,…), la maintenance et mise à jour de la plateforme ont un coût. De plus, l’ensemble de nos collaborateurs (techniques, professeurs, illustrateurs,…) sont rémunérés. ",
      anwserList: null,
    },
    {
      question: "Les cours Afrilangues sont disponibles sur quels supports ?",
      answer:
        "Nos cours sont disponibles sur ordinateur et sur mobile (Android et IOS).",
      anwserList: null,
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ? ",
      answer:
        "Oui, vous pouvez annuler votre abonnement à tout moment car c’est sans engament. L’annulation sera prise en compte dès l’expiration de l’abonnement en cours.      ",
      anwserList: null,
    },
    {
      question:
        "En plus des cours en ligne (E-learning), puis-je être accompagné par un tuteur ?",
      answer:
        "Oui, vous pouvez être accompagné par un tuteur en raison de 4 séances de 30 minutes par mois.",
      anwserList: null,
    },
    {
      question: " L’accompagnement par le tuteur se fait où et comment?",
      answer:
        "L’accompagnement se fait par visio-conférence via notre système de classe virtuelle. Un lien de connexion vous sera envoyé. Il vous suffira simplement de cliquer dessus pour rejoindre la salle de cours.  ",
      anwserList: null,
    },
    {
      question:
        "Quels supports / navigateurs ai-je besoin pour les cours par visio-conférence ?",
      answer:
        "Pour la visio, nous vous recommandons d’utiliser Chrome ou Safari.",
      anwserList: null,
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?   ",
      answer:
        "Oui, vous pouvez annuler votre abonnement à tout moment car c’est sans engament. L’annulation sera prise en compte dès l’expiration de l’abonnement en cours.  ",
      anwserList: null,
    },
    ,
    {
      question:
        " De quels supports / navigateurs ai-je besoin pour les cours par visio-conférence ?      ",
      answer:
        "Pour la visio, nous vous recommandons d’utiliser Chrome ou Safari.",
      anwserList: null,
    },
  ];
  const data = [
    {
      question: "Quels types de cours proposez-vous ?",
      answer: null,
      anwserList: [
        {
          title: "Cours en présentiel :           ",
          list: [
            "Il s’agit de cours en face à face avec votre enseignant, dans nos locaux, à chez vous ou sur votre lieu de travail. Nos enseignants ne se déplacent qu’en région parisienne à ce jour ",
            "Ils peuvent se faire en petit groupe de 4 - 5 personnes ou sur-mesure notamment pour les cours privés",
            "Classes virtuelles : si vous êtes sociables et avez besoin de motivation, nos cours collectifs sont faits pour vous ! A hauteur d’une fois par semaine, nos enseignants animent des cours en direct en petit groupe via notre plateforme. .            ",
          ],
        },
        {
          title: "Vous méritez des outils pédagogiques complets !: ",
          list: [
            "Accro au smartphone ? Notre application mobile vous attend sur l’Apple Store et le Play Store en Freemium ! À utiliser chaque jour pour de meilleurs résultats !",
            "Plutôt vieille école et autonome ? Installez-vous confortablement derrière votre ordinateur et accédez à notre plateforme d’apprentissage en ligne disponible sur notre site. ",
            "Une fois inscrit, vous disposez d’un mois d’essai gratuit.",
          ],
        },
      ],
    },

    {
      question: "Quelles langues africaines enseignez-vous ? ",
      answer:
        "À ce jour, nous enseignons le Bambara, le Soninké, le Wolof, le Sérère, le Lingala, le Laari, le Swahili, le Pulaar, le Fon, le Mina, le Duala, l’Amharique, le Sango, le Bassa, le Yoruba, le Mooré, le Baoulé, le Bété, l’Ewondo, le Ghomala, le Kirundi, le Kinyarwanda. ",
      anwserList: null,
    },
    {
      question: "Que faire si je ne vois pas ma langue ?  ",
      answer:
        "L’Afrique compte plus de 2 000 langues. Malgré notre bonne volonté, nous ne pouvons pas rendre disponible toutes les langues. Leur présence dépend de la demande et de la disponibilité des enseignants qualifiés. Si vous ne trouvez pas votre langue, écrivez-nous à contact@afrilangues.fr ",
      anwserList: null,
    },
    {
      question: "En combien de temps puis-je apprendre une langue ? ",
      answer: null,
      anwserList: [
        {
          title: "",
          list: [
            "Cela dépend largement de votre implication, votre investissement personnel. Instaurez une routine d’apprentissage dès le début et vous allez vous surprendre. ",
            "Nous vous promettons de vous donner les clés pour apprendre le vocabulaire, la grammaire et les activités nécessaires à la production et l’expression orale. Mais sachez que malgré tout l’amour qu’on peut vous porter, nous ne pouvons pas apprendre à votre place ! Comme disent les Bambara « Kun tɛ di kuntigi kɔ. » ‘On ne peut pas raser la tête de quelqu’un en son absence’.",
            "Plus vous serez régulier dans vos apprentissages, en alliant cours collectifs et application mobile par exemple, plus serez en capacité de vous exprimer aisément !",
          ],
        },
      ],
    },
    {
      question: "Quel est le profil de vos enseignants ? ",
      answer:
        "Nos enseignants sont des locuteurs natifs ayant fait des études linguistiques dont la plupart sont en Afrique. Donc, en vous inscrivant à nos cours, vous participez à la création d’emploi aussi au pays, et cela, vous pouvez en être fier comme nous !",
      anwserList: null,
    },
    {
      question: "Les cours d’Afrilangues sont-ils payants ?",
      answer: null,
      anwserList: [
        {
          title: "",
          list: [
            "Oui, nos cours sont payants mais très accessibles.",
            "La création de contenus pédagogiques nécessite du temps et surtout des ressources pour rémunérer de prime abord nos enseignants, acheter du matériel d’enregistrement audio et vidéo, les illustrations, la maintenance de la plateforme etc",
          ],
        },
      ],
    },
  ];

  // const data[
  //   question:"",
  //   answer:
  // ]
  console.log("data", data);
  const [activeIndex, setActiveIndex] = useState(null);
  const [toggleTopic, setToggleTopic] = useState({
    value: true,
    id: 1, // Initial ID value, you can set it as needed
  });

  // HANDLE TOGGLE QUESTIONS BUTTON
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // HANDLE TOGGLE TOPIC
  const handleToggleQuestionBtn = (id) => {
    setToggleTopic((prevState) => ({
      value: !prevState.value,
      id: id,
    }));
  };

  return (
    <div className="frequently_questions_wrapper">
      <div className="frequently_questions_container container">
        <div className="heading_container">
          <h2>
            {/* Frequently <span>asked</span> */}
            LES <span>QUESTIONS</span> QU'ON NOUS POSE SOUVENT
          </h2>
          <p>
            Vous voulez apprendre une langue d'Afrique et vous souhaitez trouver{" "}
            des réponses à vos questions, voici celles qu'on nous pose le plus
            souvent !
          </p>

          {/* <div className="toggle_questions">
            <button
              onClick={() => handleToggleQuestionBtn(1)}
              className={toggleTopic.id === 1 ? "active" : ""}
            >
              General
            </button>
            <button
              onClick={() => handleToggleQuestionBtn(2)}
              className={toggleTopic.id === 2 ? "active" : ""}
            >
              Support
            </button>
            <button
              onClick={() => handleToggleQuestionBtn(3)}
              className={toggleTopic.id === 3 ? "active" : ""}
            >
              Product
            </button>
          </div> */}
        </div>

        <div className="accordion_container">
          {data.map((QAData, index) => (
            <div className="accordion_item" key={index}>
              <div
                className={`accordion_header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleItem(index)}
              >
                <span className="number">
                  {index >= 9 ? `${index + 1}.` : `0${index + 1}.`}
                </span>
                <span style={{ lineHeight: "35px" }}>{QAData.question}</span>
                {activeIndex === index ? (
                  <IoIosArrowDown className="arrow_icon" />
                ) : (
                  <IoIosArrowUp className="arrow_icon" />
                )}
              </div>
              <div
                className={`accordion_content ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                {QAData.anwserList ? (
                  <div>
                    {QAData.anwserList.map((listdata) => (
                      <div>
                        <h2> {listdata.title}</h2>
                        <ul className="pt-2">
                          {listdata.list.map((value) => (
                            <li
                              className="py-1"
                              style={{ listStyle: "initial" }}
                            >
                              {value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  QAData.answer
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestions;
